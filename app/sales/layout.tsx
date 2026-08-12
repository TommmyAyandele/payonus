import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Contact Sales",
  description: "Tell us about your payment needs and a member of our sales team will be in touch within one business day.",
  path: "/sales",
});

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
