"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";

/* ─── SIDEBAR DATA ─── */
const SIDEBAR = [
  {
    label: "Get Started",
    links: [
      { id: "introduction",   label: "Introduction"   },
      { id: "quick-start",    label: "Quick Start"    },
      { id: "authentication", label: "Authentication" },
      { id: "error-handling", label: "Error handling" },
      { id: "idempotency",    label: "Idempotency"    },
    ],
  },
  {
    label: "Core APIs",
    links: [
      { id: "payouts",          label: "Payouts"          },
      { id: "collections",      label: "Collections"      },
      { id: "payment-links",    label: "Payment Links"    },
      { id: "virtual-accounts", label: "Virtual Accounts" },
      { id: "fx-rates",         label: "FX & Rates"       },
    ],
  },
  {
    label: "Webhooks",
    links: [
      { id: "webhooks-overview",  label: "Overview"          },
      { id: "event-types",        label: "Event Types"       },
      { id: "verify-signatures",  label: "Verify Signatures" },
    ],
  },
  {
    label: "SDKs",
    links: [
      { id: "sdk-node",   label: "Node.js"    },
      { id: "sdk-python", label: "Python"     },
      { id: "sdk-other",  label: "PHP · GO"   },
    ],
  },
];

const SECTION_IDS = ["introduction", "quick-start", "authentication", "error-handling", "webhooks-overview", "verify-signatures"];

/* ─── INTRO CARDS ─── */
const INTRO_CARDS = [
  { title: "Quick Start",    desc: "Your first API call in under 5 minutes"     },
  { title: "API Refrence",   desc: "Full endpoint documentation"                },
  { title: "Quick Start",    desc: "Your first API call in under 5 minutes"     },
];

/* ─── WEBHOOK EVENTS ─── */
const WEBHOOK_EVENTS = [
  { cat: "Payout",     catColor: "#16A34A", catBg: "#DCFCE7", event: "payout.settled",      desc: "Payout confirmed by bank"       },
  { cat: "Payout",     catColor: "#16A34A", catBg: "#DCFCE7", event: "payout.failed",       desc: "Payout failed with reason code" },
  { cat: "Collection", catColor: "#2563EB", catBg: "#DBEAFE", event: "collection.received", desc: "Inbound payment confirmed"      },
  { cat: "Refund",     catColor: "#D97706", catBg: "#FEF3C7", event: "refund.processed",    desc: "Refund issued to customer"      },
];

/* ─── CODE BLOCK ─── */
function CodeBlock({ children, lang = "" }: { children: React.ReactNode; lang?: string }) {
  return (
    <div style={{
      background: "#1E1E2E",
      borderRadius: 8,
      padding: "18px 22px",
      overflowX: "auto",
      fontFamily: "'Fira Code','Cascadia Code','Courier New',monospace",
      fontSize: 13,
      lineHeight: 1.7,
      color: "#D4D4D4",
      margin: "16px 0",
    }}>
      {children}
    </div>
  );
}

function Kw({ c, children }: { c: string; children: React.ReactNode }) {
  return <span style={{ color: c }}>{children}</span>;
}

