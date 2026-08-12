import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Information Security Management Policy",
  description: "Payonus's ISO 27001-aligned Information Security Management System policy for protecting information assets.",
  path: "/isms-policy",
});

export default function IsmsPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
