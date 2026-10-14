import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";
import { getPostBySlug } from "../../lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return pageMetadata({
      title: "Resources",
      description: "Guides on payment infrastructure, compliance, and building for African markets.",
      path: `/resources/${slug}`,
    });
  }

  return pageMetadata({
    // pageMetadata appends the brand, so drop the spec's own "| PayOnUs" suffix.
    title: (post.seoTitle ?? post.title).replace(/\s*\|\s*PayOnUs$/i, ""),
    description: post.excerpt,
    path: `/resources/${post.slug}`,
  });
}

export default async function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: post?.title ?? slug, path: `/resources/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {post && post.faqs.length > 0 && <JsonLd data={faqJsonLd(post.faqs)} />}
      {children}
    </>
  );
}
