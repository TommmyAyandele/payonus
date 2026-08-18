import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Aviation Payment Infrastructure & Solutions",
  description: "Payment infrastructure for airlines, charter operators, FBOs, MROs and aviation businesses managing complex, high-value and cross-border payments.",
  path: "/industries/aviation",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Aviation", path: "/industries/aviation" },
]);

const blocks: IndustryBlock[] = [
  {
    kind: "stats", id: "stats",
    items: [
      { value: "8", label: "African markets" },
      { value: "99%", label: "Uptime SLA" },
      { value: "24/7", label: "Infrastructure monitoring" },
    ],
  },
  {
    kind: "showcase", id: "payment-flows",
    heading: "Make payments easier to manage across your aviation business",
    intro: "Bookings, charter services, agency payments, and other services can all create different payment flows. Payonus helps bring the payment side of those operations into one infrastructure.",
    items: [
      { icon: "card", title: "Bookings", desc: "Manage payments connected to passenger bookings.", image: "/company-mission.jpg" },
      { icon: "layers", title: "Ancillary Services", desc: "Manage payments from additional services alongside your core bookings.", image: "/card-collections.png" },
      { icon: "building", title: "Corporate Payments", desc: "Support payment arrangements for corporate customers and business accounts.", image: "/company-hero-2.png" },
      { icon: "bolt", title: "Charter Operations", desc: "Handle payment requirements for charter services and higher-value bookings.", image: "/company-hero-1.png" },
      { icon: "users", title: "Agency Channels", desc: "Manage payments involving travel agencies and commercial partners.", image: "/company-hero-3.png" },
      { icon: "globe", title: "Cross-Border Payments", desc: "Support payment activity when you collect from customers across markets.", image: "/dashboard-preview.png" },
    ],
  },
  {
    kind: "bento", id: "complexity", leadMock: "collections",
    heading: "Complex payments create more work",
    intro: "The transaction is only one part of the job. Fragmented channels, markets and settlement processes can create more work behind every payment.",
    items: [
      { icon: "alert", title: "Failed Payments", desc: "Failed transactions can mean lost bookings and extra work." },
      { icon: "layers", title: "Fragmented Channels", desc: "Multiple channels can complicate reporting and reconciliation." },
      { icon: "globe", title: "Cross-Border Complexity", desc: "Different markets can make collections and settlement harder to manage." },
      { icon: "eye", title: "Settlement Visibility", desc: "Fragmented data makes it harder to track payment activity and settlement." },
      { icon: "refresh", title: "Refunds & Rebookings", desc: "Changes to bookings add complexity to payment operations." },
      { icon: "shield", title: "Fraud & Chargebacks", desc: "High-value payments need strong controls without unnecessary friction." },
    ],
  },
  {
    kind: "list", id: "outcomes", numbered: true,
    heading: "Better payments. Better operations.",
    intro: "Reduce payment friction and give your team better visibility across the payment operation.",
    items: [
      { icon: "check", title: "More Completed Bookings", desc: "Reduce friction between payment intent and purchase." },
      { icon: "bolt", title: "Better Payment Success", desc: "Help customers complete transactions with fewer barriers." },
      { icon: "eye", title: "Clearer Cash Visibility", desc: "See payment and settlement activity more clearly." },
      { icon: "layers", title: "Less Manual Work", desc: "Reduce complexity across fragmented payment processes." },
      { icon: "users", title: "Better Customer Experience", desc: "Make payments easier across customer channels." },
      { icon: "globe", title: "Ready for New Markets", desc: "Support payment operations as your business expands." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "More connected payment operations",
    intro: "Bring key payment capabilities into an infrastructure that supports how money moves through your business.",
    items: [
      { icon: "card", title: "Collections", desc: "Collect payments across your business and support customer transactions across relevant channels.", href: "/collections", linkLabel: "Learn more" },
      { icon: "route", title: "Payouts", desc: "Move money where it needs to go. Support outgoing payment flows across your commercial operation.", href: "/payouts", linkLabel: "Learn more" },
      { icon: "plug", title: "Payment APIs", desc: "Use API-based infrastructure where payment capabilities need to connect with your digital environment.", href: "/payment-api", linkLabel: "Learn more" },
      { icon: "clock", title: "Instant Settlement", desc: "Reduce the gap between successful transactions and visibility into available funds.", href: "/settlements", linkLabel: "Learn more" },
      { icon: "chart", title: "Analytics & Reporting", desc: "Make payment activity easier to monitor, analyse and reconcile.", href: "/analytics", linkLabel: "Learn more" },
      { icon: "globe", title: "Multi-Market Infrastructure", desc: "Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
    ],
  },
  {
    kind: "split", id: "operational-fit", icon: "route", mock: "api",
    heading: "Make payments work with the way your business already operates",
    body: [
      "Your aviation business already has its own systems, payment channels and ways of managing bookings and financial activity. Your payment setup should fit into that environment without creating unnecessary work for your team.",
    ],
    bullets: [
      "Your workflows — work around how payments already move through bookings, charter and other operations.",
      "Your payment channels — support the ways customers, agencies and partners pay.",
      "Your systems — connect payment functionality where integration is required.",
      "Your reporting — maintain visibility across payment and settlement activity.",
      "Your growth — avoid treating each new market as a separate payment setup.",
    ],
  },
  {
    kind: "list", id: "business-fit",
    heading: "Payment support for different parts of the aviation industry",
    intro: "Aviation businesses do not all collect and manage payments in the same way. Your payment setup should reflect how your business operates.",
    items: [
      { icon: "plane", title: "Airlines", desc: "Support payments across bookings, ancillary services, corporate travel and customers in different markets." },
      { icon: "bolt", title: "Charter Operators", desc: "Manage high-value payments and arrangements that may vary from one booking or customer to another." },
      { icon: "building", title: "FBOs", desc: "Support payments for aviation services, ground handling and other customer transactions." },
      { icon: "route", title: "Aircraft Management", desc: "Support payments for aviation services, ground handling and other customer transactions." },
      { icon: "shield", title: "MRO Providers", desc: "Manage high-value B2B payments connected to maintenance, repair and other aviation services." },
      { icon: "users", title: "Aviation Services", desc: "Support payments across the customers, partners and commercial channels your business works with." },
    ],
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Infrastructure you can rely on",
    intro: "Security, availability and visibility matter when payments support critical business operations.",
    items: [
      { title: "ISO 27001", desc: "Recognised information security practices for managing payment information." },
      { title: "PCI DSS Level 1", desc: "Standards designed for handling card transactions." },
      { title: "99% Uptime SLA", desc: "A defined availability commitment for the infrastructure your business depends on." },
      { title: "24/7 Monitoring", desc: "Continuous monitoring supporting the reliability of critical payment operations." },
      { title: "Encryption", desc: "Protects sensitive payment information as it moves through your processes." },
      { title: "KYC & Audit Trails", desc: "Verification and a clearer record of payment activity." },
    ],
  },
  {
    kind: "marqueeList", id: "growth",
    heading: "Built to grow with you",
    intro: "New markets, higher volumes, and changing payment needs should not require a completely new payment setup.",
    items: ["New Markets", "More Payment Needs", "Higher Volumes", "More Complexity", "Extended Operations", "Changing Requirements"],
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Let's talk about your payments",
    subtext: "Tell us how payments move through your business and where you need more support. We can discuss your channels, markets, transaction profile, settlement needs and integration environment.",
    primaryCta: { label: "Talk to Sales", href: "/sales" },
  },
];

export default function AviationPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <IndustryPage
        hero={{
          eyebrow: "Industries / Aviation",
          heading: "Payments built for aviation complexity",
          subtext: "Manage high-value, cross-border payments across your business without adding more complexity to your operation.",
          primaryCta: { label: "Talk to Sales", href: "/sales" },
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "Payment API", href: "/payment-api" },
          { label: "Payouts", href: "/payouts" },
          { label: "Security", href: "/security" },
        ]}
      />
    </>
  );
}
