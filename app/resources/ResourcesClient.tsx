"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";
import HeroBg from "../HeroBg";
import type { PostMeta } from "../lib/blog";

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

const iconProps = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" as const };

function categoryIcon(category: string) {
  switch (category) {
    case "Compliance":
      return <svg {...iconProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Payment APIs":
      return <svg {...iconProps}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Settlement":
      return <svg {...iconProps}><circle cx="12" cy="12" r="9" stroke={T.primary} strokeWidth="1.6"/><path d="M12 7v5l3 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Fraud Prevention":
      return <svg {...iconProps}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Gaming Payments":
      return <svg {...iconProps}><rect x="2" y="8" width="20" height="9" rx="4" stroke={T.primary} strokeWidth="1.6"/><path d="M7 10.5v3M5.5 12h3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/><circle cx="15.5" cy="11" r="0.9" fill={T.primary}/><circle cx="17.5" cy="13" r="0.9" fill={T.primary}/></svg>;
    case "Forex Payments":
      return <svg {...iconProps}><path d="M4 8h13M13 5l4 3-4 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 16H7M11 13l-4 3 4 3" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Fintech":
      return <svg {...iconProps}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "Ride-hailing & Logistics":
      return <svg {...iconProps}><path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="11" width="18" height="6" rx="2" stroke={T.primary} strokeWidth="1.6"/><circle cx="7.5" cy="17.5" r="1.4" stroke={T.primary} strokeWidth="1.6"/><circle cx="16.5" cy="17.5" r="1.4" stroke={T.primary} strokeWidth="1.6"/></svg>;
    case "Payment Infrastructure":
      return <svg {...iconProps}><circle cx="6" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.6"/><circle cx="18" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.6"/><circle cx="12" cy="18" r="2.5" stroke={T.primary} strokeWidth="1.6"/><path d="M8.5 6h7M13.5 16.5l4-9M10.5 16.5l-4-9" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/></svg>;
    case "Enterprise Operations":
      return <svg {...iconProps}><path d="M3 21V10l5 3V10l5 3V8l6 4v9H3z" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 21v-4M12 21v-4M17 21v-4" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round"/></svg>;
    default:
      return <svg {...iconProps}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke={T.primary} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
}

export default function ResourcesClient({ posts }: { posts: PostMeta[] }) {
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

  const tabs = ["All", ...Array.from(new Set(posts.map(p => p.category)))];
  const visible = activeTab === "All" ? posts : posts.filter(p => p.category === activeTab);

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
          display: "flex", gap: isMobile ? 12 : 18, overflowX: "auto",
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 0", whiteSpace: "nowrap",
                fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 10.5, letterSpacing: "0.03em", textTransform: "uppercase",
                color: activeTab === tab ? T.primary : T.muted,
                borderBottom: `2px solid ${activeTab === tab ? T.primary : "transparent"}`,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <section style={{ width: "100%", background: T.bg, padding: `${isMobile ? 40 : 56}px 0 ${isMobile ? 64 : 96}px` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: `0 ${hPad}px`, display: "flex", flexDirection: "column", gap: isMobile ? 40 : 56 }}>
          {visible.length === 0 && (
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: T.muted }}>No posts in this category yet.</p>
          )}
          {visible.map(post => (
            <a key={post.slug} href={`/resources/${post.slug}`} className="fade-up" style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 280px",
              gap: isMobile ? 24 : 40,
              alignItems: "center",
              paddingBottom: isMobile ? 32 : 48,
              borderBottom: `1px solid ${T.borderLight}`,
              textDecoration: "none",
            }}>
              <div>
                <span style={{ display: "block", marginBottom: 12, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>
                  {post.category}
                </span>
                <h2 style={{ margin: "0 0 12px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 24 : 28, lineHeight: 1.25, color: T.headingBlack, maxWidth: 560 }}>
                  {post.title}
                </h2>
                <p style={{ margin: "0 0 16px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.65, color: T.muted, maxWidth: 520 }}>
                  {post.excerpt}
                </p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 14, color: T.primary }}>
                  Read the guide
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div style={{
                width: "100%", height: isMobile ? 140 : 170, borderRadius: 14,
                background: "linear-gradient(135deg, #F5EFFE 0%, #EDE9FF 100%)",
                border: `1px solid ${T.borderLight}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {categoryIcon(post.category)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
