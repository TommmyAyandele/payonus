"use client";
import React from "react";
import ProductPage, { ProductFeature } from "../ProductPage";
import { T } from "../Navbar";

const FEATURES: ProductFeature[] = [
  {
    title: "Multi-channel payments",
    desc: "Accept cards, bank transfer, USSD, and mobile money — all through a single integration. No switching between processors or managing multiple contracts.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M2 10h20" stroke={T.primary} strokeWidth="1.5"/><path d="M6 15h4M14 15h2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Instant payment confirmation",
    desc: "Real-time webhook notifications the moment a payment clears. Build instant order confirmation, automated fulfilment, and live status tracking without polling.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Smart payment routing",
    desc: "Every transaction is automatically routed to the highest-success channel for that customer's bank and location — without any configuration from your team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.5"/><circle cx="18" cy="6" r="2.5" stroke={T.primary} strokeWidth="1.5"/><circle cx="12" cy="18" r="2.5" stroke={T.primary} strokeWidth="1.5"/><path d="M8.5 6h7M13.5 16.5l4-9M10.5 16.5l-4-9" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Hosted checkout page",
    desc: "A production-ready, mobile-optimised checkout page you can go live with in minutes. Custom branding, domain, and payment methods — no UI code required.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke={T.primary} strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><path d="M7 8h5M7 11h3" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    title: "Automatic reconciliation",
    desc: "Every payment is automatically matched to your orders and tagged with your references. Exportable reports in CSV or PDF — ready for your finance team any time.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/><rect x="9" y="3" width="6" height="4" rx="1" stroke={T.primary} strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: "Retry logic built in",
    desc: "Failed payments are automatically retried on the next best channel. Higher conversion rates without any extra integration effort from your engineering team.",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M1 4v6h6" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 15a9 9 0 1 0 .49-4" stroke={T.primary} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

/* Fixed 6x6 dot pattern — deterministic (no Math.random) so SSR/client markup always matches. */
const QR_PATTERN = [
  1,1,1,0,1,1, 1,0,1,0,0,1, 1,1,1,0,1,0,
  0,0,0,1,0,1, 1,0,1,0,1,1, 1,1,0,1,0,1,
];

function MockCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderRadius:16, border:"1px solid #E5E7EB", boxShadow:"0 12px 40px rgba(96,9,255,0.08)", background:T.white, padding:28, maxWidth:400, margin:"0 auto" }}>
      {children}
    </div>
  );
}

function PaymentLinkVisual() {
  return (
    <MockCard>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:24 }}>
        <div style={{ width:8, height:8, borderRadius:"50%", background:"#22C55E", flexShrink:0 }} />
        <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.muted, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>pay.payonus.com/2fK9xR</span>
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
        <div style={{ width:120, height:120, borderRadius:10, background:"#111", padding:8, display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:3 }}>
          {QR_PATTERN.map((on, i) => <div key={i} style={{ background: on ? "#FFF" : "transparent", borderRadius:1 }} />)}
        </div>
      </div>
      <p style={{ textAlign:"center", margin:"0 0 4px", fontFamily:"DM Sans, sans-serif", fontSize:13, color:T.muted }}>Amount due</p>
      <p style={{ textAlign:"center", margin:"0 0 20px", fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:600, fontSize:32, color:T.headingBlack }}>₦45,000</p>
      <div style={{ width:"100%", textAlign:"center", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, borderRadius:4, padding:"12px 0" }}>Pay Now</div>
      <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:8, marginTop:16 }}>
        {["Card","Bank Transfer","USSD","Mobile Money"].map(m => (
          <span key={m} style={{ fontFamily:"DM Sans, sans-serif", fontSize:11, color:T.muted, border:"1px solid #E5E7EB", borderRadius:999, padding:"4px 10px" }}>{m}</span>
        ))}
      </div>
    </MockCard>
  );
}

function InvoiceVisual() {
  const lines: [string, string][] = [
    ["Product design — 3 units", "₦120,000"],
    ["VAT (7.5%)", "₦9,000"],
    ["Discount", "-₦4,000"],
  ];
  return (
    <MockCard>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
        <span style={{ fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:600, fontSize:18, color:T.headingBlack }}>Invoice</span>
        <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.muted }}>#INV-0142</span>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:16, paddingBottom:16, borderBottom:"1px dashed #E5E7EB" }}>
        {lines.map(([label, amt]) => (
          <div key={label} style={{ display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:13, color:T.muted }}>{label}</span>
            <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:13, color:T.dark }}>{amt}</span>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:24 }}>
        <span style={{ fontFamily:"DM Sans, sans-serif", fontWeight:600, fontSize:15, color:T.headingBlack }}>Total</span>
        <span style={{ fontFamily:"Rubik, sans-serif", fontStyle:"italic", fontWeight:600, fontSize:20, color:T.primary }}>₦125,000</span>
      </div>
      <div style={{ width:"100%", textAlign:"center", fontFamily:"DM Sans, sans-serif", fontWeight:500, fontSize:14, color:T.white, background:T.primary, borderRadius:4, padding:"12px 0" }}>Pay Invoice</div>
      <p style={{ textAlign:"center", margin:"12px 0 0", fontFamily:"DM Sans, sans-serif", fontSize:12, color:T.muted }}>↓ Download PDF</p>
    </MockCard>
  );
}

export default function CollectionsPage() {
  return (
    <ProductPage
      label="• Collections"
      heading={<>Accept payments,<br />anywhere in <span style={{ color: T.primary }}>Africa.</span></>}
      subtext="A unified checkout and collections API for card, bank transfer, USSD, and mobile money across 8 African markets — in one integration."
      features={FEATURES}
      featuresHeading={<>Everything you need to<br />collect payments <span style={{ color: T.primary }}>reliably.</span></>}
      extraSection={{
        heading: <>Built for <span style={{ color: T.primary }}>SMEs.</span></>,
        subtext: "Self-serve tools for merchants who don't need a full integration — set up in minutes, no developer required.",
        items: [
          {
            title: "Payment Links",
            desc: "Share a link or QR code to collect payment — no checkout integration needed. Choose one-time, reusable, or group-contribution links, control how the amount works, and track who's paid from a live dashboard.",
            visual: <PaymentLinkVisual />,
            ctaLabel: "Get Started",
            ctaHref: "https://merchantv2.payonus.com/signup",
          },
          {
            title: "Invoicing",
            desc: "Create itemized invoices with VAT and deductions, then send a branded payment page your customer can pay in one click — with a downloadable PDF or receipt, on any device.",
            visual: <InvoiceVisual />,
            ctaLabel: "Get Started",
            ctaHref: "https://merchantv2.payonus.com/signup",
          },
        ],
        note: "Not formally registered yet? You can still onboard and start collecting — verified with your BVN, a government-issued ID, and proof of address instead of registration documents.",
      }}
      marketsHeading={<><span style={{ color: T.dark }}>One checkout,</span><br /><span style={{ color: T.primary }}>every customer.</span></>}
      marketsSubtext="Your customers pay the way they know — whether that's Verve, GTBank transfer, MTN Mobile Money, or USSD. Payonus handles the rails, you handle the product."
      ctaHeading={<>Ready to start accepting<br /><span style={{ color: T.primary }}>payments without friction?</span></>}
      ctaSubtext="Set up your first collection in minutes. No lengthy onboarding, no waiting weeks for approval."
      relatedLinks={[
        { label: "E-commerce", href: "/industries/ecommerce" },
        { label: "Gaming", href: "/industries/gaming" },
        { label: "Settlements", href: "/settlements" },
      ]}
    />
  );
}
