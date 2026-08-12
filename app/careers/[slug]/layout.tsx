import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";
import { JOBS } from "../jobs-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    return pageMetadata({
      title: "Careers",
      description: "Join a mission-driven team building payment infrastructure for a continent on the move.",
      path: `/careers/${slug}`,
    });
  }

  return pageMetadata({
    title: `${job.title} — ${job.dept}`,
    description: job.desc,
    path: `/careers/${job.slug}`,
  });
}

export default async function CareerSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: job?.title ?? slug, path: `/careers/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
