"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";

export const T = {
  bg:          "#FAFAF8",
  primary:     "#6009FF",
  accent:      "#F4B61E",
  orange:      "#F4B249",
  dark:        "#1C1B1F",
  muted:       "#49454F",
  white:       "#FFFFFF",
  borderLight: "#E7E0EC",
  headingBlack:"#000000",
};

export const PRODUCTS = [
  { title: "Payouts",               desc: "Fast, reliable fund disbursement",  icon: "/icons/icon-payouts.svg",     href: "/payouts"      },
  { title: "Collections",           desc: "Accept payments from anywhere",      icon: "/icons/icon-collections.svg", href: "/collections"  },
  { title: "Instant Settlements",   desc: "Move funds to your bank seamlessly", icon: "/icons/icon-settlements.svg", href: "/settlements"  },
  { title: "Payment API",           desc: "Integrate payments in minutes",      icon: "/icons/icon-payment-api.svg", href: "/payment-api"  },
  { title: "Analytics & Reporting", desc: "Insights that drive decisions",      icon: "/icons/icon-analytics.svg",   href: "/analytics"    },
];

export function Logo({ height = 30 }: { height?: number }) {
  return (
    <a href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
      <img src="/logo-full.svg" alt="payonus" height={height} style={{ display:"block" }} />
    </a>
  );
}

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [productsOpen, setProductsOpen] = React.useState(false);
  const [mobileOpen,   setMobileOpen]   = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open  = () => { if (timer.current) clearTimeout(timer.current); setProductsOpen(true);  };
  const close = () => { timer.current = setTimeout(() => setProductsOpen(false), 130); };

  const hPad = isMobile ? 20 : isTablet ? 32 : 80;

  const navBg: React.CSSProperties = {
    position:             "relative",
    background:           scrolled ? "rgba(250,250,248,0.82)" : T.bg,
    backdropFilter:       scrolled ? "blur(14px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom:         `1px solid ${scrolled ? "rgba(231,224,236,0.55)" : T.borderLight}`,
    transition:           "background 0.35s, border-color 0.35s",
    width:                "100%",
  };

  const nl: React.CSSProperties = {
    display:"flex", alignItems:"center",
    fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:15,
    lineHeight:"24px", color:T.dark, textDecoration:"none",
    padding:"8px 10px", borderRadius:8, whiteSpace:"nowrap",
    transition:"background .15s",
  };

  if (isMobile) {
    return (
      <div style={{ position:"sticky", top:0, zIndex:100 }}>
        <nav style={navBg}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:`14px ${hPad}px` }}>
            <Logo />
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(o => !o)}
              style={{ background:"none", border:"none", padding:8, cursor:"pointer", lineHeight:0 }}
            >
              {mobileOpen
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke={T.dark} strokeWidth="2" strokeLinecap="round"/></svg>
                : <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><rect y="0"  width="22" height="2" rx="1" fill={T.dark}/><rect y="7"  width="22" height="2" rx="1" fill={T.dark}/><rect y="14" width="22" height="2" rx="1" fill={T.dark}/></svg>
              }
            </button>
          </div>
          <div style={{
            maxHeight: mobileOpen ? 480 : 0,
            overflow: "hidden",
            transition: "max-height 0.38s cubic-bezier(0.16,1,0.3,1)",
            borderTop: mobileOpen ? `1px solid ${T.borderLight}` : "none",
          }}>
            <div style={{ padding:`12px ${hPad}px 24px`, display:"flex", flexDirection:"column", gap:2 }}>
              {["Products","Company","Developers","Support","Pricing"].map(l => (
                <a key={l} href="#" style={{ ...nl, fontSize:16, padding:"12px 8px" }}
                  onClick={() => setMobileOpen(false)}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >{l}</a>
              ))}
              <div style={{ display:"flex", gap:12, marginTop:16 }}>
                <button style={{ flex:1, fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"11px 16px", cursor:"pointer" }}>Demo Checkout</button>
                <button style={{ flex:1, fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"11px 16px", cursor:"pointer" }}>Get Started</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div style={{ position:"sticky", top:0, zIndex:100 }}>
      <nav style={navBg}>
        <div style={{ maxWidth:1440, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", padding:`20px ${hPad}px` }}>
          <Logo />
          <div style={{ display:"flex", alignItems:"center", gap: isTablet ? 24 : 40 }}>
            <div style={{ display:"flex", alignItems:"center", gap: isTablet ? 4 : 16 }}>
              <div onMouseEnter={open} onMouseLeave={close} style={{ position:"relative" }}>
                <a href="#" style={{ ...nl, gap:6, color:productsOpen?T.primary:T.dark, background:productsOpen?"#F5EFF7":"transparent" }}>
                  Products
                  <img src="/icons/icon-chevron.svg" alt="" width={14} height={14} style={{ transform: productsOpen ? "rotate(0deg)" : "rotate(180deg)", transition:"transform .2s" }} />
                </a>
              </div>
              {["Company","Developers","Support","Pricing"].map(label => (
                <a key={label} href="#" style={nl}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >{label}</a>
              ))}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              {!isTablet && (
                <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:14, color:T.muted, background:"transparent", border:`1px solid ${T.muted}`, borderRadius:4, padding:"9px 14px", cursor:"pointer", transition:"background .15s", whiteSpace:"nowrap" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E9DDFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >Demo Checkout</button>
              )}
              <button style={{ fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, border:"none", borderRadius:4, padding:"9px 14px", cursor:"pointer", transition:"opacity .15s", whiteSpace:"nowrap" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >Get Started</button>
            </div>
          </div>
        </div>

        {productsOpen && (
          <div onMouseEnter={open} onMouseLeave={close} style={{ position:"absolute", top:"100%", left:0, width:"100%", background:T.white, boxShadow:"0 8px 32px rgba(0,0,0,0.09)", borderTop:`1px solid ${T.borderLight}`, zIndex:10 }}>
            <div style={{ maxWidth:1440, margin:"0 auto", padding:`18px ${hPad + 28}px 32px`, display:"flex", flexWrap:"wrap", gap:"8px 40px" }}>
              {PRODUCTS.map(p => (
                <a key={p.title} href={p.href} style={{ display:"flex", alignItems:"flex-start", gap:16, width: isTablet ? "calc(50% - 20px)" : 300, padding:"14px", textDecoration:"none", borderRadius:8, transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <img src={p.icon} alt={p.title} width={45} height={45} style={{ flexShrink:0 }} />
                  <div>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:16, color:T.dark, marginBottom:2 }}>{p.title}</div>
                    <div style={{ fontFamily:"Inter, DM Sans, sans-serif", fontWeight:400, fontSize:13.5, color:T.muted }}>{p.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
