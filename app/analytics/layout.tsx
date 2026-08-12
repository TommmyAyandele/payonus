import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Analytics",
  description: "Real-time dashboards, revenue insights, and fraud signals — all in one place. Know what's working, fix what isn't, and grow with confidence.",
  path: "/analytics",
});

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
