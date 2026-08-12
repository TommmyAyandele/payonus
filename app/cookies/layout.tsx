import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How Payonus uses cookies to keep you signed in, remember preferences, detect fraud, and improve our platform.",
  path: "/cookies",
});

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
