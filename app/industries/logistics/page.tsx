import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock, MARKET_COUNTRIES } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Payment Gateway for Logistics & Ride-Hailing",
  description: "Collect payments, manage payouts, support settlement, and connect payment workflows to your logistics or ride-hailing platform with Payonus.",
  path: "/industries/logistics",
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
    kind: "cards", id: "reality", columns: 3, tint: true,
    heading: "Payment operations should not slow down your business",
    intro: "As your business grows, so does the movement of money around it. You are collecting from customers, managing what drivers or partners earn, tracking transactions, and moving funds through your operation. When those processes are disconnected, your teams spend more time managing payment issues instead of keeping the business moving.",
    items: [
      { icon: "card", title: "Keep Collections on Track", desc: "Customers need a straightforward way to pay for rides, deliveries, and other services." },
      { icon: "route", title: "Manage Payments to Drivers and Partners", desc: "As your network grows, moving money to the people who keep your operation running becomes another process to manage." },
      { icon: "eye", title: "Knowing Where Money Is", desc: "Teams need a clear view of what has been collected, what is being settled and what has been paid out." },
      { icon: "layers", title: "Reduce Manual Work", desc: "Disconnected payment processes can leave finance and operations teams chasing information and resolving avoidable issues." },
      { icon: "plug", title: "Platform Integration", desc: "Connect payment infrastructure to the technology and workflows you already use." },
      { icon: "scale", title: "Growing Complexity", desc: "Support increasing transaction activity without adding another disconnected payment workflow." },
    ],
  },
  {
    kind: "cards", id: "value", columns: 3,
    heading: "Move money across your operation with less friction",
    intro: "The right payment infrastructure should enable money to move across your business, not create another system for your team to manage.",
    items: [
      { icon: "card", title: "Collect More Efficiently", desc: "Give customers supported ways to complete payments through your platform." },
      { icon: "route", title: "Support Operational Payouts", desc: "Connect payouts to the workflows used to manage drivers, riders and delivery partners." },
      { icon: "eye", title: "Improve Payment Visibility", desc: "Give relevant teams clearer visibility into collections, payouts and payment activity." },
      { icon: "plug", title: "Keep Workflows Connected", desc: "Bring payment capabilities closer to the systems and processes already running your operation." },
      { icon: "refresh", title: "Support Reconciliation", desc: "Use payment information and reporting to support operational oversight and reconciliation workflows." },
      { icon: "scale", title: "Prepare for Growth", desc: "Build payment operations that can support greater transaction and operational complexity as your business expands." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "Support the payment flows behind your platform",
    intro: "Logistics and ride-hailing businesses manage different payment flows across customers, platforms, and operational partners. Your infrastructure should support those flows as part of one connected payment operation.",
    items: [
      { icon: "card", title: "Collect Payments", desc: "Support customer payment collection through Payonus collection capabilities.", href: "/collections", linkLabel: "Explore Collections" },
      { icon: "route", title: "Manage Payouts", desc: "Support payout workflows for drivers, riders, delivery partners, and other recipients.", href: "/payouts", linkLabel: "Explore Payouts" },
      { icon: "clock", title: "Support Settlement", desc: "Incorporate Payonus settlement services into your business's payment and cash-flow workflows.", href: "/settlements", linkLabel: "Explore Instant Settlement" },
      { icon: "plug", title: "Connect Through APIs", desc: "Build payment services into your existing platforms, applications, and workflows through the Payonus Payment API.", href: "/payment-api", linkLabel: "Explore the Payment API" },
      { icon: "chart", title: "Monitor Payment Activity", desc: "Use analytics and reporting capabilities to maintain visibility across payment operations.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
    ],
  },
  {
    kind: "textCta", id: "workflow-fit",
    heading: "Payment workflows that fit your business",
    copy: "Not every logistics or ride-hailing business moves money the same way. Your operation may have payment requirements that do not fit a standard setup. Work with Payonus to configure payment flows around your operational requirements, including custom collection and payment workflows where your business needs more than a standard implementation.",
    cta: { label: "Talk to Our Team", href: "/sales" },
  },
  {
    kind: "numberedSteps", id: "settlement-payout",
    heading: "Keep collections, settlement and payouts connected",
    intro: "Payment operations continue after a customer completes a transaction. Your business may also need to manage how funds are collected, settled, and directed through supported payout workflows.",
    steps: [
      { title: "Collect", desc: "Customer payments enter your payment flow." },
      { title: "Settle", desc: "Funds move through the configured settlement process." },
      { title: "Pay Out", desc: "Supported payout workflows direct funds to relevant recipients." },
    ],
  },
  {
    kind: "prose", id: "analytics", tint: true,
    heading: "See what is happening across your payment operations",
    body: [
      "As transaction activity grows, visibility becomes more important. Finance and operations teams need to understand what is happening across collections, payouts and settlement.",
      "Use Payonus analytics and reporting capabilities to support payment monitoring, operational oversight and reconciliation across transaction activity, collection activity, payout activity, settlement status, and other relevant payment reporting.",
    ],
  },
  {
    kind: "trust", id: "security",
    heading: "Built with security and compliance in mind",
    intro: "Payment infrastructure handles sensitive financial activity. Businesses therefore need appropriate controls, records, and operational safeguards around the systems supporting payment flows.",
    items: [
      { title: "ISO 27001", desc: "Information security aligned with recognised industry standards." },
      { title: "PCI DSS Level 1", desc: "Payment security aligned with PCI DSS Level 1 requirements." },
      { title: "KYC & Transaction Audit Trails", desc: "Support verification and a clearer record of payment activity." },
      { title: "End-to-End Digital Audit Trails", desc: "A digital record of payment activity across the transaction journey." },
      { title: "Encryption", desc: "Payment data is protected through encryption across the infrastructure." },
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
    kind: "cards", id: "why", columns: 3, tint: true,
    heading: "Why growing operations need flexible payment infrastructure",
    intro: "As your operation grows, payment infrastructure needs to fit the way money, technology, and operational responsibilities move across the business.",
    items: [
      { icon: "route", title: "Built Around Your Workflow", desc: "Connect payment infrastructure to the systems and processes that already run your business." },
      { icon: "card", title: "Collections and Payouts", desc: "Support both customer payment collection and relevant operational payout workflows." },
      { icon: "plug", title: "API-Based Integration", desc: "Build payment capabilities into your existing platform through the Payonus Payment API.", href: "/payment-api", linkLabel: "Explore the Payment API" },
      { icon: "scale", title: "Flexible Implementation", desc: "Explore tailored implementations where your operational requirements require a more specialised payment workflow." },
      { icon: "globe", title: "Regional Operations", desc: "Support payment infrastructure requirements across the approved Payonus markets where your business operates." },
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
