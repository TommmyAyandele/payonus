"use client";

import React from "react";
import { useBreakpoint } from "./use-breakpoint";
import Navbar, { T } from "./Navbar";
import Footer from "./Footer";
import HeroBg from "./HeroBg";
import { trackEvent } from "./analytics";
import GamingAssessment from "./GamingAssessment";

export interface ToolItem {
  title: string;
  desc: string;
}

export interface ToolStep {
  title: string;
  desc: string;
}

export interface ToolLandingData {
  vertical: string;
  leadMagnetName: string;
  leadMagnetType: string;
  pageSlug: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  ctaLabel: string;
  builtFor: string;
  introHeading: string;
  introBody: string[];
  evaluateHeading: string;
  evaluateItems: ToolItem[];
  whoForHeading: string;
  whoForIntro: string;
  whoForBullets: string[];
  howToHeading: string;
  howToSteps: ToolStep[];
  closingHeading: string;
  footerNote: string;
  resourceHref: string;
  resourceLinkText: string;
  /** The full lead-magnet document, revealed on the page once the form is submitted. */
  contentHtml?: string;
}

function ripple(e: React.MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const circle = document.createElement("span");
  const d = Math.max(btn.clientWidth, btn.clientHeight);
  circle.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${d}px;height:${d}px;left:${e.nativeEvent.offsetX - d / 2}px;top:${e.nativeEvent.offsetY - d / 2}px;background:rgba(255,255,255,0.35);transform:scale(0);animation:ripple .5s ease-out;`;
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
}

export default function ToolLandingPage({ data }: { data: ToolLandingData }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [scrolled, setScrolled] = React.useState(false);
  const [form, setForm] = React.useState({ firstName: "", workEmail: "", companyName: "" });
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const docRef = React.useRef<HTMLDivElement>(null);
  const storeKey = `lm:${data.pageSlug}`;

  // Remember that this visitor already unlocked the document, and what they
  // typed into it, so a refresh doesn't lose their work.
  React.useEffect(() => {
    try { if (localStorage.getItem(`${storeKey}:unlocked`)) setSubmitted(true); } catch {}
  }, [storeKey]);

  React.useEffect(() => {
    const root = docRef.current;
    if (!submitted || !root) return;
    let saved: Record<string, string | boolean> = {};
    try { saved = JSON.parse(localStorage.getItem(`${storeKey}:values`) || "{}"); } catch {}
    root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-k]").forEach(el => {
      const v = saved[el.dataset.k!];
      if (v === undefined) return;
      if (el instanceof HTMLInputElement && el.type === "checkbox") el.checked = Boolean(v);
      else el.value = String(v);
    });
    const onInput = (e: Event) => {
      const el = e.target as HTMLInputElement | HTMLTextAreaElement;
      if (!el.dataset?.k) return;
      saved[el.dataset.k] = el instanceof HTMLInputElement && el.type === "checkbox" ? el.checked : el.value;
      try { localStorage.setItem(`${storeKey}:values`, JSON.stringify(saved)); } catch {}
    };
    root.addEventListener("input", onInput);
    return () => root.removeEventListener("input", onInput);
  }, [submitted, storeKey]);
  const hasStartedRef = React.useRef(false);
  const formRef = React.useRef<HTMLDivElement>(null);
  const hPad = isMobile ? 20 : isTablet ? 48 : 80;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function ctaBaseParams(cta_location: string) {
    return {
      lead_magnet_name: data.leadMagnetName,
      lead_magnet_type: data.leadMagnetType,
      vertical: data.vertical,
      page_slug: data.pageSlug,
      cta_location,
    };
  }

  function scrollToForm(cta_location: string) {
    trackEvent("lead_magnet_cta_click", ctaBaseParams(cta_location));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent("form_start", { form_name: data.leadMagnetName, vertical: data.vertical });
    }
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/sales-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          email: form.workEmail,
          company: form.companyName,
          formName: data.leadMagnetName,
          pageIndustry: data.vertical,
          leadMagnetName: data.leadMagnetName,
          vertical: data.vertical,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      try { localStorage.setItem(`${storeKey}:unlocked`, "1"); } catch {}
      if (data.contentHtml) setTimeout(() => docRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      trackEvent("lead_magnet_form_submit", { ...ctaBaseParams("Form"), form_name: data.leadMagnetName });
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const h2Style: React.CSSProperties = {
    margin: "0 0 20px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500,
    fontSize: isMobile ? 22 : 28, lineHeight: 1.2, color: T.headingBlack,
  };
  const pStyle: React.CSSProperties = {
    margin: "0 0 16px", fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.75, color: T.muted,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: T.bg }}>
      <style>{`@keyframes ripple { to { transform: scale(2.5); opacity: 0; } }
        .lm-doc { font-family:"DM Sans",sans-serif; color:${T.muted}; font-size:14px; line-height:1.65; }
        .lm-doc h1, .lm-doc h2 { font-family:"Rubik",sans-serif; font-style:italic; font-weight:500; color:${T.headingBlack}; font-size:${isMobile ? 20 : 24}px; line-height:1.25; margin:36px 0 12px; }
        .lm-doc h3 { font-family:"Rubik",sans-serif; font-style:italic; font-weight:500; color:${T.headingBlack}; font-size:17px; margin:28px 0 8px; }
        .lm-doc h4 { font-weight:600; color:${T.dark}; font-size:15px; margin:22px 0 8px; }
        .lm-doc > :first-child { margin-top:0; }
        .lm-doc p { margin:0 0 12px; }
        .lm-doc strong { color:${T.dark}; }
        .lm-doc ul, .lm-doc ol { margin:0 0 14px; padding-left:22px; }
        .lm-doc ul { list-style:disc; } .lm-doc ol { list-style:decimal; }
        .lm-doc li { margin-bottom:4px; }
        .lm-doc li:has(> .lm-check:first-child) { list-style:none; margin-left:-22px; }
        .lm-doc a { color:${T.primary}; font-weight:600; text-decoration:none; }
        .lm-doc table { width:100%; border-collapse:collapse; margin:6px 0 20px; font-size:13px; display:block; overflow-x:auto; }
        .lm-doc th { text-align:left; font-weight:600; color:${T.dark}; background:#F3EEFF; padding:8px 10px; border:1px solid #E4DCF7; vertical-align:top; }
        .lm-doc td { padding:6px 10px; border:1px solid #EEE8F7; vertical-align:top; }
        .lm-doc td:has(> .lm-check:only-child) { text-align:center; }
        .lm-doc .lm-check:not(:first-child) { margin-left:14px; }
        .lm-check { width:16px; height:16px; margin:0 6px 0 0; vertical-align:-3px; accent-color:${T.primary}; cursor:pointer; }
        .lm-blank { display:inline-block; width:200px; min-width:0; }
        .lm-cell { width:100%; min-width:90px; box-sizing:border-box; font:400 13px "DM Sans",sans-serif; color:${T.dark}; border:none; border-bottom:1px dashed #CFC4E8; background:transparent; padding:4px 2px; }
        .lm-text { display:block; width:100%; box-sizing:border-box; font:400 14px "DM Sans",sans-serif; color:${T.dark}; border:1px solid ${T.borderLight}; border-radius:6px; padding:10px 12px; margin:0 0 16px; resize:vertical; }
        .lm-cell:focus, .lm-text:focus { outline:2px solid #C9B5FF; outline-offset:1px; }
        @media print {
          body * { visibility:hidden; }
          .lm-print, .lm-print * { visibility:visible; }
          .lm-print { position:absolute; left:0; top:0; width:100%; padding:0 !important; border:none !important; }
          .lm-noprint { display:none !important; }
          .lm-doc table { display:table; overflow:visible; }
          .lm-cell, .lm-text { border-color:#999; }
        }`}</style>
      <Navbar scrolled={scrolled} />

      <section style={{ position: "relative", width: "100%", background: T.bg, overflow: "hidden", padding: isMobile ? "64px 0 40px" : "88px 0 56px" }}>
        <HeroBg />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto", padding: `0 ${hPad}px` }}>
          <span style={{ display: "block", marginBottom: 20, fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>
            {data.eyebrow}
          </span>
          <h1 style={{ margin: "0 0 16px", fontFamily: "Rubik, sans-serif", fontStyle: "italic", fontWeight: 500, fontSize: isMobile ? 32 : isTablet ? 40 : 46, lineHeight: 1.15, letterSpacing: "-0.01em", color: T.headingBlack }}>
            {data.h1}
          </h1>
          <p style={{ ...pStyle, fontSize: isMobile ? 15 : 16, maxWidth: 620 }}>{data.subheadline}</p>
          <button
            onClick={e => { ripple(e); scrollToForm("Hero"); }}
            style={{ position: "relative", overflow: "hidden", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "13px 28px", cursor: "pointer", transition: "opacity .15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {data.ctaLabel}
          </button>
          <p style={{ margin: "16px 0 0", fontFamily: "DM Sans, sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 13, color: "#9CA3AF" }}>{data.builtFor}</p>
        </div>
      </section>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: `0 ${hPad}px`, width: "100%", boxSizing: "border-box" }}>
        <h2 style={h2Style}>{data.introHeading}</h2>
        {data.introBody.map((para, i) => <p key={i} style={pStyle}>{para}</p>)}

        <h2 style={{ ...h2Style, marginTop: 40 }}>{data.evaluateHeading}</h2>
        <div style={{ display: "grid", gap: 20, marginBottom: 8 }}>
          {data.evaluateItems.map(item => (
            <div key={item.title} style={{ borderLeft: `2px solid ${T.borderLight}`, paddingLeft: 16 }}>
              <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{item.title}</p>
              <p style={{ ...pStyle, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...h2Style, marginTop: 40 }}>{data.whoForHeading}</h2>
        <p style={pStyle}>{data.whoForIntro}</p>
        <ul style={{ ...pStyle, paddingLeft: 22, margin: "0 0 16px" }}>
          {data.whoForBullets.map(b => <li key={b} style={{ marginBottom: 6 }}>{b}</li>)}
        </ul>

        <h2 style={{ ...h2Style, marginTop: 40 }}>{data.howToHeading}</h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 8 }}>
          {data.howToSteps.map((step, i) => (
            <div key={step.title} style={{ display: "flex", gap: 14 }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", background: "#E9DDFF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 13 }}>
                {i + 1}
              </div>
              <div>
                <p style={{ margin: "0 0 2px", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.dark }}>{step.title}</p>
                <p style={{ ...pStyle, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: "16px 0 40px", paddingTop: 24, borderTop: `1px solid ${T.borderLight}` }}>
          <a href={data.resourceHref} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: 15, color: T.primary, textDecoration: "none" }}>
            {data.resourceLinkText}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke={T.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div ref={formRef} style={{ scrollMarginTop: 96, background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: 12, padding: isMobile ? 24 : 32, marginBottom: 64 }}>
          <h2 style={{ ...h2Style, fontSize: isMobile ? 20 : 24 }}>{data.closingHeading}</h2>

          {data.leadMagnetType === "assessment" ? (
            <GamingAssessment leadMagnetName={data.leadMagnetName} vertical={data.vertical} pageSlug={data.pageSlug} ctaParams={ctaBaseParams} />
          ) : submitted ? (
            <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 15, lineHeight: 1.65, color: T.dark }}>
              {data.contentHtml
                ? <>Thanks — your {data.leadMagnetName} is below. Fill it in on this page, then save or print it as a PDF.</>
                : <>Thanks — we&apos;ve got your details and will send your {data.leadMagnetName} shortly.</>}
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" required
                  style={{ font: "400 14px 'DM Sans', sans-serif", padding: "12px 14px", border: `1px solid ${T.borderLight}`, borderRadius: 6, color: T.dark }} />
                <input name="companyName" value={form.companyName} onChange={handleChange} placeholder="Company name" required
                  style={{ font: "400 14px 'DM Sans', sans-serif", padding: "12px 14px", border: `1px solid ${T.borderLight}`, borderRadius: 6, color: T.dark }} />
              </div>
              <input type="email" name="workEmail" value={form.workEmail} onChange={handleChange} placeholder="Work email" required
                style={{ font: "400 14px 'DM Sans', sans-serif", padding: "12px 14px", border: `1px solid ${T.borderLight}`, borderRadius: 6, color: T.dark }} />

              {submitError && (
                <p style={{ margin: 0, fontFamily: "DM Sans, sans-serif", fontSize: 13, color: "#D14343" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                onClick={ripple}
                style={{ position: "relative", overflow: "hidden", alignSelf: "flex-start", fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.white, background: T.primary, border: "none", borderRadius: 4, padding: "13px 28px", cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? "Sending…" : data.ctaLabel}
              </button>
            </form>
          )}
        </div>

        <p style={{ fontFamily: "DM Sans, sans-serif", fontStyle: "italic", fontWeight: 400, fontSize: 13, color: "#9CA3AF", marginTop: -32, marginBottom: 64 }}>
          {data.footerNote}
        </p>

        {submitted && data.contentHtml && (
          <div ref={docRef} className="lm-print" style={{ scrollMarginTop: 96, background: T.white, border: `1px solid ${T.borderLight}`, borderRadius: 12, padding: isMobile ? 20 : 40, marginBottom: 64 }}>
            <div className="lm-noprint" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 28, paddingBottom: 20, borderBottom: `1px solid ${T.borderLight}` }}>
              <span style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase", color: T.primary }}>
                Your {data.leadMagnetType}
              </span>
              <button
                onClick={() => { trackEvent("lead_magnet_download", ctaBaseParams("Document")); window.print(); }}
                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14, color: T.primary, background: "#F3EEFF", border: "1px solid #DDD0FF", borderRadius: 4, padding: "10px 18px", cursor: "pointer" }}
              >
                Save as PDF / Print
              </button>
            </div>
            <div className="lm-doc" dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
