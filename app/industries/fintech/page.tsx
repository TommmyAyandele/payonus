import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";

export const metadata = pageMetadata({
  title: "Fintech",
  description: "Payment infrastructure for lenders, PSSPs, and remittance platforms — instant disbursement, repayment collections, and cross-border payout rails across Africa.",
  path: "/industries/fintech",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Fintech", path: "/industries/fintech" },
]);

const challenges = [
  {
    title: "Loan disbursements lag behind approval decisions",
    desc: "A borrower approved in seconds but paid out in days is a broken experience. Lending platforms lose applicants to competitors who can move from decision to disbursed funds without delay.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Remittance corridors need predictable payout rails",
    desc: "Senders and recipients both need certainty. A delayed or failed cross-border payout doesn't just cost a transaction — it costs the trust that keeps a corridor active.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "PSSPs need rails to build on, not compete with",
    desc: "Payment service providers and aggregators need underlying infrastructure they can layer sub-accounts, ledgers, and downstream reconciliation on top of — without rebuilding it themselves.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M6 15h4M14 15h2" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Instant loan disbursement",
    desc: "Trigger payouts the moment a loan is approved — straight to any bank account or mobile wallet across 8 African markets.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automated repayment collections",
    desc: "Scheduled or on-demand debits for loan repayments via card, bank transfer, USSD, or mobile money — no manual chasing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="#6009FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Remittance payout rails",
    desc: "Settle cross-border transfers directly to recipient bank accounts and mobile wallets across Nigeria, Ghana, Kenya, and beyond.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Sub-account & ledger infrastructure",
    desc: "Give your platform's users their own virtual accounts and ledgers without building banking infrastructure from scratch.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automated reconciliation",
    desc: "Every disbursement, repayment, and remittance payout is automatically matched to your internal references — exportable for finance and audit.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 4v6h6" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 15a9 9 0 101.49-9" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "PCI-DSS compliant processing",
    desc: "Process card and bank transactions on infrastructure that meets industry security standards — without running your own compliance program.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function FintechPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
      industry="fintech"
      label="Industries / Fintech"
      heading={<>Rails for lenders,<br />PSSPs, and <span style={{ color: "#6009FF" }}>remittance.</span></>}
      subtext="Lending platforms, payment service providers, and remittance companies build on Payonus for disbursement, collections, and cross-border payout infrastructure that moves as fast as their products do."
      challengeHeading={<>Where fintech payments<br />slow everything down.</>}
      challenges={challenges}
      featuresHeading={<>Infrastructure built<br />for non-bank fintechs.</>}
      features={features}
      marketsHeading={<>One integration.<br />Every African corridor.</>}
      marketsSubtext="Whether you're disbursing loans in Lagos, collecting repayments in Nairobi, or settling remittances into Accra, Payonus gives you one integration across every market you operate in."
      ctaHeading={<>Ready to move money<br />as fast as your product?</>}
      ctaSubtext="Lenders, PSSPs, and remittance platforms across Africa trust Payonus to disburse, collect, and settle reliably. Get your first integration live today."
      relatedLinks={[
        { label: "Payment API", href: "/payment-api" },
        { label: "Payouts", href: "/payouts" },
        { label: "Banking & Fintech", href: "/industries/banking" },
      ]}
      />
    </>
  );
}
