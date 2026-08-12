import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Payonus is a CBN-licensed Payment Service Solution Provider building payment infrastructure for local and international businesses across Africa. Founded in Lagos, trusted across the continent.",
  path: "/company",
});

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
