import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Forex Payment Gateway for Africa",
  description: "Help traders fund accounts and withdraw funds with payment infrastructure for Forex and trading businesses across African markets.",
  path: "/industries/forex",
  alternatePath: "/fr/industries/forex",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Forex", path: "/industries/forex" },
]);

const faqs = [
  { q: "Does Payonus support Forex businesses?", a: "Payonus supports approved Forex and trading businesses based on their business, market and payment requirements. Speak with our team to discuss whether your business is a suitable fit." },
  { q: "Which countries does Payonus operate in?", a: "Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
  { q: "Can we use Payonus for deposits and withdrawals?", a: "Payonus provides collection and payout services that can support deposit and withdrawal flows, depending on your business, markets and approved payment setup." },
  { q: "Can Payonus integrate with our trading platform?", a: "Yes. Payonus can support approved integrations through its payment API. The right approach depends on your business and technical requirements." },
  { q: "Can Payonus support a custom payment workflow?", a: "Yes. Payonus can discuss tailored payment workflows where your business needs more than a standard setup." },
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
    kind: "bento", id: "challenges", leadMock: "obi",
    heading: "When payments slow down, trading operations feel it",
    intro: "A failed deposit can stop a trader from funding an account. A delayed withdrawal can damage confidence and create more work for your support team.",
    items: [
      { icon: "alert", title: "Failed deposits", desc: "Payment friction can interrupt trading activity and affect the trader's experience." },
      { icon: "clock", title: "Delayed withdrawals", desc: "Delays can create frustration and put pressure on your support and operations teams." },
      { icon: "globe", title: "Different markets, different requirements", desc: "New countries can mean different payment methods and local requirements." },
      { icon: "refresh", title: "Payment disruptions", desc: "Traders and internal teams are often first to feel the impact of unreliable payments." },
      { icon: "eye", title: "Limited payment visibility", desc: "Finding problems and managing operations becomes harder without visibility." },
      { icon: "layers", title: "More to manage as you grow", desc: "Growing volumes can make processes harder to keep under control." },
    ],
  },
  {
    kind: "list", id: "how-we-help",
    heading: "Give your traders a better payment experience",
    intro: "From funding accounts to processing withdrawals, Payonus helps trading businesses handle the payment activity that keeps their customers and operations moving.",
    items: [
      { icon: "card", title: "Help traders fund their accounts", desc: "Support account deposits and make it easier for customers to get money into their trading accounts.", href: "/collections", linkLabel: "Collections" },
      { icon: "route", title: "Handle withdrawals with less friction", desc: "Support the movement of funds to customers when they withdraw from their accounts.", href: "/payouts", linkLabel: "Payout" },
      { icon: "plug", title: "Connect payments to your trading platform", desc: "Integrate Payonus with your existing platform through the appropriate payment API.", href: "/payment-api", linkLabel: "Payment API" },
      { icon: "clock", title: "Keep your business moving between payment and settlement", desc: "Manage settlement as part of your wider payment operation.", href: "/settlements", linkLabel: "Instant Settlement" },
      { icon: "chart", title: "See what is happening across your payments", desc: "Use transaction data and reporting to monitor payment activity.", href: "/analytics", linkLabel: "Analytics & Reporting" },
    ],
  },
  {
    kind: "split", id: "differentiation", icon: "layers", mock: "amina", reverse: true,
    heading: "More than a way to accept payments",
    body: [
      "Your payment operation does not begin and end when a trader makes a deposit. You also need to handle withdrawals, manage settlement, understand what is happening across transactions and connect payments to the systems your business already uses.",
      "Payonus brings these parts of your payment operation closer together, so you can evaluate one payment partner around the wider way your trading business needs to move and manage money.",
    ],
  },
  {
    kind: "showcase", id: "business-fit",
    heading: "Built around the way your business operates",
    intro: "Your payment setup needs to work with your markets, the way traders fund and withdraw from accounts, and the systems your business already uses.",
    items: [
      { icon: "globe", title: "Your markets", desc: "Where you need to accept and move money.", illustration: "aisha" },
      { icon: "route", title: "How money moves", desc: "Deposits, withdrawals and other payment activity.", illustration: "amara" },
      { icon: "plug", title: "Your platform", desc: "Connect through the appropriate integration approach.", illustration: "yusuf" },
      { icon: "eye", title: "Your visibility", desc: "Monitor what is happening across payment activity.", illustration: "amina" },
      { icon: "scale", title: "Your growth", desc: "A setup that supports changing business requirements.", illustration: "tunde" },
    ],
  },
  {
    kind: "textCta", id: "custom-workflow",
    heading: "Need a payment setup built around your workflow?",
    copy: "Some trading businesses need more than a standard payment setup. Talk to Payonus about configuring payment workflows around the way your business collects, moves and manages money.",
    cta: { label: "Talk to Our Team", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Infrastructure supporting payments at scale",
    intro: "Before choosing a payment partner, you need confidence that the infrastructure behind it can support serious payment operations.",
    items: [
      { title: "ISO 27001", desc: "Information security aligned with recognised industry standards." },
      { title: "PCI DSS Level 1", desc: "Payment security aligned with PCI DSS Level 1 requirements." },
      { title: "Encryption", desc: "Payment data is protected across the infrastructure." },
      { title: "KYC & Audit Trails", desc: "Greater visibility and accountability across payment activity." },
      { title: "24/7 Monitoring", desc: "Infrastructure monitoring supports reliable operations around the clock." },
      { title: "99% Uptime SLA", desc: "Supporting reliable payment operations." },
    ],
  },
  {
    kind: "textCta", id: "qualification",
    heading: "Start with the requirements of your business",
    copy: "Forex and trading businesses can have different market, business and payment requirements. Start by discussing how your business operates and what your setup needs to handle.",
    cta: { label: "Speak with a Payments Specialist", href: "/sales" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Frequently Asked Questions",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Ready to discuss your payment requirements?",
    subtext: "Talk to the Payonus team about where you operate, how traders fund and withdraw from their accounts, and what your payment setup needs to handle.",
    primaryCta: { label: "Talk to Sales", href: "/sales" },
  },
];

export default function ForexPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Forex"
        hero={{
          eyebrow: "Industries / Forex",
          heading: "Forex payment gateway for trading businesses across Africa",
          subtext: "Help traders fund their accounts and withdraw their money without unnecessary payment friction. Payonus supports Forex and trading businesses with payment infrastructure for the deposits, withdrawals and payment operations that keep trading moving.",
          primaryCta: { label: "Talk to Sales", href: "/sales" },
          geoLine: "Operating in Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon.",
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "Payment API", href: "/payment-api" },
          { label: "Payouts", href: "/payouts" },
          { label: "Security", href: "/security" },
          { label: "Forex Provider Checklist", href: "/resources/forex" },
        ]}
      />
    </>
  );
}
