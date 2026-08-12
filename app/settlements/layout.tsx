import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Settlements",
  description: "Same-day settlements across 8 African markets. Multi-currency, automated reconciliation, and flexible schedules — so your cash flow never waits.",
  path: "/settlements",
});

export default function SettlementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
