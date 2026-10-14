"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import { T } from "./Navbar";
import { trackEvent } from "./analytics";

// Question wording and options are verbatim from the content strategist's
// "Content of the Gaming Assessment" spec — do not edit them here without a
// revised spec.
type Q =
  | { id: string; n: number; label: string; kind: "text" | "email" }
  | { id: string; n: number; label: string; kind: "single" | "multi"; options: string[] };

const QUESTIONS: Q[] = [
  { id: "name", n: 1, label: "Name", kind: "text" },
  { id: "email", n: 2, label: "Work email", kind: "email" },
  { id: "company", n: 3, label: "Company name", kind: "text" },
  { id: "role", n: 4, label: "Your role", kind: "single", options: [
    "Founder or executive.", "Finance or payments.", "Operations.", "Product or technology.", "Risk or compliance.", "Partnerships or commercials.", "Other.",
  ] },
  { id: "businessType", n: 5, label: "What type of gaming business do you operate?", kind: "single", options: [
    "Sportsbook or betting platform", "Online casino", "Lottery or gaming platform", "Mobile or digital gaming", "Other",
  ] },
  { id: "stage", n: 6, label: "What stage is your business in?", kind: "single", options: [
    "Preparing to launch", "Live in one African market", "Live in multiple African markets", "Expanding into additional African markets", "Reviewing or replacing an existing payment setup",
  ] },
  { id: "markets", n: 7, label: "Which African markets do you currently serve or plan to enter?", kind: "multi", options: [
    "Nigeria", "Ghana", "Kenya", "South Africa", "Zambia", "Côte d’Ivoire", "Senegal.", "Cameroon", "Other", "Not yet decided",
  ] },
  { id: "licence", n: 8, label: "What is your licence status?", kind: "single", options: [
    "Licensed and operating", "Licensed but preparing to launch", "Licence application in progress", "Not yet licensed", "Not applicable", "Prefer to discuss with a specialist",
  ] },
  { id: "depositMethods", n: 9, label: "Which player deposit methods do you currently support?", kind: "multi", options: [
    "Cards", "Bank transfers", "USSD", "Mobile money", "Digital wallets", "Other", "None yet",
  ] },
  { id: "payoutMethods", n: 10, label: "Which player payout methods do you currently support?", kind: "multi", options: [
    "Bank transfers", "Mobile money", "Digital wallets", "Cards", "Other", "We do not currently process payouts", "Not sure",
  ] },
  { id: "challenge", n: 11, label: "What is your biggest payment challenge right now?", kind: "single", options: [
    "Failed deposits", "Delayed or failed withdrawals", "Limited payment-method coverage", "Limited African market coverage", "Settlement or reconciliation problems", "High fees or reserves", "Provider reliability or downtime", "Integration complexity", "Compliance or eligibility uncertainty", "Preparing for launch", "No major problem yet",
  ] },
  { id: "deposits", n: 12, label: "How are deposits currently performing?", kind: "single", options: [
    "We do not know our deposit success rate", "Deposits are generally successful", "Some markets or payment methods perform poorly", "First-time deposits frequently fail", "Repeat deposits frequently fail", "Deposit performance has recently declined", "We have not launched yet",
  ] },
  { id: "payouts", n: 13, label: "How are player payouts currently performing?", kind: "single", options: [
    "Payouts are generally completed quickly", "Payouts vary significantly by market or method", "Payouts are often delayed", "Payouts frequently fail", "Payouts require significant manual work", "We do not currently process player payouts", "We have not launched yet",
  ] },
  { id: "providers", n: 14, label: "How many payment providers do you currently manage?", kind: "single", options: [
    "None yet", "One", "Tw.", "Three to five", "More than five", "Not sure",
  ] },
  { id: "next", n: 15, label: "What are you looking to do next?", kind: "single", options: [
    "Add a payment provider", "Improve deposit success", "Improve payout speed and reliability", "Enter a new African market", "Replace our current provider", "Consolidate several providers", "Prepare for launch", "Understand our options",
  ] },
  { id: "timing", n: 16, label: "When do you need to address this?", kind: "single", options: [
    "Immediately", "Within 30 days", "Within 1–3 months", "Within 3–6 months", "More than 6 months from now", "Still researching",
  ] },
  { id: "review", n: 17, label: "Would you like a PayOnUs specialist to review your responses?", kind: "single", options: [
    "Yes, contact me about my payment setup.", "No, send me the summary only.",
  ] },
];

type Answers = Record<string, string | string[]>;

