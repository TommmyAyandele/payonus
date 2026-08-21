import type { Metadata } from "next";

export const SITE_URL = "https://payonus.com";
const SITE_NAME = "Payonus";
const DEFAULT_OG_IMAGE = "/dashboard-preview.png";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    sameAs: [
      "https://www.linkedin.com/company/payonus/posts/?feedView=all",
      "https://www.instagram.com/trypayonus/",
      "https://x.com/trypayonus",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function pageMetadata({
  title,
  description,
  path,
  locale = "en",
  alternatePath,
}: {
  title: string;
  description: string;
  path: string;
  locale?: "en" | "fr";
  /** Path of this page's translation in the other language, e.g. "/fr/industries/logistics" from "/industries/logistics". */
  alternatePath?: string;
}): Metadata {
  const fullTitle = `${title} | Payonus`;
  const url = `${SITE_URL}${path}`;

  const languages: Record<string, string> | undefined = alternatePath
    ? locale === "fr"
      ? { en: `${SITE_URL}${alternatePath}`, fr: url, "x-default": `${SITE_URL}${alternatePath}` }
      : { en: url, fr: `${SITE_URL}${alternatePath}`, "x-default": url }
    : undefined;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url, ...(languages ? { languages } : {}) },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
