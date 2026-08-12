import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../lib/blog";
import ArticleView from "./ArticleView";

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <ArticleView post={post} />;
}
