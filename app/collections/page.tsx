"use client";
import React from "react";
import ProductPage, { ProductFeature } from "../ProductPage";
import { T } from "../Navbar";

const FEATURES: ProductFeature[] = [
  {
    title: "Multi-channel payments",
    desc: "Accept cards, bank transfer, USSD, and mobile money — all through a single integration. No switching between processors or managing multiple contracts.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M2 10h20" stroke={T.primary} strokeWidth="1.5"/><path d="M6 15h4M14 15h2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Instant payment confirmation",
    desc: "Real-time webhook notifications the moment a payment clears. Build instant order confirmation, automated fulfilment, and live status tracking without polling.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Smart payment routing",
    desc: "Every transaction is automatically routed to the highest-success channel for that customer's bank and location — without any configuration from your team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.5"/><circle cx="18" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.5"/><circle cx="12" cy="18" r="2.5" stroke={T.primary} strokeWidth="1.5"/><path d="M8.5 6h7M13.5 16.5l4-9M10.5 16.5l-4-9" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Hosted checkout page",
    desc: "A production-ready, mobile-optimised checkout page you can go live with in minutes. Custom branding, domain, and payment methods — no UI code required.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M7 8h5M7 11h3" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Automatic reconciliation",
    desc: "Every payment is automatically matched to your orders and tagged with your references. Exportable reports in CSV or PDF — ready for your finance team any time.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke={T.primary} strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Retry logic built in",
    desc: "Failed payments are automatically retried on the next best channel. Higher conversion rates without any extra integration effort from your engineering team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 15a9 9 0 1 0 .49-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

export default function CollectionsPage() {
  return (
    <ProductPage
      label="• Collections"
      heading={<>Accept payments,<br />anywhere in <span style={{ color: T.primary }}>Africa.</span></>}
      subtext="A unified checkout and collections API for card, bank transfer, USSD, and mobile money across 8 African markets — in one integration."
      features={FEATURES}
      featuresHeading={<>Everything you need to<br />collect payments <span style={{ color: T.primary }}>reliably.</span></>}
      marketsHeading={<><span style={{ color: T.dark }}>One checkout,</span><br /><span style={{ color: T.primary }}>every customer.</span></>}
      marketsSubtext="Your customers pay the way they know — whether that's Verve, GTBank transfer, MTN Mobile Money, or USSD. Payonus handles the rails, you handle the product."
      ctaHeading={<>Ready to start accepting<br /><span style={{ color: T.primary }}>payments without friction?</span></>}
      ctaSubtext="Set up your first collection in minutes. No lengthy onboarding, no waiting weeks for approval."
    />
  );
}
