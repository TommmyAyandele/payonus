import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "The terms and conditions governing your use of Payonus payment processing services, provided by Paylode Services Limited, a CBN-licensed Payment Service Solution Provider.",
  path: "/terms",
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
