import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";
import { JOBS } from "./careers/jobs-data";
import { getAllPosts } from "./lib/blog";

const TOOL_PATHS = [
  "/tools/african-gaming-payment-readiness-assessment",
  "/tools/african-forex-payment-provider-checklist",
  "/tools/cross-border-ecommerce-payment-cost-settlement-worksheet",
  "/tools/aviation-payment-provider-evaluation-scorecard",
];

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
  "/industries/aviation",
  "/industries/fintech",
  "/industries/ecommerce",
  "/industries/logistics",
  "/industries/forex",
  "/industries/gaming",
  "/industries/manufacturing",
  "/fr",
  "/fr/industries/aviation",
  "/fr/industries/fintech",
  "/fr/industries/ecommerce",
  "/fr/industries/logistics",
  "/fr/industries/forex",
  "/fr/industries/gaming",
  "/fr/industries/manufacturing",
  "/privacy",
  "/terms",
  "/isms-policy",
  "/whistleblower",
  "/resources",
  ...TOOL_PATHS,
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

  const resourceEntries = getAllPosts().map((post) => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified,
  }));

  return [...staticEntries, ...jobEntries, ...resourceEntries];
}
