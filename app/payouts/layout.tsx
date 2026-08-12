import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Payouts",
  description: "Pay anyone, anywhere across Africa. Send bulk or single payouts to vendors, contractors, and partners across 8 African markets — in seconds, not days.",
  path: "/payouts",
});

export default function PayoutsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
