import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";

const PATH = "/tools/aviation-payment-provider-evaluation-scorecard";

export const metadata: Metadata = pageMetadata({
  title: "Aviation Payment Provider Evaluation Scorecard",
  description: "Compare aviation payment providers across coverage, reliability, refunds, risk, settlement, reconciliation, APIs and operational support with this free scorecard.",
  path: PATH,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Aviation", path: "/resources/aviation" },
  { name: "Aviation Payment Provider Evaluation Scorecard", path: PATH },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
