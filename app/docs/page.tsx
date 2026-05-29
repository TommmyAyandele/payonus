"use client";

import React from "react";
import { useBreakpoint } from "../use-breakpoint";
import Navbar, { T } from "../Navbar";
import Footer from "../Footer";

/* ─── SIDEBAR DATA ─── */
const SIDEBAR = [
  {
    label: "Getting Started",
    links: [
      { id: "introduction",    label: "Introduction"    },
      { id: "api-integration", label: "API Integration" },
      { id: "authentication",  label: "Authentication"  },
      { id: "error-handling",  label: "Error Handling"  },
    ],
  },
  {
    label: "Payins",
    links: [
      { id: "payins-overview",  label: "Overview"         },
      { id: "fixed-accounts",   label: "Fixed Accounts"   },
      { id: "dynamic-accounts", label: "Dynamic Accounts" },
    ],
  },
  {
    label: "Payouts",
    links: [
      { id: "payouts-overview", label: "Overview"       },
      { id: "bank-transfers",   label: "Bank Transfers" },
      { id: "wallets",          label: "Wallets"        },
    ],
  },
  {
    label: "Webhooks",
    links: [
      { id: "webhooks-overview", label: "Overview"          },
      { id: "verify-signatures", label: "Verify Signatures" },
    ],
  },
  {
    label: "Testing",
    links: [
      { id: "testing", label: "Testing Integration" },
    ],
  },
];

const SECTION_IDS = [
  "introduction", "api-integration", "authentication", "error-handling",
  "payins-overview", "fixed-accounts", "dynamic-accounts",
  "payouts-overview", "bank-transfers", "wallets",
  "webhooks-overview", "verify-signatures",
  "testing",
];

/* ─── INTRO CARDS ─── */
const INTRO_CARDS = [
  { title: "API Integration", desc: "Get your credentials and make your first API call"         },
  { title: "Payins",          desc: "Accept payments via virtual accounts & mobile money"        },
  { title: "Payouts",         desc: "Transfer funds from your PayOnUs wallet to bank accounts"  },
];

/* ─── WEBHOOK EVENTS ─── */
const WEBHOOK_EVENTS = [
  { cat: "Collection", catColor: "#2563EB", catBg: "#DBEAFE", event: "COLLECTION", desc: "Inbound payment confirmed — bank transfer, card, or mobile money" },
  { cat: "Payout",     catColor: "#16A34A", catBg: "#DCFCE7", event: "PAYOUT",     desc: "Outbound transfer settled, failed, or rejected"                  },
];

