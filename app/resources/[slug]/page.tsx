"use client";

import LegalPage from "../../LegalPage";
import { ARTICLES } from "../articles-data";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === params.slug);

  if (!article) notFound();

  return (
    <LegalPage
      eyebrow="Resources"
      title={article.title}
      subtitle={article.subtitle}
      updated={article.updated}
      sections={article.sections}
    />
  );
}
