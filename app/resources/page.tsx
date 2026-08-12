"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import HeroBg from "../HeroBg";

function useScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

interface Category {
  title: string;
  desc: string;
  href?: string;
  linkLabel?: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Payment Infrastructure Education",
    desc: "How payment rails, settlement cycles, and cross-border processing work across African markets.",
  },
  {
    title: "Compliance",
    desc: "Licensing, data protection, and the regulatory standards that govern payment processing in Africa.",
    href: "/security",
    linkLabel: "See our security & compliance standards",
  },
  {
    title: "Payment APIs",
    desc: "Integration guides and best practices for building on the Payonus API.",
    href: "/payment-api",
    linkLabel: "Explore the Payment API",
  },
  {
    title: "Settlement",
    desc: "How settlement schedules, reconciliation, and multi-currency payouts work.",
    href: "/settlements",
    linkLabel: "Explore Settlements",
  },
  {
    title: "Fraud Prevention",
    desc: "Risk signals, chargeback handling, and how merchants can reduce fraud exposure.",
    href: "/analytics",
    linkLabel: "See fraud & risk signals",
  },
  {
    title: "Gaming Payments",
    desc: "Payment infrastructure for in-game purchases, creator payouts, and tournament prizes.",
    href: "/industries/gaming",
    linkLabel: "Explore Gaming",
  },
  {
    title: "Forex Payments",
    desc: "CBN-compliant payment rails for FX brokers and trading platforms.",
    href: "/industries/forex",
    linkLabel: "Explore Forex",
  },
  {
    title: "Enterprise Payment Operations",
    desc: "Running payment operations at scale — reconciliation, reporting, and multi-team access.",
  },
];

export default function ResourcesPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <Navbar scrolled={scrolled} />

      <section style={{ position: "relative", width: "100%", background: T.bg, overflow: "hidden", padding: isMobile ? "64px 0 56px" : "88px 0 72px" }}>
        <HeroBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <span className="fade-up" style={{ display: "block", marginBottom: isMobile ? 20 : 28, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.orange }}>
            • Resources
          </span>
          <h1 className="fade-up d1" style={{
            margin: `0 0 ${isMobile ? 20 : 28}px`,
            fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500,
            fontSize: isMobile ? 40 : isTablet ? 52 : 60,
            lineHeight: 1.05, letterSpacing: "-0.02em", color: T.headingBlack, maxWidth: 760,
          }}>
            Everything you need to understand payments in Africa.
          </h1>
          <p className="fade-up d2" style={{
            margin: 0,
            fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 400,
            fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: T.muted, maxWidth: 560,
          }}>
            Guides on payment infrastructure, compliance, and building for African markets — with more added as our library grows.
          </p>
        </div>
      </section>

      <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 24 : 40}px 0 ${isMobile ? 64 : 96}px` }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "1fr 1fr 1fr",
          gap: 24,
        }}>
          {CATEGORIES.map(cat => (
            <div key={cat.title} className="fade-up" style={{
              background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: 16,
              padding: 28, display: "flex", flexDirection: "column", gap: 12,
            }}>
              <span style={{
                alignSelf: "flex-start",
                fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase",
                color: cat.href ? T.primary : T.muted,
                background: cat.href ? "#EDE9FF" : "#F0EEEC",
                borderRadius: 6, padding: "4px 10px",
              }}>
                {cat.href ? "Available" : "Coming soon"}
              </span>
              <h2 style={{ margin: 0, fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: T.headingBlack }}>
                {cat.title}
              </h2>
              <p style={{ margin: 0, flex: 1, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.65, color: T.muted }}>
                {cat.desc}
              </p>
              {cat.href && (
                <a href={cat.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14, color: T.primary, textDecoration: "none" }}>
                  {cat.linkLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
