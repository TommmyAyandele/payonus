import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";

const PATH = "/tools/african-forex-payment-provider-checklist";

export const metadata: Metadata = pageMetadata({
  title: "African Forex Payment Provider Checklist",
  description: "Compare forex payment providers across payment methods, market coverage, deposits, payouts, settlement, risk, reconciliation and commercial fit.",
  path: PATH,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Forex", path: "/resources/forex" },
  { name: "African Forex Payment Provider Checklist", path: PATH },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
