import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { JOBS } from "./careers/jobs-data";
import { ARTICLES } from "./resources/articles-data";

const STATIC_PATHS = [
  "/",
  "/pricing",
  "/payouts",
  "/collections",
  "/settlements",
  "/payment-api",
  "/analytics",
  "/company",
  "/careers",
  "/security",
  "/support",
  "/sales",
  "/docs",
  "/developers",
  "/resources",
  "/industries/aviation",
  "/industries/fintech",
  "/industries/ecommerce",
  "/industries/logistics",
  "/industries/forex",
  "/industries/gaming",
  "/industries/manufacturing",
  "/privacy",
  "/terms",
  "/cookies",
  "/isms-policy",
  "/whistleblower",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));

  const jobEntries = JOBS.map((job) => ({
    url: `${SITE_URL}/careers/${job.slug}`,
    lastModified,
  }));

  const articleEntries = ARTICLES.map((article) => ({
    url: `${SITE_URL}/resources/${article.slug}`,
    lastModified,
  }));

  return [...staticEntries, ...jobEntries, ...articleEntries];
}
