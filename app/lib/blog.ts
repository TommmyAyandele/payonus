import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  category: string;
  excerpt: string;
  date: string;
  relatedLabel?: string;
  relatedHref?: string;
}

export interface Post extends PostMeta {
  html: string;
  toc: { id: string; text: string }[];
  faqs: { q: string; a: string }[];
}

function slugify(text: string) {
  return text.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function stripMd(text: string) {
  return text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "").trim();
}

// Questions are the ### headings under a "Frequently Asked Questions" ##
// section; each answer is the text up to the next heading.
function extractFaqs(content: string) {
  const faqs: { q: string; a: string }[] = [];
  const section = content.split(/^## /m).find(s => /^Frequently Asked Questions/i.test(s));
  if (!section) return faqs;
  for (const block of section.split(/^### /m).slice(1)) {
    const [q, ...rest] = block.split("\n");
    const a = stripMd(rest.join(" ").replace(/\s+/g, " "));
    if (q.trim() && a) faqs.push({ q: stripMd(q), a });
  }
  return faqs;
}

function readPostFile(filename: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  return matter(raw);
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    category: String(data.category ?? "General"),
    excerpt: String(data.excerpt ?? ""),
    date: String(data.date ?? ""),
    relatedLabel: data.relatedLabel ? String(data.relatedLabel) : undefined,
    relatedHref: data.relatedHref ? String(data.relatedHref) : undefined,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => ({ f, data: readPostFile(f).data }))
    .filter(({ data }) => typeof data.title === "string")
    .map(({ f, data }) => toMeta(f.replace(/\.md$/, ""), data))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map(p => p.category)));
}

export function getPostBySlug(slug: string): Post | null {
  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, filename))) return null;
  const { data, content } = readPostFile(filename);
  if (typeof data.title !== "string") return null;
  const toc: { id: string; text: string }[] = [];
  const html = (marked.parse(content, { async: false }) as string).replace(
    /<h2>(.*?)<\/h2>/g,
    (_, inner: string) => {
      const id = slugify(inner);
      toc.push({ id, text: inner.replace(/<[^>]+>/g, "") });
      return `<h2 id="${id}">${inner}</h2>`;
    },
  );
  return { ...toMeta(slug, data), html, toc, faqs: extractFaqs(content) };
}
