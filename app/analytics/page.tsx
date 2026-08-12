"use client";
import React from "react";
import ProductPage, { ProductFeature } from "../ProductPage";
import { T } from "../Navbar";

const FEATURES: ProductFeature[] = [
  {
    title: "Real-time transaction dashboard",
    desc: "Every payment, transfer, and settlement updates live in your dashboard. No refreshing, no waiting — see what's happening across your entire operation right now.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M6 11l3-3 3 3 5-5" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Revenue insights",
    desc: "Break down revenue by product, channel, region, or time period. Spot trends, compare periods, and share clean charts directly with your finance team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><line x1="12" y1="2" x2="12" y2="22" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Conversion funnel tracking",
    desc: "See exactly where customers drop off in your checkout — by payment method, market, or device. Identify friction points before they cost you revenue.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Fraud and risk signals",
    desc: "Machine-learning risk scores and anomaly detection surfaced in real-time. Catch unusual patterns before they become chargebacks — without blocking good customers.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Exportable reports",
    desc: "One-click export of any date range, filtered by any dimension — CSV for spreadsheets, PDF for board packs. Schedule recurring exports to land in your inbox automatically.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Custom alerts",
    desc: "Set thresholds for failure rates, volume spikes, or settlement delays — and get notified via email, Slack, or webhook the moment something needs your attention.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export default function AnalyticsPage() {
  return (
    <ProductPage
      label="• Analytics"
      heading={<>See everything,<br />understand <span style={{ color: T.primary }}>every payment.</span></>}
      subtext="Real-time dashboards, revenue insights, and fraud signals — all in one place. Know what's working, fix what isn't, and grow with confidence."
      features={FEATURES}
      featuresHeading={<>Data that actually<br />helps you <span style={{ color: T.primary }}>decide.</span></>}
      marketsHeading={<><span style={{ color: T.dark }}>Insights across</span><br /><span style={{ color: T.primary }}>every market.</span></>}
      marketsSubtext="Track performance by country, payment method, and channel — all in one view. Know which markets are converting and where to invest next."
      ctaHeading={<>Ready to understand<br /><span style={{ color: T.primary }}>your payments better?</span></>}
      ctaSubtext="Connect your account and your first insights are live in seconds. No setup required."
      relatedLinks={[
        { label: "Fintech", href: "/industries/fintech" },
        { label: "E-commerce", href: "/industries/ecommerce" },
        { label: "Security", href: "/security" },
      ]}
    />
  );
}