/* ─── MAIN PAGE ─── */
export default function DocsPage() {
  const { isMobile, isTablet } = useBreakpoint();

  const [scrolled,   setScrolled]   = React.useState(false);
  const [activeId,   setActiveId]   = React.useState("introduction");
  const [activeTab,  setActiveTab]  = React.useState<"node"|"python"|"php"|"go">("node");
  const [sidebarOpen,setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scrollspy */
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  const hPad = isMobile ? 20 : isTablet ? 40 : 80;
  const SIDEBAR_W = 210;

  const SDK_COMMANDS: Record<string, React.ReactNode> = {
    node:   <><Kw c="#C792EA">npm</Kw> install @payonus/node</>,
    python: <><Kw c="#C792EA">pip</Kw> install payonus</>,
    php:    <><Kw c="#C792EA">composer</Kw> require payonus/payonus-php</>,
    go:     <><Kw c="#C792EA">go</Kw> get github.com/payonus/payonus-go</>,
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", background:T.bg }}>
      <style>{`
        .doc-sidebar-link { display:flex; align-items:center; gap:7px; font-family:"DM Sans",sans-serif; font-size:13px; font-weight:400; color:#49454F; text-decoration:none; padding:5px 0 5px 4px; border-radius:5px; cursor:pointer; transition:color 0.15s; border:none; background:none; text-align:left; width:100%; }
        .doc-sidebar-link:hover { color:#6009FF; }
        .doc-sidebar-link.active { color:#6009FF; font-weight:500; }
        .doc-sidebar-link.active::before { background:#6009FF !important; }
        .doc-sdk-tab { font-family:"DM Sans",sans-serif; font-size:14px; font-weight:500; color:#49454F; padding:10px 16px; cursor:pointer; border:none; background:transparent; border-bottom:2px solid transparent; transition:color 0.15s,border-color 0.15s; }
        .doc-sdk-tab.active { color:#6009FF; border-bottom-color:#6009FF; }
        .doc-sdk-tab:hover:not(.active) { color:#1C1B1F; }
        .doc-intro-card { border:1px solid #E7E0EC; border-radius:10px; padding:20px 22px; background:#FFFFFF; transition:border-color 0.2s,box-shadow 0.2s; cursor:pointer; text-decoration:none; display:block; }
        .doc-intro-card:hover { border-color:#C4B5FD; box-shadow:0 8px 24px rgba(96,9,255,0.09); }
        .doc-divider { border:none; border-top:1px solid #E7E0EC; margin:40px 0; }
      `}</style>

      <Navbar scrolled={scrolled} />

      {/* Mobile sidebar toggle */}
      {isMobile && (
        <div style={{ background:T.bg, borderBottom:"1px solid #E7E0EC", padding:"12px 20px" }}>
          <button
            onClick={() => setSidebarOpen(o => !o)}
            style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:13, color:T.primary, background:"#EDE9FF", border:"1px solid #DDD0FF", borderRadius:6, padding:"6px 14px", cursor:"pointer" }}
          >
            {sidebarOpen ? "✕ Close menu" : "☰ Contents"}
          </button>
          {sidebarOpen && (
            <div style={{ marginTop:16, display:"flex", flexDirection:"column", gap:4 }}>
              {SIDEBAR.map(group => (
                <div key={group.label}>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:10, color:T.muted, textTransform:"uppercase", letterSpacing:"0.09em", padding:"10px 0 4px" }}>{group.label}</div>
                  {group.links.map(link => (
                    <button key={link.id} className={`doc-sidebar-link${activeId===link.id?" active":""}`} onClick={() => scrollTo(link.id)}>
                      <span style={{ width:5,height:5,borderRadius:"50%",flexShrink:0,background:activeId===link.id?"#6009FF":"#C4B5FD",display:"inline-block" }}/>
                      {link.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div style={{ flex:1, maxWidth:1440, margin:"0 auto", padding:`0 ${hPad}px`, width:"100%", boxSizing:"border-box", display:"flex", gap:isMobile?0:48, alignItems:"flex-start" }}>

        {/* ── SIDEBAR ── */}
        {!isMobile && (
          <aside style={{
            width: SIDEBAR_W, flexShrink:0,
            position:"sticky", top:90,
            alignSelf:"flex-start",
            paddingTop:40, paddingBottom:40,
            overflowY:"auto",
            maxHeight:"calc(100vh - 90px)",
          }}>
            {SIDEBAR.map(group => (
              <div key={group.label} style={{ marginBottom:8 }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:10, color:T.muted, textTransform:"uppercase", letterSpacing:"0.09em", padding:"14px 0 6px 4px" }}>
                  {group.label}
                </div>
                {group.links.map(link => (
                  <button
                    key={link.id}
                    className={`doc-sidebar-link${activeId===link.id?" active":""}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    <span style={{ width:5,height:5,borderRadius:"50%",flexShrink:0,background:activeId===link.id?"#6009FF":"#C4B5FD",display:"inline-block" }}/>
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
          </aside>
        )}

        {/* ── MAIN CONTENT ── */}
        <main style={{ flex:1, minWidth:0, paddingTop:40, paddingBottom:80 }}>

          {/* ══ Hero ══ */}
          <div id="introduction" style={{ scrollMarginTop:100, marginBottom:32 }}>
            <h1 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?30:38, color:T.dark, lineHeight:1.2 }}>
              Payonus{" "}
              <span style={{ color:T.primary }}>Developer</span>{" "}
              Docs
            </h1>
            <p style={{ margin:"0 0 24px", fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:560 }}>
              Everything you need to build payment flows across Africa. One REST API, consistent conventions, and SDKs for every major language.
            </p>

            {/* Search */}
            <div style={{ position:"relative", maxWidth:480, marginBottom:32 }}>
              <svg style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#9CA3AF" strokeWidth="1.8"/>
                <path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <input
                placeholder="search documentation..."
                style={{ width:"100%", boxSizing:"border-box", border:"1px solid #E7E0EC", borderRadius:8, padding:"10px 14px 10px 38px", fontFamily:"DM Sans,sans-serif", fontSize:14, color:T.dark, background:T.white, outline:"none" }}
                onFocus={e  => (e.currentTarget.style.borderColor="#6009FF")}
                onBlur={e   => (e.currentTarget.style.borderColor="#E7E0EC")}
              />
            </div>

            {/* Intro cards */}
            <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr 1fr", gap:14, marginBottom:48 }}>
              {INTRO_CARDS.map((c,i) => (
                <a key={i} href="#" className="doc-intro-card">
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:15, color:T.dark, marginBottom:6 }}>{c.title}</div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.5 }}>{c.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* ══ Quick Start ══ */}
          <div id="quick-start" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?22:26, color:T.dark }}>Quick Start</h2>
            <p style={{ margin:"0 0 32px", fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              To start making API calls you'll need a Payonus account and a secret key. All requests must be authenticated — unauthenticated requests return <code style={{ fontFamily:"monospace", fontSize:13, background:"#F3F4F6", padding:"1px 6px", borderRadius:4 }}>401 Unauthorized</code>.
            </p>

            {/* Step 1 */}
            <h3 style={{ margin:"0 0 16px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:16, color:T.dark }}>1. Get your API keys</h3>
            <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr", gap:14, marginBottom:16 }}>
              {/* Sandbox */}
              <div style={{ background:"#F5EEFF", border:"1.5px solid #DDD0FF", borderRadius:10, padding:"18px 20px" }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:14, color:T.primary, marginBottom:12 }}>SandBox</div>
                <div style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:13, color:T.dark, marginBottom:8, letterSpacing:"0.04em" }}>
                  sk_test_<span style={{ opacity:0.5 }}>••••••••••••</span>
                </div>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted }}>No real money. Full API parity.</div>
              </div>
              {/* Production */}
              <div style={{ background:"#FFF5F5", border:"1.5px solid #FFCDD2", borderRadius:10, padding:"18px 20px" }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:14, color:"#DC2626", marginBottom:12 }}>Production</div>
                <div style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:13, color:T.dark, marginBottom:8, letterSpacing:"0.04em" }}>
                  sk_test_<span style={{ opacity:0.5 }}>••••••••••••</span>
                </div>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted }}>Live keys. Keep these secret.</div>
              </div>
            </div>

            {/* Warning */}
            <div style={{ background:"#FFFBEB", border:"1.5px solid #FDE68A", borderRadius:8, padding:"12px 16px", display:"flex", alignItems:"flex-start", gap:10, marginBottom:32 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:1 }}>
                <circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="1.8"/>
                <path d="M12 8v4M12 16h.01" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"#92400E", lineHeight:1.55 }}>
                Never expose your secret key in client-side code or public repos. Use environment variables in all deployments.
              </span>
            </div>

            {/* Step 2 */}
            <h3 style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:16, color:T.dark }}>2. Install the SDK</h3>
            <div style={{ display:"flex", borderBottom:"1px solid #E7E0EC", marginBottom:0 }}>
              {(["node","python","php","go"] as const).map(tab => (
                <button key={tab} className={`doc-sdk-tab${activeTab===tab?" active":""}`} onClick={() => setActiveTab(tab)}>
                  {{ node:"Node.js", python:"Python", php:"PHP", go:"GO" }[tab]}
                </button>
              ))}
            </div>
            <CodeBlock>
              {SDK_COMMANDS[activeTab]}
            </CodeBlock>

            {/* Step 3 */}
            <h3 style={{ margin:"24px 0 0", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:16, color:T.dark }}>3. Make your first payout</h3>
            <CodeBlock>
              <Kw c="#C792EA">import</Kw> PayOnus <Kw c="#C792EA">from</Kw> <Kw c="#C3E88D">'@payonus/node'</Kw>;{"\n\n"}
              <Kw c="#C792EA">const</Kw> client = <Kw c="#C792EA">new</Kw> PayOnus({"{ "}apiKey: process.env.<Kw c="#82AAFF">PAYONUS_SECRET_KEY</Kw>{" }"});{"\n\n"}
              <Kw c="#C792EA">const</Kw> payout = <Kw c="#C792EA">await</Kw> client.payouts.<Kw c="#82AAFF">create</Kw>({"{\n"}
              {"  "}amount: <Kw c="#F78C6C">150000</Kw>, <Kw c="#546E7A">{"// In kobo (₦1,500.00)"}</Kw>{"\n"}
              {"  "}currency: <Kw c="#C3E88D">'NGN'</Kw>,{"\n"}
              {"  "}recipient: {"{\n"}
              {"    "}account_number: <Kw c="#C3E88D">'0123456789'</Kw>,{"\n"}
              {"    "}bank_code: <Kw c="#C3E88D">'058'</Kw>, <Kw c="#546E7A">{"// GTBank"}</Kw>{"\n"}
              {"    "}name: <Kw c="#C3E88D">'Adaeze Okonkwo'</Kw>{"\n"}
              {"  "},{"}\n"}
              {"  "}reference: <Kw c="#C3E88D">'vendor-pay-apr-2026'</Kw>,{"\n"}
              {"}"});{"\n\n"}
              console.<Kw c="#82AAFF">log</Kw>(payout.status); <Kw c="#546E7A">{"// settled"}</Kw>
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Authentication ══ */}
          <div id="authentication" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?22:26, color:T.dark }}>Authentication</h2>
            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              Include your key in the Authorization header of every request using the Bearer scheme.
            </p>
            <CodeBlock>
              <Kw c="#82AAFF">Authorization</Kw>: Bearer sk_live_<Kw c="#546E7A">••••••••••••••••</Kw>
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Error Handling ══ */}
          <div id="error-handling" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?22:26, color:T.dark }}>Error Handling</h2>
            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              All errors return a standard JSON body with code, message, and optional param. HTTP status codes follow REST conventions.
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"error"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"code"</Kw>: <Kw c="#F78C6C">"insufficient_balance"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"message"</Kw>: <Kw c="#F78C6C">"Your Payonus balance is insufficient to complete this payout."</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"param"</Kw>: <Kw c="#F78C6C">"amount"</Kw>{"\n"}
              {"  "}{"}\n"}
              {"}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Webhook ══ */}
          <div id="webhooks-overview" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?22:26, color:T.dark }}>Webhook</h2>
            <p style={{ margin:"0 0 24px", fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              Payonus sends webhook events when things happen — a payout settles, a collection comes in, a transfer fails. Configure endpoints under Settings → Webhooks.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:0, border:"1px solid #E7E0EC", borderRadius:10, overflow:"hidden" }}>
              {WEBHOOK_EVENTS.map((ev, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 20px", borderBottom: i < WEBHOOK_EVENTS.length-1 ? "1px solid #E7E0EC" : "none", flexWrap:isMobile?"wrap":"nowrap" }}>
                  {/* Category badge */}
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:12, color:ev.catColor, background:ev.catBg, padding:"3px 10px", borderRadius:20, flexShrink:0 }}>
                    {ev.cat}
                  </span>
                  {/* Event pill */}
                  <span style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:"#374151", background:"#F3F4F6", padding:"3px 10px", borderRadius:20, flexShrink:0 }}>
                    {ev.event}
                  </span>
                  {/* Description */}
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, marginLeft:isMobile?0:"auto" }}>
                    {ev.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <hr className="doc-divider" />

          {/* ══ Verify Signatures ══ */}
          <div id="verify-signatures" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:isMobile?22:26, color:T.dark }}>Verify signatures</h2>
            <CodeBlock>
              <Kw c="#C792EA">import</Kw> crypto <Kw c="#C792EA">from</Kw> <Kw c="#C3E88D">'crypto'</Kw>;{"\n\n"}
              <Kw c="#C792EA">function</Kw> <Kw c="#82AAFF">verifyWebhook</Kw>(rawBody, signature, secret) {"{\n"}
              {"  "}<Kw c="#C792EA">const</Kw> expected = crypto{"\n"}
              {"    "}.<Kw c="#82AAFF">createHmac</Kw>(<Kw c="#C3E88D">'sha256'</Kw>, secret){"\n"}
              {"    "}.<Kw c="#82AAFF">update</Kw>(rawBody){"\n"}
              {"    "}.<Kw c="#82AAFF">digest</Kw>(<Kw c="#C3E88D">'hex'</Kw>);{"\n\n"}
              {"  "}<Kw c="#C792EA">return</Kw> crypto.<Kw c="#82AAFF">timingSafeEqual</Kw>({"\n"}
              {"    "}Buffer.<Kw c="#82AAFF">from</Kw>(expected),{"\n"}
              {"    "}Buffer.<Kw c="#82AAFF">from</Kw>(signature){"\n"}
              {"  "});{"\n"}
              {"}"}
            </CodeBlock>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
