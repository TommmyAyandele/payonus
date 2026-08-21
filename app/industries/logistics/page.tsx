import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock, MARKET_COUNTRIES } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Payment Gateway for Logistics & Ride-Hailing",
  description: "Collect payments, manage payouts, support settlement, and connect payment workflows to your logistics or ride-hailing platform with Payonus.",
  path: "/industries/logistics",
  alternatePath: "/fr/industries/logistics",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Logistics & Ride-Hailing", path: "/industries/logistics" },
]);

const faqs = [
  { q: "Can Payonus support logistics and ride-hailing payment workflows?", a: "Yes. Payonus provides Collection, Payout, Payment API, Analytics, and relevant settlement capabilities that can support payment flows across logistics and ride-hailing operations. The appropriate setup depends on how your business collects, settles, and pays out funds." },
  { q: "Can we collect customer payments and manage payouts through Payonus?", a: "Payonus supports both customer collection capabilities and supported payout workflows. This can help businesses manage different parts of the payment operation through connected infrastructure. The appropriate workflow depends on your operational and market requirements." },
  { q: "Can Payonus integrate with our existing platform?", a: "Yes. Organisations can use the Payonus Payment API to connect payment infrastructure with their existing platforms and relevant workflows. The integration approach depends on your systems, payment flows and technical requirements." },
  { q: "Can Payonus support custom payment workflows?", a: "Yes. Payonus can work with organisations on tailored payment implementations based on their operational requirements. These are custom implementations rather than standard out-of-the-box products, so the right approach depends on the workflow you need to support." },
  { q: "Can Payonus support payouts to drivers or delivery partners?", a: "Yes. Payonus provides payout capabilities that can support relevant operational payment workflows, including payments to drivers, riders, delivery partners, and other recipients. The appropriate implementation depends on your business structure and payment requirements." },
  { q: "Will Payonus require us to replace our existing systems?", a: "The objective is to connect payment infrastructure to the systems and workflows your business already uses. The Payonus Payment API can support integration into relevant technology environments, with the specific approach determined by your existing setup and requirements." },
];
const faqSchema = faqJsonLd(faqs);

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
    kind: "bento", id: "reality", leadMock: "halima",
    heading: "Payment operations should not slow down your business",
    intro: "You are collecting from customers, managing what drivers or partners earn, tracking transactions, and moving funds through your operation. Disconnected processes mean more time managing payment issues instead of keeping the business moving.",
    items: [
      { icon: "card", title: "Keep Collections on Track", desc: "A straightforward way for customers to pay for rides, deliveries, and other services." },
      { icon: "route", title: "Manage Payments to Drivers and Partners", desc: "Moving money to the people who keep your operation running." },
      { icon: "eye", title: "Knowing Where Money Is", desc: "A clear view of what has been collected, settled and paid out." },
      { icon: "layers", title: "Reduce Manual Work", desc: "Disconnected processes leave teams chasing information." },
      { icon: "plug", title: "Platform Integration", desc: "Connect payment infrastructure to the technology you already use." },
      { icon: "scale", title: "Growing Complexity", desc: "Support increasing activity without another disconnected workflow." },
    ],
  },
  {
    kind: "list", id: "value",
    heading: "Move money across your operation with less friction",
    intro: "The right payment infrastructure should enable money to move across your business, not create another system for your team to manage.",
    items: [
      { icon: "card", title: "Collect More Efficiently", desc: "Give customers supported ways to complete payments through your platform." },
      { icon: "route", title: "Support Operational Payouts", desc: "Connect payouts to the workflows used to manage drivers, riders and delivery partners." },
      { icon: "eye", title: "Improve Payment Visibility", desc: "Give relevant teams clearer visibility into collections, payouts and payment activity." },
      { icon: "plug", title: "Keep Workflows Connected", desc: "Bring payment capabilities closer to the systems already running your operation." },
      { icon: "refresh", title: "Support Reconciliation", desc: "Use payment information and reporting for operational oversight." },
      { icon: "scale", title: "Prepare for Growth", desc: "Support greater transaction and operational complexity as you expand." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "Support the payment flows behind your platform",
    intro: "Logistics and ride-hailing businesses manage different payment flows across customers, platforms, and operational partners.",
    items: [
      { icon: "card", title: "Collect Payments", desc: "Support customer payment collection through Payonus collection capabilities.", href: "/collections", linkLabel: "Explore Collections" },
      { icon: "route", title: "Manage Payouts", desc: "Support payout workflows for drivers, riders, delivery partners, and other recipients.", href: "/payouts", linkLabel: "Explore Payouts" },
      { icon: "clock", title: "Support Settlement", desc: "Incorporate settlement services into your payment and cash-flow workflows.", href: "/settlements", linkLabel: "Explore Instant Settlement" },
      { icon: "plug", title: "Connect Through APIs", desc: "Build payment services into your existing platforms and workflows.", href: "/payment-api", linkLabel: "Explore the Payment API" },
      { icon: "chart", title: "Monitor Payment Activity", desc: "Use analytics and reporting capabilities to maintain visibility.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
    ],
  },
  {
    kind: "textCta", id: "workflow-fit",
    heading: "Payment workflows that fit your business",
    copy: "Not every logistics or ride-hailing business moves money the same way. Work with Payonus to configure payment flows around your operational requirements, including custom collection and payment workflows.",
    cta: { label: "Talk to Our Team", href: "/sales" },
  },
  {
    kind: "numberedSteps", id: "settlement-payout", split: true, mock: "kwame",
    heading: "Keep collections, settlement and payouts connected",
    intro: "Payment operations continue after a customer completes a transaction.",
    steps: [
      { title: "Collect", desc: "Customer payments enter your payment flow." },
      { title: "Settle", desc: "Funds move through the configured settlement process." },
      { title: "Pay Out", desc: "Supported payout workflows direct funds to relevant recipients." },
    ],
  },
  {
    kind: "split", id: "analytics", icon: "chart", mock: "fatima", reverse: true,
    heading: "See what is happening across your payment operations",
    body: [
      "As transaction activity grows, visibility becomes more important. Finance and operations teams need to understand what is happening across collections, payouts and settlement.",
      "Use Payonus analytics and reporting capabilities to support payment monitoring, operational oversight and reconciliation across transaction activity, collection activity, payout activity and settlement status.",
    ],
  },
  {
    kind: "trust", id: "security",
    heading: "Built with security and compliance in mind",
    intro: "Payment infrastructure handles sensitive financial activity. Businesses need appropriate controls, records, and operational safeguards.",
    items: [
      { title: "ISO 27001", desc: "Information security aligned with recognised industry standards." },
      { title: "PCI DSS Level 1", desc: "Payment security aligned with PCI DSS Level 1 requirements." },
      { title: "KYC & Transaction Audit Trails", desc: "Support verification and a clearer record of payment activity." },
      { title: "End-to-End Digital Audit Trails", desc: "A digital record of payment activity across the transaction journey." },
      { title: "Encryption", desc: "Payment data is protected across the infrastructure." },
      { title: "24/7 Infrastructure Monitoring", desc: "Continuous monitoring supports reliable payment operations." },
      { title: "99% Uptime SLA", desc: "Supporting the reliability and continuity of critical payment activity." },
    ],
  },
  {
    kind: "markets", id: "markets",
    heading: "Support operations across key African markets",
    intro: "Payonus operates across 8 African markets, supporting organisations with payment infrastructure across their regional operations.",
    countries: MARKET_COUNTRIES,
  },
  {
    kind: "showcase", id: "why",
    heading: "Why growing operations need flexible payment infrastructure",
    intro: "As your operation grows, payment infrastructure needs to fit the way money, technology, and operational responsibilities move across the business.",
    items: [
      { icon: "route", title: "Built Around Your Workflow", desc: "Connect infrastructure to the systems that already run your business.", illustration: "kwame" },
      { icon: "card", title: "Collections and Payouts", desc: "Support both customer collection and operational payout workflows.", illustration: "cardTap" },
      { icon: "plug", title: "API-Based Integration", desc: "Build payment capabilities into your existing platform.", illustration: "yusuf" },
      { icon: "scale", title: "Flexible Implementation", desc: "Tailored implementations for specialised payment workflows.", illustration: "tobi" },
      { icon: "globe", title: "Regional Operations", desc: "Support requirements across the approved Payonus markets.", illustration: "aisha" },
    ],
  },
  {
    kind: "cta", id: "decision",
    heading: "Ready to build a payment operation that fits your business?",
    subtext: "Tell us how your business collects payments, manages settlement and handles payouts. We can look at your platform, payment flows and operational requirements to determine where Payonus may fit.",
    primaryCta: { label: "Talk to Sales", href: "/sales" },
    secondaryCta: { label: "Explore the Payonus Payment API", href: "/payment-api" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Frequently Asked Questions",
    items: faqs,
  },
  {
    kind: "textCta", id: "faq-transition",
    heading: "Ready to look at your payment operation?",
    copy: "Talk with the Payonus team about how money moves through your business, from customer collection to settlement and payout.",
    cta: { label: "Talk to Sales", href: "/sales" },
  },
];

export default function LogisticsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Logistics & Ride-Hailing"
        hero={{
          eyebrow: "Industries / Logistics & Ride-Hailing",
          heading: "Payment infrastructure for logistics & ride-hailing businesses",
          subtext: "Collect customer payments, manage operational payouts and keep settlement connected to the systems that run your business.",
          primaryCta: { label: "Talk to Sales", href: "/sales" },
          secondaryCta: { label: "Explore the Payonus Payment API", href: "/payment-api" },
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
