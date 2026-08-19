"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const FAQS = [
  { q: "Which countries does Payonus operate in?", a: "Payonus operates across 8 African markets: Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
  { q: "What can I use Payonus for?", a: "Payonus brings together Collections, Payouts, Instant Settlements, a Payment API, and Analytics & Reporting, so you can accept payments, move money out, and monitor activity from one place." },
  { q: "Is Payonus secure and compliant?", a: "Yes. Payonus is aligned with ISO 27001 and PCI DSS Level 1 standards, with encryption, KYC and transaction audit trails, and 24/7 infrastructure monitoring backed by a 99% uptime SLA." },
  { q: "How do I integrate Payonus into my platform?", a: "You can connect through the Payonus Payment API, with documentation to help your team integrate collections, payouts and reporting into your existing systems." },
  { q: "Does Payonus support multiple currencies?", a: "Payonus supports relevant currencies across its operating markets, so you can collect and pay out in the currencies your business needs, where available." },
  { q: "How long does it take to get started?", a: "Most businesses can get started quickly by signing up and completing onboarding. Our team can also walk you through a demo based on how your business moves money." },
];

export default function HomeFaqSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section style={{ width: "100%", background: "#FAFAF8", padding: `${isMobile ? 56 : 88}px 0` }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <h2 style={{
          margin: `0 0 ${isMobile ? 32 : 48}px`,
          fontFamily: "Rubik, sans-serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: isMobile ? 28 : isTablet ? 36 : 44,
          lineHeight: 1.12,
          color: "#0F0C36",
        }}>
          Frequently asked questions
        </h2>
        <div>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderTop: i === 0 ? "1px solid #E7E0EC" : "none", borderBottom: "1px solid #E7E0EC" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", gap: 24, textAlign: "left" }}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: isMobile ? 15 : 16, color: "#1C1B1F" }}>{faq.q}</span>
                <span style={{ fontSize: 24, fontWeight: 300, color: "#6009FF", flexShrink: 0, lineHeight: 1, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform .22s cubic-bezier(.16,1,.3,1)" }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 400 : 0, overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)" }}>
                <p style={{ margin: "0 0 22px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: "#49454F", paddingRight: isMobile ? 0 : 56 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