/* ─── CODE BLOCK ─── */
function CodeBlock({ children }: { children: React.ReactNode }) {
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

  const [scrolled,     setScrolled]     = React.useState(false);
  const [activeId,     setActiveId]     = React.useState("introduction");
  const [activeTab,    setActiveTab]    = React.useState<"curl"|"node"|"python"|"php">("curl");
  const [sidebarOpen,  setSidebarOpen]  = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }); },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  const hPad = isMobile ? 20 : isTablet ? 40 : 80;
  const SIDEBAR_W = 210;

  const TOKEN_COMMANDS: Record<string, React.ReactNode> = {
    curl: <>
      <Kw c="#C792EA">curl</Kw> -X POST https://core.payonus.com/api/v1/access-token {"\\"}{"\n"}
      {"  "}-H <Kw c="#C3E88D">"Content-Type: application/json"</Kw> {"\\"}{"\n"}
      {"  "}-d <Kw c="#C3E88D">'{`{"apiClientId":"your_client_id","apiClientSecret":"your_client_secret"}`}'</Kw>
    </>,
    node: <>
      <Kw c="#C792EA">const</Kw> res = <Kw c="#C792EA">await</Kw> fetch(<Kw c="#C3E88D">'https://core.payonus.com/api/v1/access-token'</Kw>, {"{\n"}
      {"  "}method: <Kw c="#C3E88D">'POST'</Kw>,{"\n"}
      {"  "}headers: {"{ "}<Kw c="#C3E88D">'Content-Type'</Kw>: <Kw c="#C3E88D">'application/json'</Kw>{" },"}{"\n"}
      {"  "}body: JSON.<Kw c="#82AAFF">stringify</Kw>({"{\n"}
      {"    "}apiClientId:     process.env.<Kw c="#82AAFF">PAYONUS_CLIENT_ID</Kw>,{"\n"}
      {"    "}apiClientSecret: process.env.<Kw c="#82AAFF">PAYONUS_CLIENT_SECRET</Kw>,{"\n"}
      {"  "}{"}),"}{"\n"}
      {"}"});{"\n"}
      <Kw c="#C792EA">const</Kw> {"{ access_token }"} = <Kw c="#C792EA">await</Kw> res.<Kw c="#82AAFF">json</Kw>();
    </>,
    python: <>
      <Kw c="#C792EA">import</Kw> requests, os{"\n\n"}
      res = requests.<Kw c="#82AAFF">post</Kw>({"\n"}
      {"  "}<Kw c="#C3E88D">"https://core.payonus.com/api/v1/access-token"</Kw>,{"\n"}
      {"  "}json={"{\n"}
      {"    "}<Kw c="#C3E88D">"apiClientId"</Kw>:     os.environ[<Kw c="#C3E88D">"PAYONUS_CLIENT_ID"</Kw>],{"\n"}
      {"    "}<Kw c="#C3E88D">"apiClientSecret"</Kw>: os.environ[<Kw c="#C3E88D">"PAYONUS_CLIENT_SECRET"</Kw>],{"\n"}
      {"  }"}){"\n"}
      token = res.<Kw c="#82AAFF">json</Kw>()[<Kw c="#C3E88D">"access_token"</Kw>]
    </>,
    php: <>
      <Kw c="#C792EA">$response</Kw> = <Kw c="#82AAFF">Http</Kw>::<Kw c="#82AAFF">post</Kw>(<Kw c="#C3E88D">'https://core.payonus.com/api/v1/access-token'</Kw>, [{"\n"}
      {"  "}<Kw c="#C3E88D">'apiClientId'</Kw>     <Kw c="#C792EA">{" => "}</Kw> env(<Kw c="#C3E88D">'PAYONUS_CLIENT_ID'</Kw>),{"\n"}
      {"  "}<Kw c="#C3E88D">'apiClientSecret'</Kw> <Kw c="#C792EA">{" => "}</Kw> env(<Kw c="#C3E88D">'PAYONUS_CLIENT_SECRET'</Kw>),{"\n"}
      {"]);"}
      {"\n"}<Kw c="#C792EA">$token</Kw> = <Kw c="#C792EA">$response</Kw>[<Kw c="#C3E88D">'access_token'</Kw>];
    </>,
  };

  const inline: React.CSSProperties = { fontFamily:"monospace", fontSize:13, background:"#F3F4F6", padding:"1px 6px", borderRadius:4 };
  const pill:   React.CSSProperties = { fontFamily:"monospace", fontSize:12, background:"#F3F4F6", padding:"1px 4px", borderRadius:3 };

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

      {isMobile && (
        <div style={{ position:"sticky", top:60, zIndex:90, background:T.bg, borderBottom:"1px solid #E7E0EC", padding:"12px 20px" }}>
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

        {!isMobile && (
          <aside style={{ width:SIDEBAR_W, flexShrink:0, position:"sticky", top:60, alignSelf:"flex-start", height:"calc(100vh - 60px)", overflowY:"auto", paddingTop:40, paddingBottom:40, background:T.bg }}>
            {SIDEBAR.map(group => (
              <div key={group.label} style={{ marginBottom:8 }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:10, color:T.muted, textTransform:"uppercase", letterSpacing:"0.09em", padding:"14px 0 6px 4px" }}>
                  {group.label}
                </div>
                {group.links.map(link => (
                  <button key={link.id} className={`doc-sidebar-link${activeId===link.id?" active":""}`} onClick={() => scrollTo(link.id)}>
                    <span style={{ width:5,height:5,borderRadius:"50%",flexShrink:0,background:activeId===link.id?"#6009FF":"#C4B5FD",display:"inline-block" }}/>
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
          </aside>
        )}

        <main style={{ flex:1, minWidth:0, paddingTop:40, paddingBottom:80 }}>

          {/* ══ Introduction ══ */}
          <div id="introduction" style={{ scrollMarginTop:100, marginBottom:32 }}>
            <h1 style={{ margin:"0 0 12px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?34:46, color:T.dark, lineHeight:1.1, letterSpacing:"-0.01em" }}>
              PayOnUs{" "}<span style={{ color:T.primary }}>API</span>{" "}Documentation
            </h1>
            <p style={{ margin:"0 0 24px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:15, lineHeight:1.65, color:T.muted, maxWidth:560 }}>
              Welcome to the PayOnUs API documentation. This guide will help you integrate with our payment processing platform to enable seamless financial transactions for your business.
            </p>

            <div style={{ position:"relative", maxWidth:480, marginBottom:32 }}>
              <svg style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="#9CA3AF" strokeWidth="1.8"/>
                <path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <input
                placeholder="search documentation..."
                style={{ width:"100%", boxSizing:"border-box", border:"1px solid #E7E0EC", borderRadius:8, padding:"10px 14px 10px 38px", fontFamily:"DM Sans,sans-serif", fontSize:14, color:T.dark, background:T.white, outline:"none" }}
                onFocus={e => (e.currentTarget.style.borderColor="#6009FF")}
                onBlur={e  => (e.currentTarget.style.borderColor="#E7E0EC")}
              />
            </div>

            <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr 1fr", gap:14, marginBottom:48 }}>
              {INTRO_CARDS.map((c,i) => (
                <a key={i} href="#" className="doc-intro-card">
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:15, color:T.dark, marginBottom:6 }}>{c.title}</div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:400, fontSize:13, color:T.muted, lineHeight:1.5 }}>{c.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* ══ API Integration ══ */}
          <div id="api-integration" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>API Integration</h2>
            <p style={{ margin:"0 0 24px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              To set up your integration, follow these steps to get your credentials and connect to the PayOnUs API. All requests must be made over HTTPS; responses are in JSON format.
            </p>

            {[
              { n:"1", title:"Create an account",       body:"Sign up on the Merchant Portal. You'll have access to both Sandbox and Production environments immediately after registration." },
              { n:"2", title:"Get your API credentials", body:"Navigate to Settings → API Credentials to generate your Client ID and Client Secret. These are required to obtain an access token." },
              { n:"3", title:"Set up your Webhook",      body:"Configure your Webhook URL and copy your Webhook Verification Key from Settings → API. Both are needed to receive and verify payment notifications." },
              { n:"4", title:"Retrieve your Business ID",body:"Toggle Test Mode to OFF, navigate to the Business section and copy your ID. Required for most API endpoints. You can re-enable Test Mode after." },
            ].map(step => (
              <div key={step.n} style={{ display:"flex", gap:16, marginBottom:20 }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:T.primary, color:"#fff", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:13, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{step.n}</div>
                <div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:14, color:T.dark, marginBottom:4 }}>{step.title}</div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, lineHeight:1.6 }}>{step.body}</div>
                </div>
              </div>
            ))}

            <h3 style={{ margin:"24px 0 8px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Base URLs</h3>
            <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr", gap:14 }}>
              <div style={{ background:"#F5EEFF", border:"1.5px solid #DDD0FF", borderRadius:10, padding:"18px 20px" }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:14, color:T.primary, marginBottom:8 }}>Sandbox</div>
                <div style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:T.dark }}>https://core-sandbox.payonus.com</div>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted, marginTop:6 }}>No real money. Full API parity.</div>
              </div>
              <div style={{ background:"#FFF5F5", border:"1.5px solid #FFCDD2", borderRadius:10, padding:"18px 20px" }}>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:14, color:"#DC2626", marginBottom:8 }}>Production</div>
                <div style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:T.dark }}>https://core.payonus.com</div>
                <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted, marginTop:6 }}>Live keys. Keep credentials secret.</div>
              </div>
            </div>
          </div>

          <hr className="doc-divider" />

          {/* ══ Authentication ══ */}
          <div id="authentication" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Authentication</h2>
            <p style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              PayOnUs uses OAuth 2.0. Exchange your Client ID and Client Secret for an access token, then pass it in the <code style={inline}>Authorization</code> header of every request.
            </p>

            <h3 style={{ margin:"0 0 6px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Generate Access Token</h3>
            <p style={{ margin:"0 0 0", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>/api/v1/access-token</code>
            </p>

            <div style={{ display:"flex", borderBottom:"1px solid #E7E0EC", marginTop:12 }}>
              {(["curl","node","python","php"] as const).map(tab => (
                <button key={tab} className={`doc-sdk-tab${activeTab===tab?" active":""}`} onClick={() => setActiveTab(tab)}>
                  {{ curl:"cURL", node:"Node.js", python:"Python", php:"PHP" }[tab]}
                </button>
              ))}
            </div>
            <CodeBlock>{TOKEN_COMMANDS[activeTab]}</CodeBlock>

            <h3 style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Response</h3>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"access_token"</Kw>: <Kw c="#F78C6C">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"token_type"</Kw>: <Kw c="#F78C6C">"Bearer"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"expires_in"</Kw>: <Kw c="#F78C6C">86399</Kw>{"\n"}
              {"}"}
            </CodeBlock>

            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>Include the token in every subsequent request:</p>
            <CodeBlock>
              <Kw c="#82AAFF">Authorization</Kw>: Bearer {"<access_token>"}
            </CodeBlock>

            <div style={{ background:"#FFFBEB", border:"1.5px solid #FDE68A", borderRadius:8, padding:"12px 16px", display:"flex", alignItems:"flex-start", gap:10 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0, marginTop:1 }}>
                <circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="1.8"/>
                <path d="M12 8v4M12 16h.01" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:"#92400E", lineHeight:1.55 }}>
                You can only have one valid token at a time — generating a new one invalidates the previous. Token generation is rate-limited to 3 requests per minute. Cache the token for slightly less than <code style={{ fontFamily:"monospace", background:"transparent" }}>expires_in</code> seconds.
              </span>
            </div>
          </div>

          <hr className="doc-divider" />

          {/* ══ Error Handling ══ */}
          <div id="error-handling" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Error Handling</h2>
            <p style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              PayOnUs uses conventional HTTP status codes. <code style={inline}>2xx</code> indicates success; <code style={inline}>4xx</code> a client error; <code style={inline}>5xx</code> a server error.
            </p>

            <div style={{ border:"1px solid #E7E0EC", borderRadius:10, overflow:"hidden", marginBottom:16 }}>
              {[
                { code:"400", label:"Bad Request",           desc:"Missing or invalid parameter"                          },
                { code:"401", label:"Unauthorized",          desc:"Missing or expired access token"                       },
                { code:"403", label:"Forbidden",             desc:"Token doesn't have permission for this action"         },
                { code:"404", label:"Not Found",             desc:"The requested resource doesn't exist"                  },
                { code:"409", label:"Conflict",              desc:"Request conflicts with an existing record"             },
                { code:"429", label:"Too Many Requests",     desc:"Rate limit exceeded (e.g. token generation > 3/min)"  },
                { code:"500", label:"Internal Server Error", desc:"Something went wrong on PayOnUs's servers"            },
              ].map((row, i, arr) => (
                <div key={row.code} style={{ display:"flex", alignItems:"center", gap:16, padding:"12px 20px", borderBottom:i<arr.length-1?"1px solid #E7E0EC":"none", flexWrap:isMobile?"wrap":"nowrap" }}>
                  <span style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:T.primary, background:"#F5EEFF", padding:"3px 10px", borderRadius:6, flexShrink:0 }}>{row.code}</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:13, color:T.dark, flexShrink:0, minWidth:160 }}>{row.label}</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>{row.desc}</span>
                </div>
              ))}
            </div>

            <h3 style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Error response format</h3>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"status"</Kw>: <Kw c="#F78C6C">400</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"data"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"statusCode"</Kw>: <Kw c="#F78C6C">400</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"errors"</Kw>: []{"\n"}
              {"  "}{"}\n"}
              {"}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Payins Overview ══ */}
          <div id="payins-overview" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Payins</h2>
            <p style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              PayOnUs provides multiple methods to receive payments: Virtual Accounts (Fixed or Dynamic) and Mobile Money. Virtual Accounts accept bank transfers; Mobile Money supports MTN, M-Pesa, and other networks across Africa.
            </p>
            {[
              { title:"Fixed Accounts",  desc:"Permanent accounts assigned to your business for receiving ongoing customer payments." },
              { title:"Dynamic Accounts",desc:"Temporary accounts created per transaction — ideal for one-time payments with exact amounts." },
              { title:"Mobile Money",    desc:"Accept MoMo payments across Ghana (MTN), Kenya (M-Pesa), South Africa, and Francophone Africa." },
              { title:"Card Payments",   desc:"Accept card payments via the PayOnUs checkout or direct API integration." },
            ].map((item, i) => (
              <div key={i} style={{ display:"flex", gap:12, marginBottom:12, padding:"14px 16px", border:"1px solid #E7E0EC", borderRadius:8, background:T.white }}>
                <div style={{ width:4, borderRadius:4, background:T.primary, flexShrink:0 }} />
                <div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:14, color:T.dark, marginBottom:3 }}>{item.title}</div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, lineHeight:1.55 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="doc-divider" />

          {/* ══ Fixed Accounts ══ */}
          <div id="fixed-accounts" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Fixed Accounts</h2>
            <p style={{ margin:"0 0 4px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              Fixed virtual accounts are permanent accounts assigned to your business that can receive payments from customers at any time.
            </p>
            <p style={{ margin:"12px 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>/api/v1/virtual-accounts/fixed-account</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"customer"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"name"</Kw>:  <Kw c="#F78C6C">"Test Customer"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"email"</Kw>: <Kw c="#F78C6C">"test@customer.com"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"phone"</Kw>: <Kw c="#F78C6C">"+2347019098867"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"bvn"</Kw>:   <Kw c="#F78C6C">"22123456789"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"address"</Kw>: {"{ "}<Kw c="#C3E88D">"line1"</Kw>: <Kw c="#F78C6C">"9 Finance Avenue"</Kw>{" }"}{"\n"}
              {"  "},{"}\n"}
              {"  "}<Kw c="#C3E88D">"dob"</Kw>:        <Kw c="#F78C6C">"1994-01-01"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"reference"</Kw>:  <Kw c="#F78C6C">"unique_ref_001"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"businessId"</Kw>: <Kw c="#F78C6C">"your_business_id"</Kw>{"\n"}
              {"}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Dynamic Accounts ══ */}
          <div id="dynamic-accounts" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Dynamic Accounts</h2>
            <p style={{ margin:"0 0 4px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              Dynamic virtual accounts are temporary accounts created for a specific transaction. Ideal for one-time payments and precise transaction tracking.
            </p>
            <p style={{ margin:"12px 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>/api/v1/virtual-accounts/dynamic</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"amount"</Kw>:     <Kw c="#F78C6C">5000.00</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"reference"</Kw>:  <Kw c="#F78C6C">"unique_txn_ref"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"businessId"</Kw>: <Kw c="#F78C6C">"your_business_id"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"customer"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"name"</Kw>:  <Kw c="#F78C6C">"John Doe"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"email"</Kw>: <Kw c="#F78C6C">"john@example.com"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"phone"</Kw>: <Kw c="#F78C6C">"08012345678"</Kw>{"\n"}
              {"  "}{"}\n"}
              {"}"}
            </CodeBlock>
            <h3 style={{ margin:"4px 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Response</h3>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"status"</Kw>: <Kw c="#F78C6C">200</Kw>, <Kw c="#C3E88D">"message"</Kw>: <Kw c="#F78C6C">"Success"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"data"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"accountName"</Kw>:       <Kw c="#F78C6C">"John Doe"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"accountNumber"</Kw>:     <Kw c="#F78C6C">"1212334455"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"bankName"</Kw>:          <Kw c="#F78C6C">"Test Bank"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"amount"</Kw>:            <Kw c="#F78C6C">5000</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"onusReference"</Kw>:     <Kw c="#F78C6C">"ONUS-NUB-xxx-xxx-xxx"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"merchantReference"</Kw>: <Kw c="#F78C6C">"unique_txn_ref"</Kw>{"\n"}
              {"  "}{"}\n"}
              {"}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Payouts Overview ══ */}
          <div id="payouts-overview" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Payouts</h2>
            <p style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              Transfer funds from your PayOnUs wallet to bank accounts, mobile money wallets, or other PayOnUs businesses. Always perform a Name Enquiry before initiating a bank transfer.
            </p>
            {[
              { code:"GET /api/v1/banks",                                label:"Fetch Bank List",   desc:"Returns available banks and institution codes." },
              { code:"POST /api/v1/transfer-requests/name-enquiry",      label:"Name Enquiry",      desc:"Verify account details before initiating a transfer." },
              { code:"POST /api/v1/transfer-requests/bank-transfer",     label:"Initiate Transfer", desc:"Send funds to a bank account or mobile money wallet." },
              { code:"GET /api/v1/transfer-requests",                    label:"List Transfers",    desc:"Retrieve transfer history with optional filters." },
              { code:"GET /api/v1/merchants/{merchantId}/wallets",       label:"Fetch Wallets",     desc:"List all wallets and their current balances." },
            ].map((item, i) => (
              <div key={i} style={{ display:"flex", gap:16, padding:"12px 16px", borderBottom:"1px solid #E7E0EC", flexWrap:isMobile?"wrap":"nowrap", alignItems:"flex-start" }}>
                <code style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:11, color:T.primary, background:"#F5EEFF", padding:"3px 8px", borderRadius:6, flexShrink:0, whiteSpace:"nowrap" }}>{item.code}</code>
                <div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:13, color:T.dark }}>{item.label}</div>
                  <div style={{ fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="doc-divider" />

          {/* ══ Bank Transfers ══ */}
          <div id="bank-transfers" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Bank Transfers</h2>

            <h3 style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>1. Name Enquiry</h3>
            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>/api/v1/transfer-requests/name-enquiry</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"institutionCode"</Kw>: <Kw c="#F78C6C">"044"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"accountNumber"</Kw>:   <Kw c="#F78C6C">"0123456789"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"businessId"</Kw>:      <Kw c="#F78C6C">"your_business_id"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"currency"</Kw>:        <Kw c="#F78C6C">"NGN"</Kw>{"\n"}
              {"}"}
            </CodeBlock>

            <h3 style={{ margin:"16px 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>2. Initiate Transfer</h3>
            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>/api/v1/transfer-requests/bank-transfer</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"reference"</Kw>:                <Kw c="#F78C6C">"unique_ref_123"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"amount"</Kw>:                   <Kw c="#F78C6C">5000.00</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"beneficiaryAccountNumber"</Kw>: <Kw c="#F78C6C">"0123456789"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"beneficiaryAccountName"</Kw>:   <Kw c="#F78C6C">"John Doe"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"beneficiaryBankCode"</Kw>:      <Kw c="#F78C6C">"044"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"transferType"</Kw>:             <Kw c="#F78C6C">"WALLET_TO_BANK_ACCOUNT"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"countryCode"</Kw>:              <Kw c="#F78C6C">"NG"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"currency"</Kw>:                 <Kw c="#F78C6C">"NGN"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"businessId"</Kw>:               <Kw c="#F78C6C">"your_business_id"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"email"</Kw>:                    <Kw c="#F78C6C">"customer@example.com"</Kw>{"\n"}
              {"}"}
            </CodeBlock>
            <p style={{ margin:"0 0 0", fontFamily:"DM Sans,sans-serif", fontSize:12, color:T.muted }}>
              Transfer types: <code style={pill}>WALLET_TO_WALLET</code> · <code style={pill}>WALLET_TO_BANK_ACCOUNT</code> · <code style={pill}>WALLET_TO_MOMO</code> · <code style={pill}>WALLET_TO_EFT</code>
            </p>
          </div>

          <hr className="doc-divider" />

          {/* ══ Wallets ══ */}
          <div id="wallets" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Wallets</h2>
            <p style={{ margin:"0 0 4px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              Retrieve all wallets for a merchant and their current balances.
            </p>
            <p style={{ margin:"12px 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>GET</strong> <code style={inline}>{"/api/v1/merchants/{merchantId}/wallets"}</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"status"</Kw>: <Kw c="#F78C6C">200</Kw>, <Kw c="#C3E88D">"message"</Kw>: <Kw c="#F78C6C">"Success"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"data"</Kw>: [{"\n"}
              {"    "}{"{\n"}
              {"      "}<Kw c="#C3E88D">"currency"</Kw>:          <Kw c="#F78C6C">"NGN"</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"availableBalance"</Kw>:  <Kw c="#F78C6C">50000000.00</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"status"</Kw>:            <Kw c="#F78C6C">"ACTIVE"</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"maxSinglePayout"</Kw>:   <Kw c="#F78C6C">1000000.00</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"payoutAllowed"</Kw>:     <Kw c="#82AAFF">true</Kw>{"\n"}
              {"    },\n"}
              {"    "}{"{\n"}
              {"      "}<Kw c="#C3E88D">"currency"</Kw>:          <Kw c="#F78C6C">"KES"</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"availableBalance"</Kw>:  <Kw c="#F78C6C">1000000.00</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"status"</Kw>:            <Kw c="#F78C6C">"ACTIVE"</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"maxSinglePayout"</Kw>:   <Kw c="#F78C6C">10000.00</Kw>,{"\n"}
              {"      "}<Kw c="#C3E88D">"payoutAllowed"</Kw>:     <Kw c="#82AAFF">true</Kw>{"\n"}
              {"    }\n  ]\n}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Webhooks Overview ══ */}
          <div id="webhooks-overview" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Webhooks</h2>
            <p style={{ margin:"0 0 24px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              PayOnUs sends real-time webhook events when a payment is received or a payout completes. Configure a publicly accessible HTTPS endpoint under Merchant Dashboard → Settings → Webhooks. Respond with HTTP 200 within 5 seconds; defer heavy work to background jobs.
            </p>

            <h3 style={{ margin:"0 0 8px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Event types</h3>
            <div style={{ display:"flex", flexDirection:"column", border:"1px solid #E7E0EC", borderRadius:10, overflow:"hidden", marginBottom:24 }}>
              {WEBHOOK_EVENTS.map((ev, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 20px", borderBottom:i<WEBHOOK_EVENTS.length-1?"1px solid #E7E0EC":"none", flexWrap:isMobile?"wrap":"nowrap" }}>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:500, fontSize:12, color:ev.catColor, background:ev.catBg, padding:"3px 10px", borderRadius:20, flexShrink:0 }}>{ev.cat}</span>
                  <span style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:"#374151", background:"#F3F4F6", padding:"3px 10px", borderRadius:20, flexShrink:0 }}>{ev.event}</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, marginLeft:isMobile?0:"auto" }}>{ev.desc}</span>
                </div>
              ))}
            </div>

            <p style={{ margin:"0 0 12px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              Every webhook request includes a <code style={inline}>hash</code> header — a hex-encoded SHA-256 used to verify payload integrity.
            </p>

            <h3 style={{ margin:"8px 0 4px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Sample payload — Dynamic Account payin</h3>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"id"</Kw>:                  <Kw c="#F78C6C">"xxx-xxx-xxx"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"type"</Kw>:                <Kw c="#F78C6C">"COLLECTION"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"currency"</Kw>:            <Kw c="#F78C6C">"NGN"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"businessId"</Kw>:          <Kw c="#F78C6C">"xxx-xxx-xxx"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"accountNumber"</Kw>:       <Kw c="#F78C6C">"6012343210"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"onusReference"</Kw>:       <Kw c="#F78C6C">"ONUS-NUB-xxxx-01012026-010101"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"paymentStatus"</Kw>:       <Kw c="#F78C6C">"SUCCESSFUL"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"paymentChannel"</Kw>:      <Kw c="#F78C6C">"BANK_TRANSFER"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"transactionAmount"</Kw>:   <Kw c="#F78C6C">50000</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"merchantReference"</Kw>:   <Kw c="#F78C6C">"mtx-20260101-010101"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"merchantFee"</Kw>:         <Kw c="#F78C6C">50</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"senderDetails"</Kw>: {"{\n"}
              {"    "}<Kw c="#C3E88D">"name"</Kw>:          <Kw c="#F78C6C">"JOHN SMITH"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"bankCode"</Kw>:      <Kw c="#F78C6C">"100004"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"bankName"</Kw>:      <Kw c="#F78C6C">"OPAY"</Kw>,{"\n"}
              {"    "}<Kw c="#C3E88D">"accountNumber"</Kw>: <Kw c="#F78C6C">"8012345678"</Kw>{"\n"}
              {"  "}{"}\n}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Verify Signatures ══ */}
          <div id="verify-signatures" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Verify Signatures</h2>
            <p style={{ margin:"0 0 12px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:560 }}>
              Always verify incoming webhooks to confirm they originate from PayOnUs and were not tampered with.
            </p>
            <ol style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, lineHeight:1.9, paddingLeft:20, margin:"0 0 16px" }}>
              <li>Retrieve your Verification Key from Merchant Dashboard → Settings → API.</li>
              <li>Concatenate in this exact order (no delimiter): <code style={pill}>accountNumber</code> + <code style={pill}>onusReference</code> + <code style={pill}>paymentStatus</code> + <code style={pill}>verificationKey</code></li>
              <li>Compute the SHA-256 hex digest of the resulting string.</li>
              <li>Compare it to the <code style={pill}>hash</code> header using a constant-time comparison.</li>
            </ol>
            <CodeBlock>
              <Kw c="#C792EA">import</Kw> crypto <Kw c="#C792EA">from</Kw> <Kw c="#C3E88D">'crypto'</Kw>;{"\n\n"}
              <Kw c="#C792EA">function</Kw> <Kw c="#82AAFF">verifyWebhook</Kw>(body, hashHeader, verificationKey) {"{\n"}
              {"  "}<Kw c="#C792EA">const</Kw> str = body.accountNumber + body.onusReference{"\n"}
              {"            + "}body.paymentStatus + verificationKey;{"\n\n"}
              {"  "}<Kw c="#C792EA">const</Kw> computed = crypto{"\n"}
              {"    "}.<Kw c="#82AAFF">createHash</Kw>(<Kw c="#C3E88D">'sha256'</Kw>){"\n"}
              {"    "}.<Kw c="#82AAFF">update</Kw>(str){"\n"}
              {"    "}.<Kw c="#82AAFF">digest</Kw>(<Kw c="#C3E88D">'hex'</Kw>);{"\n\n"}
              {"  "}<Kw c="#C792EA">return</Kw> crypto.<Kw c="#82AAFF">timingSafeEqual</Kw>({"\n"}
              {"    "}Buffer.<Kw c="#82AAFF">from</Kw>(computed),{"\n"}
              {"    "}Buffer.<Kw c="#82AAFF">from</Kw>(hashHeader){"\n"}
              {"  "});{"\n"}
              {"}"}
            </CodeBlock>
          </div>

          <hr className="doc-divider" />

          {/* ══ Testing ══ */}
          <div id="testing" style={{ scrollMarginTop:100 }}>
            <h2 style={{ margin:"0 0 10px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:500, fontSize:isMobile?22:28, color:T.dark }}>Testing Integration</h2>
            <p style={{ margin:"0 0 16px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:400, fontSize:14, lineHeight:1.7, color:T.muted, maxWidth:580 }}>
              Use the sandbox environment to simulate transactions before going live. Ensure your Webhook URL and Verification Key are configured in the sandbox dashboard, and that your IP is whitelisted.
            </p>

            <h3 style={{ margin:"0 0 6px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Simulate NGN Payin</h3>
            <p style={{ margin:"0 0 4px", fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>
              <strong>POST</strong> <code style={inline}>http://core-sandbox.payonus.com/api/v1/fund-ngn-account</code>
            </p>
            <CodeBlock>
              {"{\n"}
              {"  "}<Kw c="#C3E88D">"onusReference"</Kw>:    <Kw c="#F78C6C">{"\"ONUS-NUB-{{random}}\""}</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"accountNumber"</Kw>:    <Kw c="#F78C6C">{"\"{{dynamic_account_number}}\""}</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"amount"</Kw>:           <Kw c="#F78C6C">10000</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"paymentStatus"</Kw>:    <Kw c="#F78C6C">"SUCCESSFUL"</Kw>,{"\n"}
              {"  "}<Kw c="#C3E88D">"forDynamicAccount"</Kw>: <Kw c="#82AAFF">true</Kw>{"\n"}
              {"}"}
            </CodeBlock>

            <h3 style={{ margin:"16px 0 8px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>NGN Payout test accounts</h3>
            <div style={{ display:"flex", flexDirection:"column", border:"1px solid #E7E0EC", borderRadius:10, overflow:"hidden", marginBottom:24 }}>
              {[
                { acct:"9999991111", status:"PROCESSING"              },
                { acct:"9999991112", status:"SUCCESSFUL"              },
                { acct:"9999991113", status:"UNKNOWN_ERROR"           },
                { acct:"9999991114", status:"INVALID_ACCOUNT"         },
                { acct:"9999991117", status:"INSUFFICIENT_FUNDS"      },
                { acct:"9999991118", status:"ACCOUNT_NAME_MISMATCH"   },
                { acct:"9999991119", status:"TRANSACTION_NOT_PERMITTED_TO_SENDER" },
                { acct:"9999991120", status:"INVALID_AMOUNT"          },
                { acct:"9999991121", status:"INVALID_BANK_CODE"       },
              ].map((row, i, arr) => (
                <div key={row.acct} style={{ display:"flex", alignItems:"center", gap:16, padding:"11px 20px", borderBottom:i<arr.length-1?"1px solid #E7E0EC":"none" }}>
                  <code style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:T.dark, background:"#F3F4F6", padding:"3px 10px", borderRadius:6, flexShrink:0 }}>{row.acct}</code>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted }}>{row.status}</span>
                </div>
              ))}
            </div>

            <h3 style={{ margin:"0 0 8px", fontFamily:"DM Sans,sans-serif", fontWeight:700, fontSize:15, color:T.dark }}>Mobile Money test numbers</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {[
                { country:"GHS — Ghana",        network:"MTN",    phone:"0240000003"          },
                { country:"KES — Kenya",         network:"M-Pesa", phone:"234700000000"        },
                { country:"ZAR — South Africa",  network:"—",      phone:"Automatic on any attempt" },
              ].map((row, i) => (
                <div key={i} style={{ display:"flex", gap:16, padding:"12px 16px", border:"1px solid #E7E0EC", borderRadius:8, flexWrap:isMobile?"wrap":"nowrap" }}>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontWeight:600, fontSize:13, color:T.dark, flexShrink:0, minWidth:160 }}>{row.country}</span>
                  <span style={{ fontFamily:"DM Sans,sans-serif", fontSize:13, color:T.muted, flexShrink:0, minWidth:80 }}>{row.network}</span>
                  <code style={{ fontFamily:"'Fira Code','Courier New',monospace", fontSize:12, color:T.primary }}>{row.phone}</code>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
