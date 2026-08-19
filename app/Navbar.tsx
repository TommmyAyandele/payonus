"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { usePathname } from "next/navigation";

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

const industryIconProps = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };
/* Matches the baked-in circle-badge look of the Products dropdown's icon assets
   (lavender #E9DDFF fill, dark purple #1D0057 glyph) exactly, since these icons
   are drawn inline rather than shipped as pre-composed SVG files. */
const industryIconColor = "#1D0057";

export const INDUSTRIES = [
  {
    title: "Gaming", desc: "Payments built for players", href: "/industries/gaming",
    icon: (
      <svg {...industryIconProps}>
        <rect x="2" y="8" width="20" height="9" rx="4" stroke={industryIconColor} strokeWidth="1.6"/>
        <path d="M7 10.5v3M5.5 12h3" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="15.5" cy="11" r="0.9" fill={industryIconColor}/>
        <circle cx="17.5" cy="13" r="0.9" fill={industryIconColor}/>
      </svg>
    ),
  },
  {
    title: "Forex", desc: "FX rails traders trust", href: "/industries/forex",
    icon: (
      <svg {...industryIconProps}>
        <path d="M4 8h13M13 5l4 3-4 3" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 16H7M11 13l-4 3 4 3" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Fintech", desc: "Rails for lenders, PSSPs & remittance", href: "/industries/fintech",
    icon: (
      <svg {...industryIconProps}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "E-commerce", desc: "Every checkout, every method", href: "/industries/ecommerce",
    icon: (
      <svg {...industryIconProps}>
        <path d="M6 8h12l-1.2 11.2a2 2 0 01-2 1.8H9.2a2 2 0 01-2-1.8L6 8z" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 8V6a3 3 0 016 0v2" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Ride-hailing & Logistics", desc: "Driver payouts, on the move", href: "/industries/logistics",
    icon: (
      <svg {...industryIconProps}>
        <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="11" width="18" height="6" rx="2" stroke={industryIconColor} strokeWidth="1.6"/>
        <circle cx="7.5" cy="17.5" r="1.4" stroke={industryIconColor} strokeWidth="1.6"/>
        <circle cx="16.5" cy="17.5" r="1.4" stroke={industryIconColor} strokeWidth="1.6"/>
      </svg>
    ),
  },
  {
    title: "Aviation", desc: "High-value payments, zero friction", href: "/industries/aviation",
    icon: (
      <svg {...industryIconProps}>
        <path d="M22 12l-8-3V4.5a1.5 1.5 0 00-3 0V9l-8 3v2l8-2.5V17l-2.5 1.8V20l4-1 4 1v-1.2L14 17v-5.5l8 2.5v-2z" stroke={industryIconColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Manufacturing", desc: "B2B payments for supply chains", href: "/industries/manufacturing",
    icon: (
      <svg {...industryIconProps}>
        <path d="M3 21V10l5 3V10l5 3V8l6 4v9H3z" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21v-4M12 21v-4M17 21v-4" stroke={industryIconColor} strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
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
  const pathname = usePathname();
  const [productsOpen,     setProductsOpen]     = React.useState(false);
  const [industriesOpen,   setIndustriesOpen]   = React.useState(false);
  const [mobileOpen,       setMobileOpen]       = React.useState(false);
  const [productsExpanded, setProductsExpanded] = React.useState(false);
  const [industriesExpanded, setIndustriesExpanded] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isProductActive  = PRODUCTS.some(p => pathname === p.href || pathname.startsWith(p.href + "/"));
  const isIndustryActive = INDUSTRIES.some(i => pathname === i.href || pathname.startsWith(i.href + "/"));

  const open  = () => { if (timer.current) clearTimeout(timer.current); setProductsOpen(true); setIndustriesOpen(false); };
  const close = () => { timer.current = setTimeout(() => setProductsOpen(false), 130); };
  const openI  = () => { if (timer.current) clearTimeout(timer.current); setIndustriesOpen(true); setProductsOpen(false); };
  const closeI = () => { timer.current = setTimeout(() => setIndustriesOpen(false), 130); };

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
              style={{
                background: mobileOpen ? "#EDE9FF" : "none",
                border: mobileOpen ? "1px solid #D4C8F5" : "1px solid transparent",
                borderRadius:8, padding:8, cursor:"pointer", lineHeight:0,
                transition:"background .2s, border-color .2s",
              }}
            >
              {mobileOpen
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke={T.primary} strokeWidth="2" strokeLinecap="round"/></svg>
                : <svg width="22" height="16" viewBox="0 0 22 16" fill="none"><rect y="0" width="22" height="2" rx="1" fill={T.dark}/><rect y="7" width="22" height="2" rx="1" fill={T.dark}/><rect y="14" width="22" height="2" rx="1" fill={T.dark}/></svg>
              }
            </button>
          </div>
        </nav>

        {/* Full-screen overlay */}
        {mobileOpen && (
          <div style={{
            position:"fixed", top:0, left:0, right:0, bottom:0,
            background:T.bg, zIndex:200,
            display:"flex", flexDirection:"column",
            overflowY:"auto",
            animation:"menuSlideIn .22s cubic-bezier(.16,1,.3,1)",
          }}>
            {/* Overlay header */}
            <div style={{
              display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:`14px ${hPad}px`,
              borderBottom:`1px solid ${T.borderLight}`,
              flexShrink:0,
            }}>
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                style={{
                  background:"#EDE9FF", border:"1px solid #D4C8F5",
                  borderRadius:8, padding:8, cursor:"pointer", lineHeight:0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke={T.primary} strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Menu links */}
            <div style={{ flex:1, padding:`16px ${hPad}px 24px`, display:"flex", flexDirection:"column", gap:4 }}>

              {/* Products — distinct accordion */}
              <div>
                <button
                  onClick={() => setProductsExpanded(o => !o)}
                  style={{
                    width:"100%", border:"none", cursor:"pointer",
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"14px 16px", borderRadius:12,
                    fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:17,
                    color: productsExpanded ? T.primary : T.dark,
                    background: productsExpanded ? "#EDE9FF" : "transparent",
                    transition:"background .2s, color .2s",
                    textAlign:"left",
                  }}
                  onMouseEnter={e => { if (!productsExpanded) e.currentTarget.style.background = "#F5EFF7"; }}
                  onMouseLeave={e => { if (!productsExpanded) e.currentTarget.style.background = "transparent"; }}
                >
                  Products
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: productsExpanded ? "rotate(180deg)" : "rotate(0deg)", transition:"transform .22s", flexShrink:0 }}>
                    <path d="M6 9l6 6 6-6" stroke={productsExpanded ? T.primary : T.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Products submenu — visually distinct card */}
                {productsExpanded && (
                  <div style={{
                    background:"#F5EEFF",
                    border:"1px solid #DDD0FF",
                    borderRadius:16,
                    padding:"10px",
                    marginTop:6,
                    display:"flex", flexDirection:"column", gap:2,
                  }}>
                    {PRODUCTS.map(p => (
                      <a key={p.title} href={p.href}
                        style={{
                          display:"flex", alignItems:"center", gap:14,
                          padding:"12px 10px", borderRadius:12,
                          textDecoration:"none", background:"transparent",
                          transition:"background .15s",
                        }}
                        onClick={() => { setMobileOpen(false); setProductsExpanded(false); }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#EDE9FF")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{
                          width:44, height:44, flexShrink:0,
                          background:T.white, borderRadius:10,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          boxShadow:"0 2px 8px rgba(96,9,255,0.10)",
                          border:"1px solid #EDE9FF",
                        }}>
                          <img src={p.icon} width={26} height={26} style={{ display:"block" }} />
                        </div>
                        <div>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:2 }}>{p.title}</div>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:12, color:T.muted }}>{p.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries accordion */}
              <div>
                <button
                  onClick={() => setIndustriesExpanded(o => !o)}
                  style={{
                    width:"100%", border:"none", cursor:"pointer",
                    display:"flex", justifyContent:"space-between", alignItems:"center",
                    padding:"14px 16px", borderRadius:12,
                    fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:17,
                    color: industriesExpanded ? T.primary : T.dark,
                    background: industriesExpanded ? "#EDE9FF" : "transparent",
                    transition:"background .2s, color .2s",
                    textAlign:"left",
                  }}
                  onMouseEnter={e => { if (!industriesExpanded) e.currentTarget.style.background = "#F5EFF7"; }}
                  onMouseLeave={e => { if (!industriesExpanded) e.currentTarget.style.background = "transparent"; }}
                >
                  Industries
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: industriesExpanded ? "rotate(180deg)" : "rotate(0deg)", transition:"transform .22s", flexShrink:0 }}>
                    <path d="M6 9l6 6 6-6" stroke={industriesExpanded ? T.primary : T.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {industriesExpanded && (
                  <div style={{
                    background:"#F5EEFF",
                    border:"1px solid #DDD0FF",
                    borderRadius:16,
                    padding:"10px",
                    marginTop:6,
                    display:"flex", flexDirection:"column", gap:2,
                  }}>
                    {INDUSTRIES.map(ind => (
                      <a key={ind.title} href={ind.href}
                        style={{
                          display:"flex", alignItems:"center", gap:14,
                          padding:"12px 10px", borderRadius:12,
                          textDecoration:"none", background:"transparent",
                          transition:"background .15s",
                        }}
                        onClick={() => { setMobileOpen(false); setIndustriesExpanded(false); }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#EDE9FF")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{
                          width:44, height:44, flexShrink:0,
                          background:T.white, borderRadius:10,
                          display:"flex", alignItems:"center", justifyContent:"center",
                          boxShadow:"0 2px 8px rgba(96,9,255,0.10)",
                          border:"1px solid #EDE9FF",
                        }}>
                          <div style={{ width:32, height:32, borderRadius:"50%", background:"#E9DDFF", display:"flex", alignItems:"center", justifyContent:"center" }}>
                            {ind.icon}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:2 }}>{ind.title}</div>
                          <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:12, color:T.muted }}>{ind.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Regular nav links */}
              {[
                { label:"Company",    href:"/company"  },
                { label:"Resources",  href:"/resources"},
                { label:"Developers", href:"/developers"},
                { label:"Support",    href:"/support"  },
                { label:"Pricing",    href:"/pricing"  },
              ].map(({ label, href }) => (
                <a key={label} href={href}
                  style={{
                    display:"block",
                    fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:17, color:T.dark,
                    padding:"14px 16px", borderRadius:12,
                    textDecoration:"none", background:"transparent", transition:"background .15s",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    if (href !== "#") window.location.href = href;
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >{label}</a>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{
              padding:`20px ${hPad}px 40px`,
              borderTop:`1px solid ${T.borderLight}`,
              display:"flex", flexDirection:"column", gap:12,
              flexShrink:0,
            }}>
              <button
                style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15,
                  color:T.white, background:T.primary,
                  border:"none", borderRadius:10,
                  padding:"16px", cursor:"pointer", width:"100%",
                  transition:"opacity .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity="0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity="1")}
                onClick={() => { window.open("https://merchantv2.payonus.com/signup","_blank"); }}
              >Get Started</button>
              <button
                style={{
                  fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:15,
                  color:T.muted, background:"transparent",
                  border:`1px solid ${T.borderLight}`, borderRadius:10,
                  padding:"14px", cursor:"pointer", width:"100%",
                  transition:"background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background="#E9DDFF")}
                onMouseLeave={e => (e.currentTarget.style.background="transparent")}
              >Demo Checkout</button>
            </div>
          </div>
        )}
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
                <a href="#" style={{ ...nl, gap:6, color:(productsOpen||isProductActive)?T.primary:T.dark, background:(productsOpen||isProductActive)?"#F5EFF7":"transparent" }}>
                  Products
                  <img src="/icons/icon-chevron.svg" alt="" width={14} height={14} style={{ transform: productsOpen ? "rotate(0deg)" : "rotate(180deg)", transition:"transform .2s" }} />
                </a>
              </div>
              <div onMouseEnter={openI} onMouseLeave={closeI} style={{ position:"relative" }}>
                <a href="#" style={{ ...nl, gap:6, color:(industriesOpen||isIndustryActive)?T.primary:T.dark, background:(industriesOpen||isIndustryActive)?"#F5EFF7":"transparent" }}>
                  Industries
                  <img src="/icons/icon-chevron.svg" alt="" width={14} height={14} style={{ transform: industriesOpen ? "rotate(0deg)" : "rotate(180deg)", transition:"transform .2s" }} />
                </a>
              </div>
              {[
                { label:"Company",    href:"/company"    },
                { label:"Resources",  href:"/resources"   },
                { label:"Developers", href:"/developers"  },
                { label:"Support",    href:"/support"    },
                { label:"Pricing",    href:"/pricing"    },
              ].map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <a key={label} href={href}
                    style={{ ...nl, color: active ? T.primary : T.dark, background: active ? "#F5EFF7" : "transparent" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                    onMouseLeave={e => (e.currentTarget.style.background = active ? "#F5EFF7" : "transparent")}
                  >{label}</a>
                );
              })}
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
                onClick={() => { window.open("https://merchantv2.payonus.com/signup","_blank"); }}
              >Get Started</button>
            </div>
          </div>
        </div>

        {productsOpen && (
          <div onMouseEnter={open} onMouseLeave={close} className="nav-dropdown" style={{ position:"absolute", top:"100%", left:0, width:"100%", background:"#F8F5FF", boxShadow:"0 12px 40px rgba(96,9,255,0.08)", borderTop:`1px solid #E9DDFF`, zIndex:10 }}>
            <div style={{ maxWidth:1440, margin:"0 auto", padding:`24px ${hPad}px 32px`, display:"grid", gridTemplateColumns: isTablet ? "1fr 1fr" : "1fr 1fr 1fr", gap:4 }}>
              {PRODUCTS.map(p => (
                <a key={p.title} href={p.href} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 16px", textDecoration:"none", borderRadius:10, transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <img src={p.icon} alt={p.title} width={45} height={45} style={{ flexShrink:0 }} />
                  <div>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15, color:T.dark, marginBottom:3 }}>{p.title}</div>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.4 }}>{p.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {industriesOpen && (
          <div onMouseEnter={openI} onMouseLeave={closeI} className="nav-dropdown" style={{ position:"absolute", top:"100%", left:0, width:"100%", background:"#F8F5FF", boxShadow:"0 12px 40px rgba(96,9,255,0.08)", borderTop:`1px solid #E9DDFF`, zIndex:10 }}>
            <div style={{ maxWidth:1440, margin:"0 auto", padding:`24px ${hPad}px 32px`, display:"grid", gridTemplateColumns: isTablet ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr 1fr", gap:4 }}>
              {INDUSTRIES.map(ind => (
                <a key={ind.title} href={ind.href} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 16px", textDecoration:"none", borderRadius:10, transition:"background .15s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#F5EFF7")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{ width:45, height:45, borderRadius:"50%", background:"#E9DDFF", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {ind.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15, color:T.dark, marginBottom:3 }}>{ind.title}</div>
                    <div style={{ fontFamily:"DM Sans, sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.4 }}>{ind.desc}</div>
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
