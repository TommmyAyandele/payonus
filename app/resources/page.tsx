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

interface Entry {
  category: string;
  headline: string;
  desc: string;
  href?: string;
  cta?: string;
  icon: React.ReactNode;
}

const iconProps = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" as const };

const ENTRIES: Entry[] = [
  {
    category: "Compliance",
    headline: "What it takes to move money legally across Africa.",
    desc: "Licensing, data protection, and the regulatory standards that govern payment processing in Africa.",
    href: "/security",
    cta: "See our security & compliance standards",
    icon: <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Payment APIs",
    headline: "One API, every African payment method.",
    desc: "Integration guides and best practices for building on the Payonus API.",
    href: "/payment-api",
    cta: "Explore the Payment API",
    icon: <svg {...iconProps}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Settlement",
    headline: "How settlement actually works across 8 markets.",
    desc: "How settlement schedules, reconciliation, and multi-currency payouts work.",
    href: "/settlements",
    cta: "Explore Settlements",
    icon: <svg {...iconProps}><circle cx="12" cy="12" r="9" stroke={T.primary} strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Fraud Prevention",
    headline: "Spotting risk before it becomes a chargeback.",
    desc: "Risk signals, chargeback handling, and how merchants can reduce fraud exposure.",
    href: "/analytics",
    cta: "See fraud & risk signals",
    icon: <svg {...iconProps}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Gaming Payments",
    headline: "Payment rails built for the speed of play.",
    desc: "Payment infrastructure for in-game purchases, creator payouts, and tournament prizes.",
    href: "/industries/gaming",
    cta: "Explore Gaming",
    icon: <svg {...iconProps}><rect x="2" y="8" width="20" height="9" rx="4" stroke={T.primary} strokeWidth="1.6"/><path d="M7 10.5v3M5.5 12h3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/><circle cx="15.5" cy="11" r="0.9" fill={T.primary}/><circle cx="17.5" cy="13" r="0.9" fill={T.primary}/></svg>,
  },
  {
    category: "Forex Payments",
    headline: "CBN-compliant rails for FX brokers and trading platforms.",
    desc: "CBN-compliant payment rails for FX brokers and trading platforms.",
    href: "/industries/forex",
    cta: "Explore Forex",
    icon: <svg {...iconProps}><path d="M4 8h13M13 5l4 3-4 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16H7M11 13l-4 3 4 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Fintech",
    headline: "Rails for lenders, PSSPs, and remittance platforms.",
    desc: "Instant disbursement, repayment collections, and cross-border payout infrastructure for non-bank fintechs.",
    href: "/industries/fintech",
    cta: "Explore Fintech",
    icon: <svg {...iconProps}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    category: "Ride-hailing & Logistics",
    headline: "Driver payouts that move as fast as your fleet.",
    desc: "Instant driver and rider payouts, split payments, and fare collection for ride-hailing and delivery platforms.",
    href: "/industries/logistics",
    cta: "Explore Ride-hailing & Logistics",
    icon: <svg {...iconProps}><path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="11" width="18" height="6" rx="2" stroke={T.primary} strokeWidth="1.6"/><circle cx="7.5" cy="17.5" r="1.4" stroke={T.primary} strokeWidth="1.6"/><circle cx="16.5" cy="17.5" r="1.4" stroke={T.primary} strokeWidth="1.6"/></svg>,
  },
  {
    category: "Payment Infrastructure",
    headline: "How payment rails, settlement cycles, and cross-border processing actually work.",
    desc: "How payment rails, settlement cycles, and cross-border processing work across African markets.",
    icon: <svg {...iconProps}><circle cx="6" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.6"/><circle cx="18" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.6"/><circle cx="12" cy="18" r="2.5" stroke={T.primary} strokeWidth="1.6"/><path d="M8.5 6h7M13.5 16.5l4-9M10.5 16.5l-4-9" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
  {
    category: "Enterprise Operations",
    headline: "Running payment operations at scale.",
    desc: "Reconciliation, reporting, and multi-team access for enterprise payment operations.",
    icon: <svg {...iconProps}><path d="M3 21V10l5 3V10l5 3V8l6 4v9H3z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 21v-4M12 21v-4M17 21v-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
];

const TABS = ["All", ...ENTRIES.map(e => e.category)];

export default function ResourcesPage() {
  useScrollReveal();
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("All");
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = activeTab === "All" ? ENTRIES : ENTRIES.filter(e => e.category === activeTab);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <Navbar scrolled={scrolled} />

      <section style={{ position: "relative", width: "100%", background: T.bg, overflow: "hidden", padding: isMobile ? "64px 0 40px" : "88px 0 48px" }}>
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

      {/* Category tabs */}
      <div style={{ width: "100%", background: T.bg, borderBottom: `1px solid ${T.borderLight}`, position: "sticky", top: 0, zIndex: 5 }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px`,
          display: "flex", gap: isMobile ? 20 : 32, overflowX: "auto",
        }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "16px 0", whiteSpace: "nowrap",
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase",
                color: activeTab === tab ? T.primary : T.muted,
                borderBottom: `2px solid ${activeTab === tab ? T.primary : "transparent"}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Entries */}
      <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 40 : 56}px 0 ${isMobile ? 64 : 96}px` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: `0 ${hPad}px`, display: "flex", flexDirection: "column", gap: isMobile ? 40 : 56 }}>
          {visible.map(entry => (
            <div key={entry.headline} className="fade-up" style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 280px",
              gap: isMobile ? 24 : 40,
              alignItems: "center",
              paddingBottom: isMobile ? 32 : 48,
              borderBottom: `1px solid ${T.borderLight}`,
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>
                    {entry.category}
                  </span>
                  {!entry.href && (
                    <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 11, color: T.muted, background: "#F0EEEC", borderRadius: 6, padding: "2px 8px" }}>
                      Coming soon
                    </span>
                  )}
                </div>
                <h2 style={{ margin: "0 0 12px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 24 : 28, lineHeight: 1.25, color: T.headingBlack, maxWidth: 560 }}>
                  {entry.headline}
                </h2>
                <p style={{ margin: entry.href ? "0 0 16px" : 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: T.muted, maxWidth: 520 }}>
                  {entry.desc}
                </p>
                {entry.href && (
                  <a href={entry.href} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14, color: T.primary, textDecoration: "none" }}>
                    {entry.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
              <div style={{
                width: "100%", height: isMobile ? 140 : 170, borderRadius: 14,
                background: "linear-gradient(135deg, #F5EFFE 0%, #EDE9FF 100%)",
                border: `1px solid ${T.borderLight}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {entry.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
