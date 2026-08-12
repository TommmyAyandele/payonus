import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Payonus collects, uses, discloses, and safeguards your personal information across our payment processing services and digital banking platform.",
  path: "/privacy",
});

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
