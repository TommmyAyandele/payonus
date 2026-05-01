"use client";
import React from "react";
import ProductPage, { ProductFeature } from "../ProductPage";
import { T } from "../Navbar";

const FEATURES: ProductFeature[] = [
  {
    title: "Same-day settlements",
    desc: "Receive your funds on the same business day. No waiting three to five days for transfers to clear — your balance is available when you need it.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={T.primary} strokeWidth="1.5"/><path d="M12 7v5l3 3" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Multi-currency payouts",
    desc: "Settle in NGN, GHS, KES, ZAR, and more. We handle FX at competitive mid-market rates — no hidden conversion fees buried in the spread.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke={T.primary} strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" stroke={T.primary} strokeWidth="1.5"/></svg>,
  },
  {
    title: "Flexible settlement schedules",
    desc: "Choose daily, weekly, or on-demand settlement cycles. Set a minimum threshold and we release funds automatically when it's hit — or pull manually any time.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M16 2v4M8 2v4M3 10h18" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke={T.primary} strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    title: "Automated reconciliation",
    desc: "Every settlement is automatically matched to its source transactions and tagged with your references. One-click CSV or PDF export for your finance team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke={T.primary} strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Split settlements",
    desc: "Route a percentage of each collection directly to sub-accounts — vendors, partners, or revenue-share recipients — before the main settlement is released.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="2" stroke={T.primary} strokeWidth="1.5"/></svg>,
  },
  {
    title: "Real-time balance visibility",
    desc: "See your available balance, pending settlements, and in-transit funds in a single dashboard view. No calling your account manager to find out where your money is.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" stroke={T.primary} strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke={T.primary} strokeWidth="1.5"/></svg>,
  },
];

export default function SettlementsPage() {
  return (
    <ProductPage
      label="• Settlements"
      heading={<>Your money, settled<br />fast — <span style={{ color: T.primary }}>every time.</span></>}
      subtext="Same-day settlements across 14+ African markets. Multi-currency, automated reconciliation, and flexible schedules — so your cash flow never waits."
      features={FEATURES}
      featuresHeading={<>Everything you need to<br />move money <span style={{ color: T.primary }}>efficiently.</span></>}
      marketsHeading={<><span style={{ color: T.dark }}>Settle in any market,</span><br /><span style={{ color: T.primary }}>on your timeline.</span></>}
      marketsSubtext="Whether you're settling NGN to a Lagos bank or KES to M-Pesa, Payonus handles the local rails so funds land where they need to — same day, every day."
      ctaHeading={<>Ready to unlock<br /><span style={{ color: T.primary }}>faster settlements?</span></>}
      ctaSubtext="Set your settlement schedule and start moving money on your terms. No lengthy onboarding."
    />
  );
}
