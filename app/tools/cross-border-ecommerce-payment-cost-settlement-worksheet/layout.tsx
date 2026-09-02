import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";

const PATH = "/tools/cross-border-ecommerce-payment-cost-settlement-worksheet";

export const metadata: Metadata = pageMetadata({
  title: "Cross-Border E-commerce Payment Cost & Settlement Worksheet",
  description: "Identify payment conversion losses, hidden fees, settlement delays, and reconciliation costs across your African e-commerce markets with this free worksheet.",
  path: PATH,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "E-commerce", path: "/resources/ecommerce" },
  { name: "Cross-Border E-commerce Payment Cost & Settlement Worksheet", path: PATH },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
