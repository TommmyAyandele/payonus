import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Gaming Payment Gateway for Businesses in Africa",
  description: "Support gaming collections, payouts, and faster settlement across African markets with payment infrastructure built for high-frequency payment flows.",
  path: "/industries/gaming",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Gaming", path: "/industries/gaming" },
]);

const faqs = [
  { q: "What types of gaming businesses can Payonus support?", a: "Payonus can support businesses across the gaming ecosystem, including sports betting, casinos, lotteries, fantasy sports, esports, and other relevant gaming platforms." },
  { q: "Can Payonus support high-frequency gaming payments?", a: "Yes. Payonus is designed to support high-frequency payment flows, including gaming collections and payouts, with faster settlement capabilities." },
  { q: "Can Payonus support businesses operating across African markets?", a: "Payonus operates across Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
  { q: "Can we integrate Payonus with our existing platform?", a: "Yes. Payonus can be integrated into existing platforms and payment workflows through the Payment API." },
  { q: "Can Payonus support payment workflows with specific business requirements?", a: "Yes. Where a standard setup does not fully meet a business's operational requirements, Payonus can support tailored payment workflows." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "prose", id: "relevance",
    heading: "Built around the way gaming businesses operate",
    body: [
      "Gaming businesses handle a constant flow of money. Players need to deposit funds, withdraw winnings and complete transactions without unnecessary delays. As payment volumes grow, keeping those flows reliable becomes critical to the customer experience and day-to-day operations.",
      "Sports betting · Casinos · Lotteries · Fantasy sports · Esports · Gaming platforms",
      "Whether you run a sportsbook, casino, lottery, fantasy sports platform, or another gaming business, your payment setup needs to keep up with the pace of your operation.",
    ],
  },
  {
    kind: "cards", id: "challenges", columns: 3, tint: true,
    heading: "When payments slow down, the business feels it",
    intro: "A payment problem does more than affect a transaction. Failed deposits can interrupt play. Delayed withdrawals can frustrate customers. Slow settlement can affect cash flow. And as payment volumes increase, it becomes harder to see what is happening across the operation.",
    items: [
      { icon: "alert", title: "Failed or interrupted deposits", desc: "When players cannot complete deposits smoothly, it can disrupt their experience and affect the flow of payments into the business." },
      { icon: "route", title: "Frequent withdrawal requests", desc: "Gaming businesses need payout processes that can keep up when customers expect to access their funds." },
      { icon: "clock", title: "Slow settlement", desc: "Long settlement cycles can delay access to funds and make day-to-day cash flow harder to manage." },
      { icon: "eye", title: "Limited payment visibility", desc: "When payment activity becomes harder to track, resolving issues and understanding performance can take more time." },
      { icon: "globe", title: "More complexity across markets", desc: "Operating in multiple markets can introduce different payment and operational requirements that need to work together." },
      { icon: "layers", title: "Growing payment volumes", desc: "As transaction volumes increase, payment processes need to keep up without creating more work for the team." },
    ],
  },
  {
    kind: "cards", id: "help", columns: 2,
    heading: "Keep the payment side of your operation moving",
    intro: "Payonus brings together the payment capabilities gaming businesses need to collect money, make payouts, manage settlement and understand what is happening across their payment activity.",
    items: [
      { icon: "card", title: "Keep deposits moving", desc: "Help customers fund their accounts through payment infrastructure built to support high-frequency transactions.", href: "/collections", linkLabel: "Collection" },
      { icon: "route", title: "Handle withdrawals at the pace of your business", desc: "Support frequent customer withdrawals with payout capabilities built for businesses that move money regularly.", href: "/payouts", linkLabel: "Payout" },
      { icon: "clock", title: "Get access to settled funds faster", desc: "Support high-frequency deposits and withdrawals with faster settlement designed around the pace of gaming payments.", href: "/settlements", linkLabel: "Instant Settlement" },
      { icon: "chart", title: "See what is happening across your payments", desc: "Use analytics and reporting to monitor transaction activity and understand payment performance across your operation.", href: "/analytics", linkLabel: "Analytics & Reporting" },
    ],
  },
  {
    kind: "prose", id: "differentiation", tint: true,
    heading: "Built for the pace of gaming payments",
    body: [
      "Gaming payments do not stop at checkout. Deposits and withdrawals can happen throughout the day, often at high volume. Payonus supports these high-frequency payment flows with faster settlement to help businesses keep money moving as their operations grow.",
      "From collecting payments and making payouts to settlement and payment visibility, Payonus gives gaming businesses connected payment capabilities without treating every part of the payment journey as a separate problem.",
    ],
  },
  {
    kind: "cards", id: "why", columns: 2,
    heading: "A payment setup that can keep up with your operation",
    items: [
      { icon: "gauge", title: "Built for frequent payment activity", desc: "Supports the regular deposits and withdrawals that are part of everyday gaming operations." },
      { icon: "clock", title: "Faster settlement", desc: "Keep funds moving more efficiently after payment activity, helping your business manage cash flow and operations." },
      { icon: "globe", title: "Built for African markets", desc: "Support payment operations across Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
      { icon: "plug", title: "Flexible around your payment workflows", desc: "Use API-based integrations or tailored implementations where your business has specific operational requirements." },
    ],
  },
  {
    kind: "cards", id: "business-fit", columns: 2, tint: true,
    heading: "Payment workflows that fit your business",
    intro: "Your payment setup should work with the way your business operates. Payonus can connect with existing platforms through its Payment API and support tailored payment workflows where your requirements go beyond a standard setup.",
    items: [
      { icon: "plug", title: "Connect with your existing platform", desc: "Integrate Payonus into your existing platform and payment workflows through the Payment API.", href: "/payment-api", linkLabel: "Payment API" },
      { icon: "scale", title: "Support your business as it grows", desc: "Whether you are managing a smaller operation or handling growing transaction volumes, your payment setup can support changing payment and operational requirements as your business expands." },
    ],
  },
  {
    kind: "textCta", id: "custom-workflow",
    heading: "Build around your operational requirements",
    copy: "Where your business needs more than a standard setup, Payonus can work with you to configure payment flows around your operational requirements.",
    cta: { label: "Talk to Our Team", href: "/sales" },
  },
  {
    kind: "trust", id: "trust",
    heading: "Built for secure, reliable payment operations",
    intro: "Choosing a payment provider means trusting part of your business to the infrastructure behind it. Payonus applies security and operational controls designed to support reliable, accountable payment operations.",
    items: [
      { title: "ISO 27001", desc: "Information security aligned with ISO 27001 requirements." },
      { title: "PCI DSS Level 1", desc: "Payment security aligned with PCI DSS Level 1 requirements." },
      { title: "KYC and transaction audit trails", desc: "Support greater visibility and accountability across payment activity." },
      { title: "Encryption", desc: "Payment data is protected through encryption across the infrastructure." },
      { title: "24/7 monitoring", desc: "Infrastructure monitoring supports reliable payment operations around the clock." },
      { title: "99% uptime SLA", desc: "A 99% uptime SLA supports dependable payment infrastructure." },
    ],
  },
  {
    kind: "faq", id: "faq",
    heading: "Frequently Asked Questions",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Ready to improve your gaming payment operations?",
    subtext: "Tell us how your business collects payments, handles withdrawals, and manages settlement. We'll discuss the payment setup that fits your operation.",
    primaryCta: { label: "Request a Demo", href: "/sales" },
    secondaryCta: { label: "Talk to Our Team", href: "/sales" },
  },
];

export default function GamingPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        hero={{
          eyebrow: "Industries / Gaming",
          heading: "Payment infrastructure built for gaming businesses across Africa",
          subtext: "Keep deposits, withdrawals and settlements moving as your business grows. Payonus helps gaming businesses manage high-frequency payment flows across African markets.",
          primaryCta: { label: "Request a Demo", href: "/sales" },
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
