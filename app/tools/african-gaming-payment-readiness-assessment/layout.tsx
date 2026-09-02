import type { Metadata } from "next";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import JsonLd from "../../JsonLd";

const PATH = "/tools/african-gaming-payment-readiness-assessment";

export const metadata: Metadata = pageMetadata({
  title: "African Gaming Payment Readiness Assessment",
  description: "Assess whether your gaming payment setup is ready for African expansion, including deposits, payouts, payment methods, market coverage, and operational requirements.",
  path: PATH,
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Gaming", path: "/resources/gaming" },
  { name: "African Gaming Payment Readiness Assessment", path: PATH },
]);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
