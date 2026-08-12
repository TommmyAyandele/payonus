import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "API Documentation",
  description: "Welcome to the Payonus API documentation. Integrate with our payment processing platform to enable seamless financial transactions for your business.",
  path: "/docs",
});

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