// The spec asks for "a short, interpreted result … and a recommended next step
// (Talk to a gaming payments specialist)" but supplies no result wording, so
// these lines are deliberately plain restatements of what the operator told us.
function interpret(a: Answers): string[] {
  const out: string[] = [];
  const has = (id: string, v: string) => a[id] === v || (Array.isArray(a[id]) && (a[id] as string[]).includes(v));

  if (a.challenge && a.challenge !== "No major problem yet" && a.challenge !== "Preparing for launch")
    out.push(`Your biggest payment challenge right now is: ${String(a.challenge).toLowerCase()}. This is the first area to investigate before changing providers or adding payment methods.`);

  if (has("deposits", "We do not know our deposit success rate"))
    out.push("You don't currently know your deposit success rate. Measuring failed deposits by market and payment method is the first step to knowing what payment friction is costing you.");
  else if (["Some markets or payment methods perform poorly", "First-time deposits frequently fail", "Repeat deposits frequently fail", "Deposit performance has recently declined"].includes(String(a.deposits)))
    out.push(`Deposit performance needs attention (${String(a.deposits).toLowerCase()}). Review failures by market and payment method to see where players are being lost.`);

  if (["Payouts vary significantly by market or method", "Payouts are often delayed", "Payouts frequently fail", "Payouts require significant manual work"].includes(String(a.payouts)))
    out.push(`Player payouts need attention (${String(a.payouts).toLowerCase()}). Payout friction affects player trust, retention and support volume.`);
  if (has("payoutMethods", "We do not currently process payouts") || has("payouts", "We do not currently process player payouts"))
    out.push("You don't currently process player payouts. Confirm payout capability separately from deposits before you scale or enter new markets.");

  if (["Three to five", "More than five"].includes(String(a.providers)))
    out.push(`You manage ${String(a.providers).toLowerCase()} payment providers. More providers can close coverage gaps but also add integration, settlement and reconciliation work.`);

  if (["Expanding into additional African markets", "Live in multiple African markets"].includes(String(a.stage)) || a.next === "Enter a new African market")
    out.push("You're operating in or expanding across several African markets. Verify the deposit methods, payout methods, currencies and settlement arrangements that apply in each target market.");

  if (["Not yet licensed", "Licence application in progress", "Prefer to discuss with a specialist"].includes(String(a.licence)))
    out.push("Your licence status affects which payment providers can support you. Confirm eligibility for each target market early.");

  if (out.length === 0)
    out.push("You didn't flag a major deposit, payout or provider problem. As volume and market coverage grow, keep tracking deposit success, payout performance and reconciliation effort.");
  return out;
}

