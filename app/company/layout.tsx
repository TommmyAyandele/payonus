import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Payonus is payment infrastructure for local and international businesses across Africa — a product of Paylode Services Limited, a CBN-licensed Payment Service Solution Provider.",
  path: "/company",
});

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
