import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Developers",
  description: "A single, well-documented REST API for every Payonus product. Sandbox-first, webhook-ready, with SDKs in the languages your team already uses.",
  path: "/developers",
});

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
