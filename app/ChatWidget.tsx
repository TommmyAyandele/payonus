"use client";

import React from "react";
import { useSalesModal } from "./SalesModalContext";

/* ── Brand tokens ── */
const PRIMARY   = "#6009FF";
const DARK      = "#0F0C36";
const MUTED     = "#49454F";
const BG        = "#FAFAF8";
const LIGHT_PUR = "#EDE9FF";
const BORDER    = "#E4E0F0";

/* ── All FAQ knowledge base ── */
const KB: { q: string; a: string }[] = [
  /* Onboarding */
  { q: "How do I become a merchant sign up get started onboard register account", a: "Getting started with Payonus is easy! Click 'Get Started' on our website to create your merchant account. Once registered, our team will guide you through KYC verification and onboarding. You can also contact our sales team at sales@payonus.com for a guided setup." },
  { q: "How do I contact sales speak to someone talk to team", a: "You can reach our sales team by filling out the contact form on our Sales page, or by emailing sales@payonus.com. We typically respond within one business day." },
  /* Pricing */
  { q: "Are there setup fees?", a: "No. There are no setup fees, activation fees, or minimum commitments on our Starter plan. You only pay for what you process." },
  { q: "Can I switch plans mid-month?", a: "Yes. You can upgrade or downgrade at any time. Changes take effect immediately and billing is prorated for the remainder of the billing cycle." },
  { q: "Are there volume discounts?", a: "Yes. Enterprise customers and high-volume businesses are eligible for custom pricing. Reach out to our sales team to discuss your volume and get a tailored rate." },
  { q: "What currencies are fees charged in?", a: "Fees are charged in the local currency of each transaction. For international transfers, fees are calculated in the transaction currency before settlement." },
  /* Support */
  { q: "How long does a payout take to settle?", a: "Our standard payout settlement window is T+1 for verified merchant accounts. International payouts may take 2–3 business days depending on the destination bank and intermediary routing." },
  { q: "Which countries does Payonus currently support?", a: "Payonus currently supports 8 African markets: Nigeria, Ghana, Kenya, South Africa, Zambia, Cameroon, Côte d'Ivoire, and Senegal. We are actively expanding to additional markets." },
  { q: "How do I integrate Payonus into my website or app?", a: "You can integrate using our REST APIs or one of our official SDKs (JavaScript, Python, PHP). Sign up, generate your API keys from the dashboard, and follow our step-by-step guide at payonus.com/docs. Most integrations are completed in under a day." },
  { q: "What is the process for handling a dispute or chargeback?", a: "When a dispute is raised, we notify you via email and your dashboard. You have 5 business days to submit evidence. Our disputes team reviews submissions and resolves cases in line with card network rules and CBN guidelines." },
  { q: "How do I get or rotate my API keys?", a: "Log in to your Payonus merchant dashboard and navigate to Settings → API Keys. You can generate new keys for sandbox and live environments at any time. Old keys are invalidated immediately upon rotation." },
  { q: "How do I reach Payonus support?", a: "You can reach us via email at Support@payonus.com or by phone at +234 913 222 2249. Our support team is available Monday–Friday, 9 am–6 pm WAT. Enterprise clients have access to dedicated account managers." },
  /* Security */
  { q: "Is Payonus licensed and regulated?", a: "Yes. Payonus is licensed by the Central Bank of Nigeria (CBN) and certified under ISO 27001, PCIDSS Level 1, and the NDPC Trust Mark." },
  { q: "How does Payonus protect my transaction data?", a: "All transaction data is encrypted end-to-end using AES-256 and TLS 1.2+. Our infrastructure is ISO 27001 certified, and we undergo regular third-party penetration testing. No unencrypted card data is ever stored on our systems." },
  { q: "What happens if there is a security incident?", a: "We follow a documented incident response plan. Affected customers are notified within 72 hours of confirmation in accordance with NDPC requirements. A post-incident report is published for significant events." },
  { q: "How are API keys and secrets managed?", a: "API keys are hashed before storage using a one-way function — we cannot recover them. Secrets are managed through a dedicated secrets manager with audit logging on every read. Key rotation is available on demand from your dashboard." },
  { q: "What is your data retention and deletion policy?", a: "Transaction records are retained for 7 years to meet CBN and NDPC regulatory requirements. All other data is deleted within 30 days of account closure. You can request immediate deletion of non-regulatory data by contacting compliance@payonus.com." },
];

const STOPWORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","have","has","had",
  "do","does","did","will","would","could","should","may","might","shall","can",
  "i","my","me","we","our","you","your","it","its","this","that","these","those",
  "and","or","but","if","in","on","at","to","for","of","with","about","how",
  "what","which","when","where","who","why","there","than","then","so","from",
  "by","as","into","through","during","before","after","up","down","out","off",
  "over","under","again","just","not","no","nor","very","too","also","more",
]);

function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 2 && !STOPWORDS.has(w));
}

function findAnswer(query: string): string | null {
  const qTokens = tokenize(query);
  if (qTokens.length === 0) return null;

  let best: { score: number; answer: string } = { score: 0, answer: "" };

  for (const item of KB) {
    const qField = tokenize(item.q);
    const aField = tokenize(item.a);
    const matchQ = qTokens.filter(t => qField.some(h => h.includes(t) || t.includes(h))).length;
    const matchA = qTokens.filter(t => aField.some(h => h.includes(t) || t.includes(h))).length;
    // Question-field matches count 3x more than answer-field matches
    const score = (matchQ * 3 + matchA) / (qTokens.length * 3);
    if (score > best.score) best = { score, answer: item.a };
  }

  return best.score >= 0.35 ? best.answer : null;
}

/* ── Types ── */
type Message = { from: "bot" | "user"; text: string; link?: { label: string; href: string } };

const WELCOME: Message = {
  from: "bot",
  text: "Hi! I'm the Payonus assistant. Ask me anything about our pricing, integrations, security, payouts, or supported countries.",
};

const FALLBACK_MSG = "I don't have a specific answer for that. Our sales team will be happy to help — you can reach them below.";

