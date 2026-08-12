import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";

export const metadata = pageMetadata({
  title: "Gaming",
  description: "Payment rails built for the speed of play. In-game purchases, creator payouts, and tournament prizes — Payonus keeps your players in the game.",
  path: "/industries/gaming",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Gaming", path: "/industries/gaming" },
]);

const challenges = [
  {
    title: "Transactions fail at peak load",
    desc: "Players lose trust the moment a purchase fails during a tournament or live event. Legacy processors can't keep up with gaming traffic spikes, and every failure means a player who may never come back.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Paying out creators and winners takes days",
    desc: "Routing prize money and creator earnings to recipients scattered across Africa requires manual bank coordination that delays payouts, frustrates your community, and makes your platform look amateur.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M12 6v6l4 2" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Fraud and chargebacks bleed margin",
    desc: "Anonymous players and digital goods make fraud disputes costly and hard to win. Most payment processors leave you to absorb losses while disputes drag on for weeks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "High-velocity payment processing",
    desc: "Handle thousands of simultaneous in-game purchase requests without degradation. Built for burst traffic during live events and tournament finals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Bulk creator and prize payouts",
    desc: "Disburse earnings to hundreds of creators, streamers, or tournament winners in a single API call. No manual bank transfers, no delays.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 110 8 4 4 0 010-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Real-time webhook notifications",
    desc: "Confirm successful payment and unlock in-game items or tournament access instantly — not minutes later. Sub-second confirmation keeps your game loop unbroken.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Mobile money, USSD, cards, and bank transfer",
    desc: "Accept payments from players across Africa using every channel they trust — Mpesa, Airtel Money, USSD short codes, debit cards, or bank transfer.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M12 18h.01" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fraud detection and chargeback support",
    desc: "Layered fraud rails flag suspicious gaming transactions before they become disputes. When chargebacks do occur, our team helps you build and submit evidence.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Developer sandbox",
    desc: "Test every payment flow — successful purchases, failed transactions, refunds, and webhook delivery — in a staging environment built for gaming integration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function GamingPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
      industry="gaming"
      label="Industries / Gaming"
      heading={<>Payment rails built<br />for the speed of play.</>}
      subtext="Real-money in-game purchases, creator payouts, and tournament prizes — Payonus keeps your players in the game and your funds moving."
      challengeHeading={<>Why gaming payments<br />are uniquely hard.</>}
      challenges={challenges}
      featuresHeading={<>Everything your<br />game needs to collect.</>}
      features={features}
      marketsHeading={<>Pan-African.<br />One integration.</>}
      marketsSubtext="Your players are spread across Nigeria, Ghana, Kenya, South Africa, and beyond. Payonus reaches them all — cards, mobile money, and bank transfer — from a single API."
      ctaHeading={<>Ready to level up<br />your payment stack?</>}
      ctaSubtext="Thousands of merchants across Africa trust Payonus to move their money. Join them and get your first transaction live in under 30 minutes."
      />
    </>
  );
}
