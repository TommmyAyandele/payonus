import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Careers",
  description: "Join a mission-driven team building payment infrastructure for a continent on the move. We're hiring across engineering, growth, and product.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
