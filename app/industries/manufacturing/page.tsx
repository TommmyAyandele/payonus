import IndustryPage from "../../IndustryPage";

export const metadata = { title: "Manufacturing | Payonus", description: "B2B payment infrastructure for manufacturers — bulk supplier payouts, invoice collections, and cross-border procurement payments across Africa." };

const challenges = [
  {
    title: "Long B2B payment cycles choke cash flow",
    desc: "Net-30 and Net-60 supplier terms pile up fast. Waiting weeks for collections while procurement invoices come due puts cash flow in a permanent squeeze that limits production capacity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M12 6v6l4 2" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Paying multiple suppliers simultaneously is manual and error-prone",
    desc: "Routing payments to dozens of suppliers across multiple banks requires manual coordination that introduces payment delays, misallocation errors, and strained supplier relationships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 110 8 4 4 0 010-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Cross-border procurement adds FX complexity",
    desc: "Sourcing raw materials internationally means navigating currency conversion, correspondent banking fees, and unpredictable settlement timelines that make procurement planning difficult.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Bulk supplier and distributor payouts",
    desc: "Disburse payments to hundreds of vendors in a single batch, on schedule. Eliminate the manual coordination that delays payments and strains supplier relationships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 110 8 4 4 0 010-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "B2B invoice payment collections",
    desc: "Let buyers pay outstanding invoices via bank transfer, card, or USSD with automatic reconciliation that matches each payment to the correct purchase order.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Multi-currency for cross-border procurement",
    desc: "Settle international supplier invoices in their preferred currency without managing correspondent bank relationships or absorbing unpredictable FX fees.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Real-time payment status tracking",
    desc: "Know the moment every supplier payment lands, with a full audit trail your finance team can reference. No more chasing confirmation emails from banks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automated reconciliation reports",
    desc: "Match every collection and disbursement to the correct purchase order automatically. Your finance team spends time on analysis, not manual data entry.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Custom payment terms and scheduling",
    desc: "Set payment dates, automate recurring supplier payments, and manage approval workflows. Build payment discipline into your operations without additional headcount.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ManufacturingPage() {
  return (
    <IndustryPage
      industry="manufacturing"
      label="Industries / Manufacturing"
      heading={<>B2B payments that move<br />as fast as your supply chain.</>}
      subtext="From raw material procurement to distributor payouts — Payonus gives manufacturers the payment infrastructure to run lean, pay fast, and collect reliably."
      challengeHeading={<>Where manufacturing<br />payments break down.</>}
      challenges={challenges}
      featuresHeading={<>Payment operations<br />built for manufacturing.</>}
      features={features}
      marketsHeading={<>Pan-African supply chains.<br />One payment partner.</>}
      marketsSubtext="Your suppliers are in Nigeria, your distributors are in Ghana, Kenya, and South Africa. Payonus connects your entire supply chain payment flow across African markets."
      ctaHeading={<>Ready to tighten your<br />payment operations?</>}
      ctaSubtext="Manufacturers across Africa use Payonus to pay suppliers faster, collect from distributors reliably, and eliminate the manual coordination that slows growth."
    />
  );
}
