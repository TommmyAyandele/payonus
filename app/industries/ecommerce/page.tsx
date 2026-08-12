import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";

export const metadata = pageMetadata({
  title: "E-commerce",
  description: "Connect your checkout to every payment method African shoppers trust — cards, bank transfer, USSD, and mobile money — in one integration.",
  path: "/industries/ecommerce",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "E-commerce", path: "/industries/ecommerce" },
]);

const challenges = [
  {
    title: "Cart abandonment from missing payment methods",
    desc: "African shoppers pay by USSD, mobile money, bank transfer, and card. If your checkout only supports cards, you're turning away the majority of your market before they ever complete a purchase.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="21" r="1" stroke="#6009FF" strokeWidth="1.8"/>
        <circle cx="20" cy="21" r="1" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Cross-border sales are a reconciliation nightmare",
    desc: "Selling across multiple African markets means juggling different currencies, payment rails, and settlement timelines. Most merchants end up with spreadsheets, not clarity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Refund delays destroy repeat purchase rates",
    desc: "Customers who wait days for a refund rarely come back. Slow refunds are a silent churn driver — and in a market where word-of-mouth is everything, the damage spreads fast.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h11a8 8 0 010 16H3M3 10l4-4M3 10l4 4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Cards, bank transfer, USSD, mobile money",
    desc: "One integration gives your checkout access to every major payment channel in Africa. Stop losing sales to customers who don't see their preferred payment method.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M1 10h22" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Instant settlement to seller accounts",
    desc: "Move funds from your Payonus collection balance to your bank account on your schedule — daily, on demand, or per transaction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Multi-currency checkout",
    desc: "Present prices and accept payment in the local currency of each African market you serve. Customers pay in what they know; you settle in what you prefer.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#6009FF" strokeWidth="1.8"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Marketplace split payments",
    desc: "Automatically split every transaction between sellers, platform fees, and escrow accounts at the point of payment — no manual disbursements, no calculation errors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 110 8 4 4 0 010-8z" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "One-tap refund processing",
    desc: "Trigger refunds from your dashboard or via API in seconds. Customers receive their money within hours, not days — and come back to buy again.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h11a8 8 0 010 16H3M3 10l4-4M3 10l4 4" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Real-time order confirmation webhooks",
    desc: "Update order status and trigger fulfillment the moment payment is confirmed. No polling, no delays — your logistics team gets the signal as soon as the customer pays.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" stroke="#6009FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function EcommercePage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
      industry="ecommerce"
      label="Industries / E-commerce"
      heading={<>Every checkout.<br />Every method. Every time.</>}
      subtext="From single-product stores to enterprise marketplaces — Payonus connects your checkout to every payment method your African customers trust."
      challengeHeading={<>Why e-commerce merchants<br />lose sales they shouldn't.</>}
      challenges={challenges}
      featuresHeading={<>The checkout stack<br />your store needs.</>}
      features={features}
      marketsHeading={<>Sell everywhere<br />in Africa.</>}
      marketsSubtext="Nigeria, Ghana, Kenya, South Africa, and beyond — Payonus gives your checkout access to the payment methods each market relies on, from a single integration."
      ctaHeading={<>Ready to stop losing<br />sales at checkout?</>}
      ctaSubtext="E-commerce merchants across Africa trust Payonus to capture every sale, settle fast, and refund with zero friction. Start your integration today."
      relatedLinks={[
        { label: "Collections", href: "/collections" },
        { label: "Settlements", href: "/settlements" },
        { label: "Analytics", href: "/analytics" },
      ]}
      />
    </>
  );
}