export default function ChatWidget() {
  const [open, setOpen]       = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([WELCOME]);
  const [input, setInput]     = React.useState("");
  const [typing, setTyping]   = React.useState(false);
  const bottomRef             = React.useRef<HTMLDivElement>(null);
  const inputRef              = React.useRef<HTMLInputElement>(null);
  const { open: openSalesModal } = useSalesModal();

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages(prev => [...prev, { from: "user", text }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const answer = findAnswer(text);
      if (answer) {
        setMessages(prev => [...prev, { from: "bot", text: answer }]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            from: "bot",
            text: FALLBACK_MSG,
            link: undefined,
          },
          {
            from: "bot",
            text: "📧 Email us at sales@payonus.com",
          },
          {
            from: "bot",
            text: "Or fill out our contact form →",
            link: { label: "Contact Sales", href: "/sales" },
          },
        ]);
      }
    }, 900);
  }

  return (
    <>
      {/* ── Chat panel ── */}
      {open && (
        <div
          style={{
            position:     "fixed",
            bottom:       88,
            right:        24,
            width:        360,
            maxWidth:     "calc(100vw - 48px)",
            height:       500,
            maxHeight:    "calc(100vh - 120px)",
            background:   "#FFFFFF",
            borderRadius: 16,
            boxShadow:    "0 24px 64px rgba(96,9,255,0.18), 0 4px 16px rgba(0,0,0,0.08)",
            display:      "flex",
            flexDirection:"column",
            zIndex:       9998,
            overflow:     "hidden",
            border:       `1px solid ${BORDER}`,
            fontFamily:   "DM Sans, sans-serif",
          }}
        >
          {/* Header */}
          <div style={{
            background:    PRIMARY,
            padding:       "16px 20px",
            display:       "flex",
            alignItems:    "center",
            gap:           12,
            flexShrink:    0,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="white"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "#FFFFFF" }}>Payonus Support</p>
              <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Ask us anything</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                marginLeft: "auto", background: "none", border: "none",
                cursor: "pointer", padding: 4, display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex:       1,
            overflowY:  "auto",
            padding:    "16px 16px 8px",
            display:    "flex",
            flexDirection: "column",
            gap:        10,
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start" }}>
                {msg.from === "bot" && (
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: LIGHT_PUR, flexShrink: 0, marginRight: 8, marginTop: 2,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill={PRIMARY}/>
                    </svg>
                  </div>
                )}
                <div style={{ maxWidth: "75%" }}>
                  <div style={{
                    background:   msg.from === "user" ? PRIMARY : BG,
                    color:        msg.from === "user" ? "#FFFFFF" : DARK,
                    borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    padding:      "10px 14px",
                    fontSize:     14,
                    lineHeight:   1.5,
                    border:       msg.from === "bot" ? `1px solid ${BORDER}` : "none",
                  }}>
                    {msg.text}
                  </div>
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      onClick={e => { if (msg.link!.href === "/sales") { e.preventDefault(); openSalesModal(); } }}
                      style={{
                        display:       "inline-block",
                        marginTop:     6,
                        padding:       "8px 16px",
                        background:    PRIMARY,
                        color:         "#FFFFFF",
                        borderRadius:  8,
                        fontSize:      13,
                        fontWeight:    600,
                        textDecoration:"none",
                        transition:    "opacity 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      {msg.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: LIGHT_PUR, flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill={PRIMARY}/>
                  </svg>
                </div>
                <div style={{
                  background: BG, border: `1px solid ${BORDER}`,
                  borderRadius: "16px 16px 16px 4px", padding: "10px 16px",
                  display: "flex", gap: 4, alignItems: "center",
                }}>
                  {[0, 1, 2].map(d => (
                    <span key={d} style={{
                      width: 6, height: 6, borderRadius: "50%", background: MUTED,
                      display: "inline-block",
                      animation: `bounce 1.2s ease-in-out ${d * 0.2}s infinite`,
                    }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding:     "12px 16px",
            borderTop:   `1px solid ${BORDER}`,
            display:     "flex",
            gap:         8,
            flexShrink:  0,
            background:  "#FFFFFF",
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Type your question…"
              style={{
                flex:         1,
                border:       `1px solid ${BORDER}`,
                borderRadius: 8,
                padding:      "10px 14px",
                fontSize:     14,
                fontFamily:   "DM Sans, sans-serif",
                color:        DARK,
                outline:      "none",
                background:   BG,
              }}
              onFocus={e  => (e.currentTarget.style.borderColor = PRIMARY)}
              onBlur={e   => (e.currentTarget.style.borderColor = BORDER)}
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              aria-label="Send message"
              style={{
                width:        40,
                height:       40,
                borderRadius: 8,
                background:   input.trim() ? PRIMARY : LIGHT_PUR,
                border:       "none",
                cursor:       input.trim() ? "pointer" : "default",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                flexShrink:   0,
                transition:   "background 0.15s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke={input.trim() ? "#FFFFFF" : PRIMARY} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        style={{
          position:     "fixed",
          bottom:       24,
          right:        24,
          width:        56,
          height:       56,
          borderRadius: "50%",
          background:   "#F4B249",
          border:       "none",
          cursor:       "pointer",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          boxShadow:    "0 8px 24px rgba(244,178,73,0.50)",
          zIndex:       9999,
          transition:   "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform   = "scale(1.08)";
          e.currentTarget.style.boxShadow   = "0 12px 32px rgba(244,178,73,0.65)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform   = "scale(1)";
          e.currentTarget.style.boxShadow   = "0 8px 24px rgba(244,178,73,0.50)";
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="white"/>
          </svg>
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}