export default function GamingAssessment({ leadMagnetName, vertical, pageSlug, ctaParams }: {
  leadMagnetName: string;
  vertical: string;
  pageSlug: string;
  ctaParams: (cta_location: string) => Record<string, string>;
}) {
  const { isMobile } = useBreakpoint();
  const [answers, setAnswers] = React.useState<Answers>({});
  const [missing, setMissing] = React.useState<string[]>([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState<string[] | null>(null);
  const started = React.useRef(false);
  const resultRef = React.useRef<HTMLDivElement>(null);

  function set(id: string, value: string, multi: boolean) {
    if (!started.current) {
      started.current = true;
      trackEvent("gaming_assessment_start", ctaParams("Assessment"));
      trackEvent("form_start", { form_name: leadMagnetName, vertical });
    }
    setAnswers(prev => {
      if (!multi) return { ...prev, [id]: value };
      const cur = (prev[id] as string[]) ?? [];
      return { ...prev, [id]: cur.includes(value) ? cur.filter(v => v !== value) : [...cur, value] };
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const miss = QUESTIONS.filter(q => {
      const v = answers[q.id];
      return !v || (Array.isArray(v) ? v.length === 0 : !v.trim());
    }).map(q => q.id);
    setMissing(miss);
    if (miss.length) {
      document.getElementById(`q-${miss[0]}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    setError(false);
    const fmt = (v: string | string[]) => (Array.isArray(v) ? v.join(", ") : v);
    const summary = QUESTIONS.slice(3).map(q => `${q.n}. ${q.label} ${fmt(answers[q.id])}`).join(" | ");
    try {
      const res = await fetch("/api/sales-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: answers.name,
          email: answers.email,
          company: answers.company,
          role: answers.role,
          message: summary,
          formName: leadMagnetName,
          pageIndustry: vertical,
          leadMagnetName,
          vertical,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setResult(interpret(answers));
      trackEvent("gaming_assessment_opt_in", ctaParams("Assessment"));
      trackEvent("generate_lead", { form_name: leadMagnetName, vertical, page_slug: pageSlug });
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const label: React.CSSProperties = { display: "block", margin: "0 0 4px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark };
  const hint: React.CSSProperties = { margin: "0 0 10px", fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#9CA3AF" };
  const input: React.CSSProperties = { width: "100%", boxSizing: "border-box", font: "400 14px 'DM Sans', sans-serif", padding: "12px 14px", border: `1px solid ${T.borderLight}`, borderRadius: 6, color: T.dark };

  if (result) {
    const wantsCall = answers.review === "Yes, contact me about my payment setup.";
    return (
      <div ref={resultRef} style={{ scrollMarginTop: 96 }}>
        <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>Your assessment</p>
        <h3 style={{ margin: "0 0 16px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: 20, color: T.headingBlack }}>
          Areas that may be limiting payment performance or expansion
        </h3>
        <ul style={{ margin: "0 0 20px", paddingLeft: 20, listStyle: "disc", fontFamily: "DM Sans, sans-serif", fontSize: 15, lineHeight: 1.7, color: T.muted }}>
          {result.map(r => <li key={r} style={{ marginBottom: 8 }}>{r}</li>)}
        </ul>
        <p style={{ margin: "0 0 18px", fontFamily: "DM Sans, sans-serif", fontSize: 15, lineHeight: 1.7, color: T.muted }}>
          <strong style={{ color: T.dark }}>Recommended next step:</strong>{" "}
          {wantsCall
            ? "a PayOnUs gaming payments specialist will contact you to review your responses."
            : "talk to a gaming payments specialist about your markets, payment flows and integration requirements."}
        </p>
        {!wantsCall && (
          <a href="/sales" onClick={() => trackEvent("gaming_specialist_cta_click", ctaParams("Assessment Result"))}
            style={{ display: "inline-block", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, borderRadius: 4, padding: "13px 28px", textDecoration: "none" }}>
            Talk to a gaming payments specialist
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <h3 style={{ margin: "0 0 8px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 18 : 20, color: T.headingBlack }}>
        African Gaming Payment Readiness Assessment: Identify Your Payment Gaps
      </h3>
      <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, sans-serif", fontSize: 15, lineHeight: 1.7, color: T.muted }}>
        Answer these questions about your markets, deposits, payouts, and current payment challenges. You will receive a summary of the areas that may be limiting payment performance or expansion, plus the option to discuss your setup with a PayOnUs specialist.
      </p>
      <p style={{ margin: "0 0 28px", fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#9CA3AF" }}>Time required: 3–4 minutes.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        {QUESTIONS.map(q => {
          const bad = missing.includes(q.id);
          return (
            <fieldset key={q.id} id={`q-${q.id}`} style={{ border: "none", margin: 0, padding: 0, scrollMarginTop: 120 }}>
              <legend style={{ ...label, padding: 0 }}>{q.n}. {q.label}</legend>
              <p style={hint}>Required{q.kind === "single" ? ". Single select" : q.kind === "multi" ? ". Multi-select" : ""}</p>
              {!("options" in q) ? (
                <input type={q.kind} aria-label={q.label} value={(answers[q.id] as string) ?? ""} onChange={e => set(q.id, e.target.value, false)}
                  style={{ ...input, borderColor: bad ? "#D14343" : T.borderLight }} />
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8 }}>
                  {q.options.map(opt => {
                    const checked = q.kind === "multi" ? ((answers[q.id] as string[]) ?? []).includes(opt) : answers[q.id] === opt;
                    return (
                      <label key={opt} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 12px", border: `1px solid ${checked ? "#BFA6FF" : bad ? "#F0B4B4" : T.borderLight}`, background: checked ? "#F6F1FF" : T.white, borderRadius: 6, cursor: "pointer", fontFamily: "DM Sans, sans-serif", fontSize: 14, lineHeight: 1.45, color: T.dark }}>
                        <input type={q.kind === "multi" ? "checkbox" : "radio"} name={q.id} checked={checked} onChange={() => set(q.id, opt, q.kind === "multi")}
                          style={{ marginTop: 2, accentColor: T.primary }} />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              )}
              {bad && <p style={{ margin: "6px 0 0", fontFamily: "DM Sans, sans-serif", fontSize: 12, color: "#D14343" }}>Please answer this question.</p>}
            </fieldset>
          );
        })}
      </div>

      {error && <p style={{ margin: "20px 0 0", fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#D14343" }}>Something went wrong. Please try again.</p>}
      <button type="submit" disabled={submitting}
        style={{ marginTop: 28, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "13px 28px", cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Sending…" : "Get my assessment"}
      </button>
    </form>
  );
}
