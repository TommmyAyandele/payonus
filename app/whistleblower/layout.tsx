import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Whistleblower Reporting",
  description: "Confidentially report concerns regarding policy violations, unethical behavior, or other issues to Payonus.",
  path: "/whistleblower",
});

export default function WhistleblowerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
