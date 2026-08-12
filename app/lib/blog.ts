import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  relatedLabel?: string;
  relatedHref?: string;
}

export interface Post extends PostMeta {
  html: string;
}

function readPostFile(filename: string) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  return matter(raw);
}

function toMeta(slug: string, data: Record<string, unknown>): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
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
  return {
    ...toMeta(slug, data),
    html: marked.parse(content, { async: false }) as string,
  };
}
