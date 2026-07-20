import IndustryPage from "../../IndustryPage";

export const metadata = { title: "Forex | Payonus", description: "CBN-compliant payment rails for FX brokers and trading platforms operating in Africa. Instant deposit confirmation and full audit trails." };

const challenges = [
  {
    title: "Deposits take too long to reflect",
    desc: "Traders miss market windows when funds take hours to settle. Delayed deposits mean abandoned accounts, lost trading volume, and a reputation for being unreliable — all driven by payment infrastructure, not your platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M12 6v6l4 2" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Regulatory compliance is a moving target",
    desc: "CBN regulations for forex payments evolve frequently. Non-compliance risks license suspension, frozen merchant accounts, and reputational damage you can't afford in a trust-sensitive industry.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Reconciliation is a daily operational burden",
    desc: "Matching thousands of daily inflows from multiple payment channels to individual trader accounts is error-prone, time-consuming, and a compliance risk waiting to happen.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Instant deposit confirmation",
    desc: "Real-time webhooks notify your platform the moment a trader's funds hit your collection account. Traders see their balance update in seconds, not hours.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "CBN-compliant payment rails",
    desc: "Every transaction flows through infrastructure built to satisfy Central Bank requirements. Stay audit-ready without maintaining a dedicated compliance team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Multi-currency collections",
    desc: "Accept trader deposits in NGN, USD, GBP, EUR, and other major currencies. Support cross-border traders without managing multiple merchant accounts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automated reconciliation reports",
    desc: "Every inflow and outflow tagged, timestamped, and downloadable. Feed clean, structured data directly to your compliance team without manual data extraction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "High-value transaction support",
    desc: "No arbitrary limits blocking large trader deposits or institutional transfers. Our rails are built to handle the transaction sizes that serious FX operations require.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Dedicated settlement accounts",
    desc: "Separate collection and settlement infrastructure keeps trader funds clean, auditable, and clearly demarcated from your operating capital.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 10h20" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ForexPage() {
  return (
    <IndustryPage
      label="Industries / Forex"
      heading={<>The payment rails<br />FX traders trust.</>}
      subtext="CBN-compliant collections, real-time deposit confirmation, and full audit trails — built for forex brokers and trading platforms operating in Africa."
      challengeHeading={<>Why FX platforms<br />struggle with payments.</>}
      challenges={challenges}
      featuresHeading={<>Built for the demands<br />of forex operations.</>}
      features={features}
      marketsHeading={<>Reach traders<br />across Africa.</>}
      marketsSubtext="Your traders are in Nigeria, South Africa, Kenya, Ghana, and beyond. Payonus gives them every payment method they trust, with instant confirmation so they never miss a trade."
      ctaHeading={<>Ready to give your<br />traders faster deposits?</>}
      ctaSubtext="Join the growing number of African FX platforms that trust Payonus for compliant, instant payment infrastructure. Get your first integration live today."
    />
  );
}
