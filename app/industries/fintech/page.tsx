import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock, MARKET_COUNTRIES } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Payment Infrastructure for Fintechs & Financial Businesses in Africa",
  description: "Secure, scalable payment infrastructure for fintechs and financial businesses across 8 African markets. Support how you collect, move, settle, and manage payments with Payonus.",
  path: "/industries/fintech",
  alternatePath: "/fr/industries/fintech",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Fintech", path: "/industries/fintech" },
]);

const faqs = [
  { q: "Can Payonus support a business like ours?", a: "Payonus can support different financial-service business models, including fintechs, PSPs, lending businesses, remittance companies, wallet and payment businesses. The relevant setup depends on your payment workflows and requirements." },
  { q: "Can Payonus work with our existing systems?", a: "Yes. Payonus provides a Payment API that can connect relevant payment capabilities with existing platforms and workflows." },
  { q: "What payment capabilities does Payonus provide?", a: "Collection, Payout, Instant Settlement, Payment API, and Analytics & Reporting." },
  { q: "Can we track payment activity?", a: "Yes. Analytics & Reporting provides visibility into payment activity and transaction performance." },
  { q: "How does Payonus support security?", a: "Payonus maintains ISO 27001 and PCI DSS Level 1, uses encryption, and applies KYC processes and transaction audit trails." },
  { q: "Does Payonus monitor its infrastructure?", a: "Yes. Payonus provides 24/7 infrastructure monitoring and maintains a 99% uptime SLA." },
  { q: "Can Payonus support our business as we grow?", a: "Payonus capabilities can be considered around changing payment, technical and operational requirements as your business grows." },
  { q: "Can we speak to someone before deciding?", a: "Yes. You can discuss your payment workflows, integration requirements and operational needs with the Payonus team to determine whether there is a suitable fit." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "stats", id: "stats", tint: false,
    items: [
      { value: "8", label: "African markets" },
      { value: "99%", label: "Uptime SLA" },
      { value: "24/7", label: "Infrastructure monitoring" },
    ],
  },
  {
    kind: "list", id: "recognition",
    heading: "Built for the way financial businesses move money",
    intro: "Whether you are building a fintech product, running payment services, lending to customers or moving money across markets, payments sit at the centre of how your business works. Banks are an important part of the wider payment ecosystem — Payonus provides payment infrastructure for businesses operating within it.",
    items: [
      { icon: "bolt", title: "Fintechs", desc: "Build payment capabilities into the products and experiences your customers use." },
      { icon: "link", title: "Payment Service Providers", desc: "Support the payment flows involved in helping merchants and businesses accept and move money." },
      { icon: "wallet", title: "Lending Businesses", desc: "Manage the payment flows involved in collecting repayments and sending funds to borrowers." },
      { icon: "globe", title: "Remittance Companies", desc: "Support the payment activity involved in receiving and moving funds across customer journeys." },
      { icon: "card", title: "Wallet & Payment Businesses", desc: "Connect payment infrastructure to the way users fund, use and move money through your platform." },
      { icon: "layers", title: "Other Financial-Service Businesses", desc: "Explore payment capabilities based on the way your business collects, moves, settles and manages funds." },
    ],
  },
  {
    kind: "bento", id: "challenges", leadMock: "fatima",
    heading: "When payments become harder to manage, the rest of the business feels it",
    intro: "As a financial business grows, more customers, transactions, products and markets can create more payment complexity — without creating more friction for customers or more manual work for your team.",
    items: [
      { icon: "card", title: "Make it easier for customers and users to pay", desc: "Reliable ways to collect funds without unnecessary friction in the customer journey." },
      { icon: "route", title: "Move money without more operational work", desc: "Paying customers, users, merchants or partners can become harder when payout workflows are fragmented." },
      { icon: "clock", title: "Know when funds are available", desc: "Settlement timing and visibility can affect cash flow, reconciliation and day-to-day operations." },
      { icon: "layers", title: "Stop managing payments across disconnected systems", desc: "Separate systems mean more time managing integrations and reconciling activity." },
      { icon: "eye", title: "See what is happening across your payments", desc: "Spread-out payment data makes it harder to get a clear picture of activity." },
      { icon: "globe", title: "Expand without unnecessary complexity", desc: "New markets can introduce different payment environments and operational requirements." },
      { icon: "shield", title: "Security and accountability", desc: "Growing payment activity needs infrastructure that supports security and monitoring." },
    ],
  },
  {
    kind: "quote", id: "quote",
    text: "You should not have to rebuild your business around your payment infrastructure.",
  },
  {
    kind: "list", id: "help",
    heading: "Infrastructure built around what your payment operations need to do",
    intro: "Payonus brings together payment capabilities that can support how your business accepts money, moves funds, manages settlement, and monitors payment activity.",
    items: [
      { icon: "card", title: "Help customers and users pay with less friction", desc: "Connect payment collection workflows to the products and experiences your customers already use.", href: "/collections", linkLabel: "Explore Collection" },
      { icon: "route", title: "Move money where it needs to go", desc: "Support payment flows that send funds to customers, users, merchants, partners, or other recipients.", href: "/payouts", linkLabel: "Explore Payout" },
      { icon: "clock", title: "Get faster access to settled funds where it matters", desc: "Support payment operations where settlement speed and access to settled funds affect how the business manages its operations.", href: "/settlements", linkLabel: "Explore Instant Settlement" },
      { icon: "plug", title: "Build payments into your product instead of around it", desc: "Connect payment capabilities to the products, platforms and workflows your business already operates.", href: "/payment-api", linkLabel: "Explore Payment API" },
      { icon: "chart", title: "See what is happening without piecing data together manually", desc: "Get visibility into payment activity and transaction performance to support operational decisions.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
    ],
  },
  {
    kind: "numberedSteps", id: "technical-fit",
    heading: "Payment infrastructure that can fit into your existing environment",
    intro: "Payonus can be considered around your existing products, systems, workflows, and payment requirements.",
    steps: [
      { title: "Connect through the Payment API", desc: "Integrate relevant Payonus payment capabilities into your existing platforms and workflows.", href: "/payment-api", linkLabel: "Explore Payment API" },
      { title: "Bring related payment workflows closer together", desc: "Collections, payouts, settlement and reporting can support a more connected payment environment." },
      { title: "Start with the requirements of your business", desc: "The relevant setup depends on your payment flows, technical environment and operational needs." },
      { title: "Keep track of payment activity", desc: "Use Analytics & Reporting to monitor payment activity and transaction performance.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
      { title: "Evaluate Payonus as you expand", desc: "Payonus operates across 8 African markets and can be evaluated as your requirements grow." },
    ],
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Built for secure, accountable payment operations",
    intro: "Payment infrastructure is a critical part of a financial business. Security, monitoring, and accountability matter alongside payment functionality.",
    items: [
      { title: "ISO 27001", desc: "Part of Payonus's information security framework." },
      { title: "PCI DSS Level 1", desc: "Compliance for payment security." },
      { title: "Encryption", desc: "Protects payment data across the infrastructure." },
      { title: "KYC & Transaction Audit Trails", desc: "Visibility and accountability across payment activity." },
      { title: "24/7 Infrastructure Monitoring", desc: "Supporting reliable payment operations." },
      { title: "99% Uptime SLA", desc: "A defined availability commitment." },
    ],
  },
  {
    kind: "numberedSteps", id: "implementation",
    heading: "Start with your payment environment",
    intro: "The right setup depends on how your business already operates. The process starts with understanding what you need before determining how Payonus can fit.",
    steps: [
      { title: "Understand your payment requirements", desc: "Discuss your payment model, workflows, operational needs and existing payment environment." },
      { title: "Review your technical environment", desc: "Identify the systems, APIs and workflows that may need to connect." },
      { title: "Determine the relevant setup", desc: "Identify which Payonus capabilities are relevant to your requirements." },
      { title: "Connect the relevant capabilities", desc: "Integrate through the appropriate technical workflow, including the Payment API where applicable.", href: "/docs", linkLabel: "Explore Developer Documentation" },
      { title: "Support the transition", desc: "Work with the Payonus team around the technical and operational requirements of implementation." },
    ],
  },
  {
    kind: "list", id: "outcomes", numbered: true,
    heading: "Spend less time working around payments and more time building the business",
    intro: "The value of payment infrastructure is what it allows your business to do with less friction and complexity.",
    items: [
      { icon: "route", title: "Keep payment operations moving", desc: "Support collection, payout and settlement workflows that fit the needs of your business." },
      { icon: "card", title: "Reduce friction in payment journeys", desc: "Create more connected payment experiences for customers, users and other recipients." },
      { icon: "layers", title: "Reduce unnecessary operational complexity", desc: "Bring relevant payment capabilities into a more coordinated environment." },
      { icon: "eye", title: "Get clearer visibility into payment activity", desc: "Use Analytics & Reporting to understand payment activity and support operational decisions.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
      { icon: "globe", title: "Support growth across markets", desc: "Evaluate Payonus across its 8 current African markets as your payment requirements expand." },
      { icon: "plug", title: "Modernise how payments fit into your product", desc: "Connect payment capabilities to existing products and workflows through API-based infrastructure." },
      { icon: "scale", title: "Support changing business requirements", desc: "Consider payment capabilities around changing customer, product and operational needs." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3,
    heading: "The payment infrastructure behind your operations",
    intro: "Different financial businesses have different payment needs. Payonus brings together the infrastructure that can support how your business accepts money, moves funds, manages settlement, and keeps track of payment activity.",
    items: [
      { icon: "card", title: "Collection", desc: "Support the way your business accepts and manages incoming payments.", href: "/collections", linkLabel: "Explore Collection" },
      { icon: "route", title: "Payout", desc: "Move funds to customers, users, merchants, partners and other recipients.", href: "/payouts", linkLabel: "Explore Payout" },
      { icon: "clock", title: "Instant Settlement", desc: "Support payment operations where faster settlement matters.", href: "/settlements", linkLabel: "Explore Instant Settlement" },
      { icon: "plug", title: "Payment API", desc: "Connect payment capabilities to your existing products, platforms and workflows.", href: "/payment-api", linkLabel: "Explore Payment API" },
      { icon: "chart", title: "Analytics & Reporting", desc: "Get visibility into payment activity and transaction performance.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
    ],
  },
  {
    kind: "markets", id: "markets",
    heading: "Support your payment operations across 8 African markets",
    intro: "Payonus currently operates across:",
    countries: MARKET_COUNTRIES,
    ctaLabel: "Discuss your market requirements with a Payments Specialist",
    ctaHref: "/sales",
  },
  {
    kind: "faq", id: "faq",
    heading: "Frequently asked questions",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Let's see whether Payonus fits your payment operations",
    subtext: "Tell us how your business accepts, moves and manages money. We'll discuss your payment environment, integration requirements and the capabilities that may be relevant to your business.",
    primaryCta: { label: "Talk to a Payments Specialist", href: "/sales" },
  },
];

export default function FintechPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Fintech"
        hero={{
          eyebrow: "Industries / Fintech",
          heading: "Payment infrastructure for financial businesses across Africa",
          subtext: "Make it easier to accept payments, move money, manage settlement and stay on top of payment activity with infrastructure built to support financial businesses across 8 African markets.",
          primaryCta: { label: "Contact Sales", href: "/sales" },
          trustLine: "ISO 27001 · PCI DSS Level 1 · 99% uptime SLA",
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
