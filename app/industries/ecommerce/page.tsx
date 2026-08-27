import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "E-commerce Payment Gateway for Africa",
  description: "Help your customers pay while managing collections, payouts, and payment operations across 8 African markets with Payonus.",
  path: "/industries/ecommerce",
  alternatePath: "/fr/industries/ecommerce",
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
    kind: "stats", id: "stats",
    items: [
      { value: "8", label: "African markets" },
      { value: "99%", label: "Uptime SLA" },
      { value: "24/7", label: "Infrastructure monitoring" },
    ],
  },
  {
    kind: "bento", id: "problems", leadMock: "aduke",
    heading: "When payments become harder to manage, your business feels it",
    intro: "Taking payments is only one part of running an online business. As transactions and markets grow, it can become harder to keep track of what is coming in, going out and waiting to be settled.",
    items: [
      { icon: "card", title: "Lost sales at checkout", desc: "When customers cannot complete a payment, a potential sale can be lost." },
      { icon: "alert", title: "Failed payments", desc: "Unsuccessful attempts can interrupt the buying experience." },
      { icon: "wallet", title: "Limited ways to pay", desc: "Customers need payment options that work for the markets where you sell." },
      { icon: "route", title: "Payout complexity", desc: "Paying sellers, partners or other recipients adds another layer to your operation." },
      { icon: "eye", title: "Harder to track payments", desc: "As volumes grow, it becomes harder to see what was collected, paid out, and settled." },
      { icon: "globe", title: "Multi-market complexity", desc: "New countries can bring different payment and operational requirements." },
    ],
  },
  {
    kind: "list", id: "manage",
    heading: "Manage the payment flows behind your business",
    intro: "Payonus brings together the payment capabilities e-commerce businesses may need as they collect money, pay others, manage settlement, connect payments to their systems, and monitor payment activity.",
    items: [
      { icon: "card", title: "Collect customer payments", desc: "Help your business manage customer payments as transaction volumes grow.", href: "/collections", linkLabel: "Collections infrastructure" },
      { icon: "route", title: "Pay sellers, partners or other recipients", desc: "Manage incoming and outgoing payment activity as part of the same wider operation.", href: "/payouts", linkLabel: "Payouts infrastructure" },
      { icon: "clock", title: "Access settlement", desc: "Maintain better control over the movement of funds within your payment operation.", href: "/settlements", linkLabel: "Instant settlement" },
      { icon: "plug", title: "Connect payments to your systems", desc: "Use the Payonus Payment API to connect available payment capabilities to your existing platform and workflows.", href: "/payment-api", linkLabel: "Payment API" },
      { icon: "chart", title: "See what is happening across your payments", desc: "Make it easier to understand the transactions your business needs to manage.", href: "/analytics", linkLabel: "Analytics & reporting" },
      { icon: "link", title: "Connect through developer documentation", desc: "Explore technical documentation to help your team integrate and connect Payonus payment capabilities.", href: "/docs", linkLabel: "Explore Developer Documentation" },
    ],
  },
  {
    kind: "flow", id: "differentiator",
    heading: "More than a way to take payments",
    intro: "Checkout is only one part of your payment operation. Payonus brings these capabilities together so the conversation can focus on how your business manages payments — not only how customers pay.",
    steps: ["Customer payment", "Collections", "Settlement", "Payouts", "Reporting", "Business operations"],
  },
  {
    kind: "quote", id: "quote",
    text: "Taking payments is only one part of running an e-commerce business.",
  },
  {
    kind: "showcase", id: "fit",
    heading: "Built around the way your business operates",
    intro: "No two e-commerce businesses manage payments in exactly the same way. Your business model, customers, recipients, markets and technology all affect the setup you need.",
    items: [
      { icon: "bolt", title: "Growing online businesses", desc: "A setup around the collections, payouts and reporting needs that grow with you.", illustration: "amara" },
      { icon: "scale", title: "Larger operations", desc: "Higher transaction volumes and more complex requirements.", illustration: "tunde" },
      { icon: "users", title: "Marketplaces", desc: "Collect payments and manage payouts to multiple recipients.", illustration: "zainab" },
      { icon: "plug", title: "Your existing technology", desc: "Connect via the Payment API to your existing platform.", illustration: "yusuf" },
      { icon: "globe", title: "Multi-market operations", desc: "The markets where you need payment support.", illustration: "aisha" },
    ],
  },
  {
    kind: "textCta", id: "existing-setup",
    heading: "Already have a payment setup?",
    copy: "Payonus can work around how your business already handles payments. And if your payment needs are more complex, talk to us about a setup that fits how your business works.",
    cta: { label: "Discuss Your Payment Requirements", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
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
    copy: "A useful conversation starts with how your business handles payments today and what you need to manage next.",
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
        industryName="E-commerce"
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
