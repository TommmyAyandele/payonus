import { pageMetadata, breadcrumbJsonLd } from "../seo";
import JsonLd from "../JsonLd";

export const metadata = pageMetadata({
  title: "Resources",
  description: "Guides on payment infrastructure, compliance, and building for African markets.",
  path: "/resources",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      {children}
    </>
  );
}
