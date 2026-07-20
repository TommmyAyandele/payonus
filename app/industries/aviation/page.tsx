import IndustryPage from "../../IndustryPage";

export const metadata = { title: "Aviation | Payonus", description: "High-value payment processing for airlines, travel agencies, and booking platforms operating across Africa." };

const challenges = [
  {
    title: "High-value bookings get declined without warning",
    desc: "Card networks flag large ticket purchases as suspicious. A declined payment during the booking flow isn't a minor inconvenience — it's a booking lost, often permanently, to a competitor who processes it without friction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M1 10h22" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 14h.01M12 14h.01" stroke="#6009FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 14h-2" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Refund and reschedule workflows are operationally painful",
    desc: "Processing refunds for cancelled flights or rerouted passengers through legacy payment systems creates backlogs, generates customer complaints, and ties up your operations team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h11a8 8 0 010 16H3M3 10l4-4M3 10l4 4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "International routes need multi-currency",
    desc: "Passengers booking cross-border routes expect to pay in their local currency and receive refunds the same way. Forcing a single currency loses international bookings before your pricing page.",
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
    title: "High-value transaction processing",
    desc: "No arbitrary limits blocking large ticket purchases or group bookings. Our rails are sized for the transaction values that airline and travel operations require.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="1" x2="12" y2="23" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "PCI-DSS compliant card processing",
    desc: "Meet the payment security standards that airlines, OTAs, and travel platforms require — without running your own compliance program.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "3D Secure authentication",
    desc: "Reduce fraud on high-value bookings without introducing friction that costs you conversions. Layered authentication that meets card network requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Instant refund disbursement",
    desc: "Trigger flight refunds via API and have funds in the passenger's account within hours. Turn a frustrating cancellation into a brand moment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h11a8 8 0 010 16H3M3 10l4-4M3 10l4 4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Multi-currency collections",
    desc: "Accept payment in NGN, GBP, USD, EUR, and other currencies for domestic and international routes — with automatic conversion and settlement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Real-time booking confirmation",
    desc: "Webhooks trigger immediately on payment success so seat inventory and booking systems update without delay — no over-sold flights, no reconciliation headaches.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function AviationPage() {
  return (
    <IndustryPage
      label="Industries / Aviation"
      heading={<>High-value payments.<br />Zero turbulence.</>}
      subtext="Airlines, travel agencies, and booking platforms need payment infrastructure as reliable as their operations. Payonus delivers on every route."
      challengeHeading={<>Where aviation payments<br />hit unexpected turbulence.</>}
      challenges={challenges}
      featuresHeading={<>Payment infrastructure<br />built for aviation.</>}
      features={features}
      marketsHeading={<>Every African route.<br />Every payment method.</>}
      marketsSubtext="From Lagos to Nairobi, Accra to Johannesburg — Payonus handles collections and refunds across African markets so your passengers can book, pay, and fly without friction."
      ctaHeading={<>Ready for payment<br />infrastructure that won't fail?</>}
      ctaSubtext="Airlines and travel platforms across Africa trust Payonus for high-value, high-reliability payment processing. Get started today."
    />
  );
}
