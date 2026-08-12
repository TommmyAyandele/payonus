import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";
import { ARTICLES } from "../articles-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return pageMetadata({
      title: "Resources",
      description: "Guides on payment infrastructure, compliance, and building for African markets.",
      path: `/resources/${slug}`,
    });
  }

  return pageMetadata({
    title: article.title,
    description: article.subtitle,
    path: `/resources/${article.slug}`,
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
  const article = ARTICLES.find(a => a.slug === slug);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: article?.title ?? slug, path: `/resources/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
