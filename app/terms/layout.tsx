import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions governing your use of Payonus's payment processing services.",
  path: "/terms",
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
