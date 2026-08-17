import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "E-commerce Payment Gateway for Africa",
  description: "Help your customers pay while managing collections, payouts, and payment operations across 8 African markets with Payonus.",
  path: "/industries/ecommerce",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "E-commerce", path: "/industries/ecommerce" },
]);

const faqs = [
  { q: "Can Payonus support businesses operating in multiple markets?", a: "Yes. Payonus operates across 8 African markets, which includes Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon. Payment availability and requirements may vary by market, so discuss your specific needs with the Payonus team." },
  { q: "Can Payonus support marketplace payment flows?", a: "Yes. Payonus can support marketplace-style flows where a business needs to collect payments and manage payouts to multiple recipients, subject to its specific requirements and approved setup." },
  { q: "Can we connect Payonus to our existing platform?", a: "Yes. Payonus provides a Payment API for integrating available payment capabilities into existing platforms and workflows. The right approach depends on your technical and business requirements." },
  { q: "Do we need to replace our existing payment setup?", a: "Not necessarily. Payonus can discuss where its payment capabilities could fit within your existing technology and payment operation." },
  { q: "What if our payment requirements are more complex?", a: "Payonus can discuss tailored implementations and payment workflows where a standard setup does not fully meet your operational requirements." },
  { q: "What happens when we talk to Payonus?", a: "The conversation focuses on your business, markets, payment flows, existing setup and technical requirements to determine whether Payonus is a suitable fit." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "cards", id: "problems", columns: 3, tint: true,
    heading: "When payments become harder to manage, your business feels it",
    intro: "Taking payments is only one part of running an online business. Failed payments can affect sales. Payouts can add more work. As transactions and markets grow, it can become harder to keep track of what is coming in, going out and waiting to be settled.",
    items: [
      { icon: "card", title: "Lost sales at checkout", desc: "When customers cannot complete a payment, a potential sale can be lost." },
      { icon: "alert", title: "Failed payments", desc: "Unsuccessful payment attempts can interrupt the buying experience and leave customers unable to complete their purchase." },
      { icon: "wallet", title: "Limited ways to pay", desc: "Customers need payment options that work for the markets where you sell." },
      { icon: "route", title: "Payout complexity", desc: "If you pay sellers, partners or other recipients, outgoing payments can add another layer to your operation." },
      { icon: "eye", title: "Harder to track payments", desc: "As transaction volumes grow, it becomes harder to see what was collected, paid out, and settled." },
      { icon: "globe", title: "Multi-market complexity", desc: "Expanding into new countries can bring different payment and operational requirements." },
    ],
    footNote: "Payment infrastructure should help you manage more of this operation, not add another disconnected system.",
  },
  {
    kind: "cards", id: "manage", columns: 3,
    heading: "Manage the payment flows behind your business",
    intro: "Payonus brings together the payment capabilities e-commerce businesses may need as they collect money, pay others, manage settlement, connect payments to their systems, and monitor payment activity.",
    items: [
      { icon: "card", title: "Collect customer payments", desc: "Help your business manage customer payments as transaction volumes grow.", href: "/collections", linkLabel: "Collections infrastructure" },
      { icon: "route", title: "Pay sellers, partners or other recipients", desc: "Manage incoming and outgoing payment activity as part of the same wider operation.", href: "/payouts", linkLabel: "Payouts infrastructure" },
      { icon: "clock", title: "Access settlement", desc: "Maintain better control over the movement of funds within your payment operation.", href: "/settlements", linkLabel: "Instant settlement" },
      { icon: "plug", title: "Connect payments to your systems", desc: "Use the Payonus Payment API to connect available payment capabilities to your existing platform and workflows.", href: "/payment-api", linkLabel: "Payment API" },
      { icon: "chart", title: "See what is happening across your payments", desc: "Make it easier to understand the transactions your business needs to manage.", href: "/analytics", linkLabel: "Analytics & reporting" },
    ],
  },
  {
    kind: "flow", id: "differentiator",
    heading: "More than a way to take payments",
    intro: "Checkout is only one part of your payment operation. Your business may also need to collect money, manage payouts, access settlement, connect payment flows to your systems and keep track of what is happening. Payonus brings these capabilities together so the conversation can focus on how your business manages payments, not only how customers pay.",
    steps: ["Customer payment", "Collections", "Settlement", "Payouts", "Reporting", "Business operations"],
  },
  {
    kind: "cards", id: "fit", columns: 3, tint: true,
    heading: "Built around the way your business operates",
    intro: "No two e-commerce businesses manage payments in exactly the same way. Your business model, customers, recipients, markets and technology all affect the payment setup you need.",
    items: [
      { icon: "bolt", title: "Growing online businesses", desc: "Build a payment setup around the collections, payouts and reporting needs that grow with your operation." },
      { icon: "scale", title: "Larger e-commerce operations", desc: "Discuss a setup around higher transaction volumes and more complex payment and operational requirements." },
      { icon: "users", title: "Marketplaces", desc: "Support marketplace-style payment flows where your business needs to collect payments and manage payouts to multiple recipients, subject to business and operational requirements." },
      { icon: "plug", title: "Your existing technology", desc: "Use the Payment API to connect available payment capabilities to your existing platform and workflows.", href: "/payment-api", linkLabel: "Payment API" },
      { icon: "globe", title: "Multi-market operations", desc: "Discuss the markets where you need payment support and the requirements relevant to your business." },
    ],
  },
  {
    kind: "textCta", id: "existing-setup",
    heading: "Already have a payment setup?",
    copy: "Your business may already have a way of collecting payments and paying people. Payonus can work around how your business already handles payments. And if your payment needs are more complex, talk to us about a setup that fits how your business works.",
    cta: { label: "Discuss Your Payment Requirements", href: "/sales" },
  },
  {
    kind: "trust", id: "trust",
    heading: "Infrastructure your payment operation can depend on",
    intro: "When payments sit at the centre of your business, you need confidence in the infrastructure supporting them.",
    items: [
      { title: "ISO 27001", desc: "Part of Payonus's information security framework." },
      { title: "PCI DSS Level 1", desc: "Supporting its payment infrastructure." },
      { title: "Encryption", desc: "Designed to protect data across the payment environment." },
      { title: "24/7 infrastructure monitoring", desc: "Supporting the reliability of the payment environment." },
      { title: "99% uptime SLA", desc: "For Payonus infrastructure." },
      { title: "KYC and transaction audit trails", desc: "Supporting visibility and accountability across payment operations." },
    ],
  },
  {
    kind: "textCta", id: "talk",
    heading: "Start with your payment operation",
    copy: "A useful conversation starts with how your business handles payments today and what you need to manage next. The Payonus team can discuss your business model, markets, collection and payout requirements, settlement needs, existing technology and integration requirements.",
    cta: { label: "Talk to Sales", href: "/sales" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Frequently Asked Questions",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Ready to discuss your payment setup?",
    subtext: "Whether you are ready to get started or need to discuss a more complex setup, Payonus can help you explore the payment capabilities and implementation approach that fit your business.",
    primaryCta: { label: "Get Started", href: "https://merchantv2.payonus.com/signup", external: true },
    secondaryCta: { label: "Talk to Sales", href: "/sales" },
  },
];

export default function EcommercePage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        hero={{
          eyebrow: "Industries / E-commerce",
          heading: "E-commerce payment gateway for businesses across Africa",
          subtext: "Help your customers pay while managing the payment flows behind your business. Payonus supports collections, payouts, settlement, integration and payment visibility across its operating markets.",
          primaryCta: { label: "Get Started", href: "https://merchantv2.payonus.com/signup", external: true },
          secondaryCta: { label: "Talk to Sales", href: "/sales" },
          geoLine: "Operating in Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon.",
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "Collections", href: "/collections" },
          { label: "Payment API", href: "/payment-api" },
          { label: "Payouts", href: "/payouts" },
        ]}
      />
    </>
  );
}
