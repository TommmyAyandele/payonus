import IndustryPage from "../../IndustryPage";

export const metadata = { title: "Banking & Fintech | Payonus", description: "Battle-tested payment infrastructure for neobanks, fintechs, and credit platforms building in Africa." };

const challenges = [
  {
    title: "Building reliable payments from scratch is expensive",
    desc: "Most fintechs spend months integrating with multiple processors to achieve redundancy. That engineering time comes at the cost of product features your customers actually want.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Compliance across African markets is complex",
    desc: "PCI-DSS, CBN directives, local data residency requirements — meeting every standard in every market demands a dedicated compliance team that most early-stage fintechs can't afford.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Downtime costs you customers",
    desc: "A payment failure during peak hours doesn't just hurt revenue — it breaks user trust in a category where trust is everything and switching costs are near zero.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "White-label payment infrastructure",
    desc: "Run your branded payment experience on Payonus rails. Your customers see your product — we handle the collection, settlement, and compliance behind the scenes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Multi-bank routing for maximum uptime",
    desc: "Transactions automatically route around processor failures. When one bank is down, your product stays live — your users never see the error that kills other apps.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "PCI-DSS compliant card processing",
    desc: "Skip the 12-month compliance project. Inherit our certified card processing infrastructure and go live with card payments without a single audit.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M1 10h22" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Instant settlement to your ledger",
    desc: "Funds confirmed in real time so your users see balances update immediately after a successful transaction — no polling, no delays, no support tickets about missing funds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Full API documentation",
    desc: "Integrate collections, payouts, and settlements with a single, well-documented API. Your engineering team gets up and running in hours, not weeks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Compliance framework included",
    desc: "PCI-DSS, CBN, and SOC 2-aligned infrastructure ready for your regulatory audits. We document our controls so your compliance team has what they need.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function BankingPage() {
  return (
    <IndustryPage
      industry="banking"
      label="Industries / Banking & Fintech"
      heading={<>Infrastructure for<br />Africa's financial builders.</>}
      subtext="Neobanks, fintechs, and credit platforms rely on Payonus for battle-tested payment rails that keep their products running and their customers happy."
      challengeHeading={<>What slows fintech<br />builders down.</>}
      challenges={challenges}
      featuresHeading={<>The rails your<br />product deserves.</>}
      features={features}
      marketsHeading={<>One API.<br />Every African market.</>}
      marketsSubtext="Whether you're live in Nigeria today and expanding to Kenya tomorrow, Payonus gives you a single integration that scales across African markets without rebuilding your payment stack."
      ctaHeading={<>Ready to build on<br />battle-tested rails?</>}
      ctaSubtext="Join the fintechs and financial platforms across Africa that rely on Payonus to move money reliably. Get your integration live today."
    />
  );
}
