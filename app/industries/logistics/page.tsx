import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";

export const metadata = pageMetadata({
  title: "Ride-hailing & Logistics",
  description: "Payment infrastructure for ride-hailing and logistics platforms — instant driver payouts, split payments, and fare collections across Africa.",
  path: "/industries/logistics",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Ride-hailing & Logistics", path: "/industries/logistics" },
]);

const challenges = [
  {
    title: "Drivers and riders expect same-day earnings",
    desc: "A driver who has to wait days for a payout looks for another platform. Ride-hailing and delivery businesses live or die on how fast they can move money after every trip.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "A single fare has to be split multiple ways",
    desc: "Every trip or delivery needs its value automatically divided between the driver's earnings, your platform's commission, and any third-party partners — manually, that math doesn't scale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="#6009FF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Cash and digital payments don't reconcile cleanly",
    desc: "Platforms running cash-on-delivery alongside card, wallet, and bank transfer collections end up reconciling two separate systems instead of one unified view of every transaction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const features = [
  {
    title: "Instant driver & rider payouts",
    desc: "Settle earnings to bank accounts or mobile wallets same-day, keeping drivers active and riders paid without delay.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automatic split payments",
    desc: "Route a single fare or delivery fee across driver earnings, platform commission, and partner shares automatically, on every transaction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" stroke="#6009FF" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Multi-channel fare collection",
    desc: "Accept fares and delivery payments by card, bank transfer, USSD, or mobile money — all through a single integration.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M2 10h20" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M6 15h4M14 15h2" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Bulk payout processing",
    desc: "Pay hundreds of drivers or riders in a single batch instead of processing payouts one at a time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Real-time transaction visibility",
    desc: "Track every fare, payout, and reconciliation event as it happens, across your entire driver and rider network.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#6009FF" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 11l3-3 3 3 5-5" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Automated reconciliation",
    desc: "Every payout and collection is automatically matched to its trip or delivery reference — exportable in CSV or PDF for your finance team.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M1 4v6h6" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 15a9 9 0 101.49-9" stroke="#6009FF" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function LogisticsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
      industry="logistics"
      label="Industries / Ride-hailing & Logistics"
      heading={<>Driver payouts that<br />move as fast as <span style={{ color: "#6009FF" }}>your fleet.</span></>}
      subtext="Ride-hailing and logistics platforms use Payonus to pay drivers and riders instantly, split fares automatically, and collect payments across every channel their customers use."
      challengeHeading={<>Where ride-hailing and<br />logistics payments break down.</>}
      challenges={challenges}
      featuresHeading={<>Payment infrastructure<br />built for the road.</>}
      features={features}
      marketsHeading={<>Every route.<br />Every market.</>}
      marketsSubtext="From Lagos traffic to Nairobi's boda network, Payonus handles driver payouts and fare collections across African markets so your fleet keeps moving."
      ctaHeading={<>Ready to pay your<br />drivers instantly?</>}
      ctaSubtext="Ride-hailing and logistics platforms across Africa trust Payonus to move money as fast as their fleets move people and packages. Get started today."
      relatedLinks={[
        { label: "Payouts", href: "/payouts" },
        { label: "Collections", href: "/collections" },
        { label: "Payment API", href: "/payment-api" },
      ]}
      />
    </>
  );
}
