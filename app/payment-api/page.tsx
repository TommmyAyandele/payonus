"use client";
import React from "react";
import ProductPage, { ProductFeature } from "../ProductPage";
import { T } from "../Navbar";

const FEATURES: ProductFeature[] = [
  {
    title: "RESTful API design",
    desc: "Clean, predictable endpoints with consistent request and response shapes. Built for developers who value good API design — not workarounds and edge cases.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "SDKs for every stack",
    desc: "Official libraries for Node.js, Python, PHP, Go, and Ruby. Type-safe, well-documented, and maintained by the same team that builds the API.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polyline points="16 18 22 12 16 6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Sandbox environment",
    desc: "A full-fidelity test environment that mirrors production — including realistic bank response codes, webhook delivery, and failure scenarios. Ship with confidence.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M9 9l2 2-2 2M13 11h3" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Idempotent requests",
    desc: "Pass an idempotency key and retry any request safely. Duplicate charges are impossible — even when your network drops mid-request or your server restarts.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 15a9 9 0 1 0 .49-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Webhook delivery",
    desc: "Signed, versioned webhook payloads delivered with automatic retries and exponential back-off. Test delivery in-dashboard with one click.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Versioned API",
    desc: "We never silently break existing integrations. Every breaking change ships behind a new version, and old versions stay supported so you upgrade on your schedule.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2" stroke={T.primary} strokeWidth="1.5"/><circle cx="5" cy="19" r="2" stroke={T.primary} strokeWidth="1.5"/><circle cx="19" cy="19" r="2" stroke={T.primary} strokeWidth="1.5"/><path d="M12 7v4M12 11l-5 6M12 11l5 6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

export default function PaymentApiPage() {
  return (
    <ProductPage
      label="• Payment API"
      heading={<>One API for<br />all African<br /><span style={{ color: T.primary }}>payments.</span></>}
      subtext="A single, well-designed REST API to send and receive money across cards, bank transfers, USSD, and mobile money — in 14+ markets, with one integration."
      features={FEATURES}
      featuresHeading={<>Built for developers<br />who care about <span style={{ color: T.primary }}>quality.</span></>}
      marketsHeading={<><span style={{ color: T.dark }}>One integration,</span><br /><span style={{ color: T.primary }}>every market.</span></>}
      marketsSubtext="Stop maintaining separate integrations for each market and payment method. The Payonus API handles the complexity — local rails, regulatory differences, and currency handling — behind one clean interface."
      ctaHeading={<>Ready to build your<br /><span style={{ color: T.primary }}>first integration?</span></>}
      ctaSubtext="Your first API call takes minutes, not days. Full sandbox access, no approval needed."
    />
  );
}
