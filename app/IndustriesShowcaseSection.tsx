"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

const INDUSTRIES = [
  { title: "Gaming", desc: "Payments built for players", href: "/industries/gaming", photo: "dele" },
  { title: "Forex", desc: "FX rails traders trust", href: "/industries/forex", photo: "fatima" },
  { title: "Fintech", desc: "Rails for lenders, PSSPs & remittance", href: "/industries/fintech", photo: "bankApp" },
  { title: "E-commerce", desc: "Every checkout, every method", href: "/industries/ecommerce", photo: "ngozi" },
  { title: "Ride-hailing & Logistics", desc: "Driver payouts, on the move", href: "/industries/logistics", photo: "halima" },
  { title: "Aviation", desc: "High-value payments, zero friction", href: "/industries/aviation", photo: "chidi" },
  { title: "Manufacturing", desc: "B2B payments for supply chains", href: "/industries/manufacturing", photo: "tunde" },
];

export default function IndustriesShowcaseSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;
  const cardW = isMobile ? 240 : 300;
  const loop = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  const duration = Math.max(24, INDUSTRIES.length * 6);

  return (
    <section style={{ width: "100%", background: "#FAFAF8", padding: `${isMobile ? 56 : 88}px 0` }}>
      <style>{`
        @keyframes homeIndustriesMarquee{from{transform:translateX(0);}to{transform:translateX(-33.333%);}}
        .home-industries-track{animation:homeIndustriesMarquee ${duration}s linear infinite;}
        @media (hover: hover) { .home-industries-track:hover{animation-play-state:paused;} }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: `0 ${hPad}px` }}>
        <h2 style={{
          margin: "0 0 12px",
          fontFamily: "Rubik, sans-serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: isMobile ? 28 : isTablet ? 36 : 44,
          lineHeight: 1.12,
          color: "#0F0C36",
        }}>
          Built for every industry we serve
        </h2>
        <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: isMobile ? 14 : 16, lineHeight: 1.6, color: "#6B6877", maxWidth: 620 }}>
          From gaming to logistics, Payonus adapts to how each industry actually moves money.
        </p>
      </div>
      <div style={{ width: "100%", overflow: "hidden", marginTop: 32 }}>
        <div className="home-industries-track" style={{ display: "flex", gap: 16, width: "max-content", padding: `0 ${hPad}px 12px` }}>
          {loop.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                position: "relative", flex: `0 0 ${cardW}px`, height: isMobile ? 320 : 380, borderRadius: 20, overflow: "hidden",
                background: "#EDE9FF", textDecoration: "none", display: "block",
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <img src={`/industry-people/${item.photo}.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,12,20,0.82) 0%, rgba(15,12,20,0.35) 42%, rgba(15,12,20,0) 68%)" }} />
              <div style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
                <p style={{ margin: "0 0 6px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "#FFFFFF" }}>{item.title}</p>
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.82)" }}>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
