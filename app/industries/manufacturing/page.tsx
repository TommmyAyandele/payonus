import IndustryPage from "../../IndustryPage";
import JsonLd from "../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../seo";
import { IndustryBlock } from "../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Manufacturing Payment Solutions",
  description: "Improve cash collection, working capital and payment operations with infrastructure built for complex manufacturing workflows.",
  path: "/industries/manufacturing",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Manufacturing", path: "/industries/manufacturing" },
]);

const faqs = [
  { q: "Can Payonus support manufacturing payment and collection workflows?", a: "Yes. Payonus can support payment and collection requirements within a manufacturer's wider order-to-cash process. This includes relevant payment methods, collections, and payment visibility. The goal is not only to accept payment — it is to make the payment stage more efficient." },
  { q: "Will Payonus replace our existing ERP or finance systems?", a: "No. The objective is to complement the systems your teams already use. Payonus can fit alongside existing ERP, accounting and finance workflows. The right integration approach depends on your environment and requirements." },
  { q: "Can Payonus integrate with our existing systems?", a: "Payonus provides API-based capabilities for connecting payment functionality with relevant business systems. The specific approach depends on your systems, payment workflows and integration requirements." },
  { q: "Can we collect invoice payments, deposits or milestone payments?", a: "Manufacturing collection requirements can vary from invoices to deposits, partial payments and agreed milestones. The appropriate payment workflow depends on how your business collects today and the capabilities required to support that process." },
  { q: "Can Payonus support cross-border or multi-currency collections?", a: "Yes. Payonus can support relevant cross-border and multi-currency requirements where approved capabilities are available. Coverage should be assessed against your countries, entities, currencies and settlement requirements." },
  { q: "Will implementation disrupt our finance operations?", a: "The goal is to improve payment operations without unnecessary disruption. Implementation should be designed around your existing workflows, systems and operational priorities. The appropriate approach depends on your environment." },
  { q: "How does Payonus fit into our order-to-cash process?", a: "Payonus can support the payment and collection stages between invoice and financial visibility. It is not intended to replace your wider order-to-cash process — the objective is to strengthen the payment infrastructure within it." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "cards", id: "complexity", columns: 3, tint: true,
    heading: "Manufacturing payments are more than collecting a payment",
    intro: "A customer payment is often one step in a wider process involving invoices, payment terms, distributors, settlement and reconciliation. When those processes are disconnected, collections slow down, and finance teams take on more manual work.",
    items: [
      { icon: "clock", title: "Long Payment Cycles", desc: "Extended payment terms can delay collections and increase pressure on working capital." },
      { icon: "card", title: "Invoice-Driven Collections", desc: "B2B payments need to fit the way invoices and customer accounts are managed." },
      { icon: "refresh", title: "Manual Reconciliation", desc: "Disconnected payment channels can leave finance teams matching transactions manually." },
      { icon: "users", title: "Distributor Collections", desc: "Multiple customers, distributors and payment routes can make collections harder to track." },
      { icon: "globe", title: "Cross-Border Collections", desc: "International payments introduce additional currency, settlement and collection requirements." },
      { icon: "layers", title: "Fragmented Financial Workflows", desc: "Payment activity can become disconnected from the systems finance teams use every day." },
    ],
  },
  {
    kind: "cards", id: "outcomes", columns: 3,
    heading: "Turn better payment operations into better cash flow",
    intro: "The right payment infrastructure can improve more than the payment experience. It can help create a clearer and more efficient path from sale to cash.",
    items: [
      { icon: "bolt", title: "Collect Faster", desc: "Reduce friction between issuing a payment request and receiving payment." },
      { icon: "scale", title: "Improve Working Capital", desc: "Bring cash collection closer to when revenue is earned." },
      { icon: "layers", title: "Reduce Manual Work", desc: "Reduce unnecessary payment administration and exception handling." },
      { icon: "eye", title: "Improve Payment Visibility", desc: "Give finance teams clearer insight into payment and settlement activity." },
      { icon: "chart", title: "Support Better Forecasting", desc: "Use more timely payment information to support cash-flow planning." },
      { icon: "card", title: "Reduce Collection Friction", desc: "Make it easier for customers and distributors to complete payments." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "Support the payment workflows your business already runs",
    intro: "Manufacturers manage different customers, invoices, transaction values, and payment requirements. Your payment infrastructure should fit those workflows rather than create another process for finance to manage.",
    items: [
      { icon: "card", title: "Invoice Payments", desc: "Support collections around invoice-based B2B transactions." },
      { icon: "route", title: "Bank Transfers", desc: "Give business customers account-based options for completing payments." },
      { icon: "wallet", title: "Card Payments", desc: "Support card payments where they fit your customer and transaction model." },
      { icon: "link", title: "Payment Links", desc: "Create direct payment journeys for specific invoices and collection needs." },
      { icon: "clock", title: "Deposits & Milestone Payments", desc: "Support structured payment journeys involving deposits, staged amounts or agreed milestones." },
      { icon: "globe", title: "Multi-Currency Payments", desc: "Support relevant currencies and markets where available through approved Payonus capabilities." },
      { icon: "users", title: "Distributor Collections", desc: "Support collections across distributor and business-customer relationships." },
      { icon: "plug", title: "Payment APIs", desc: "Connect payment functionality to the systems and workflows that power your operation.", href: "/payment-api", linkLabel: "Explore Payment APIs" },
    ],
  },
  {
    kind: "flow", id: "differentiator",
    heading: "Make payments easier to manage across your operation",
    intro: "Getting paid is only one part of the process. Your team also needs to track, settle and reconcile payments with orders and invoices. Payonus helps make those payment processes work better with the rest of your operation.",
    steps: ["Order", "Invoice", "Payment Request", "Customer Payment", "Collection", "Settlement", "Reconciliation", "Financial Visibility"],
    bullets: ["Accelerate collections", "Reduce manual intervention", "Improve payment visibility", "Simplify reconciliation", "Strengthen cash-flow management"],
  },
  {
    kind: "cards", id: "integration", columns: 2,
    heading: "Connect payments with your existing finance environment",
    intro: "Your business already relies on systems to manage finance and operations. Payment infrastructure should work with that environment, not create another isolated workflow.",
    items: [
      { icon: "building", title: "ERP Environment", desc: "Connect payment workflows to the systems that manage your financial operation." },
      { icon: "chart", title: "Accounting Workflows", desc: "Support the information finance teams use to track, reconcile, and report transactions." },
      { icon: "plug", title: "APIs", desc: "Connect payment functionality where your existing technology environment requires it.", href: "/payment-api", linkLabel: "Explore Payment APIs" },
      { icon: "eye", title: "Reporting & Reconciliation", desc: "Give finance teams access to the payment and settlement information relevant to their workflows.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
    ],
  },
  {
    kind: "textCta", id: "integration-cta",
    heading: "Discuss your integration requirements",
    copy: "The right integration approach depends on your ERP, accounting workflows, APIs and reporting needs. Talk to Payonus about how payment infrastructure can connect to the systems your finance team already relies on.",
    cta: { label: "Discuss Your Integration Requirements", href: "/sales" },
  },
  {
    kind: "trust", id: "trust",
    heading: "Keep critical payment operations secure and reliable",
    intro: "Payment infrastructure affects revenue, customer relationships and financial reporting. Finance and IT teams need confidence in how that infrastructure is secured, governed and operated.",
    items: [
      { title: "Security That Protects Payment Activity", desc: "Payonus is supported by ISO 27001 and PCI DSS Level 1 standards, with encryption helping protect payment and transaction data." },
      { title: "Compliance and Payment Controls", desc: "Payonus supports this with KYC processes and transaction audit trails, giving businesses a clearer record of relevant payment activity." },
      { title: "Clearer Transaction Visibility", desc: "End-to-end digital audit trails help provide a record of payment activity across the transaction journey." },
      { title: "Infrastructure You Can Depend On", desc: "24/7 infrastructure monitoring and a 99% uptime SLA support the reliability and continuity of critical payment activity." },
    ],
  },
  {
    kind: "cards", id: "scale", columns: 3, tint: true,
    heading: "Built for complex manufacturing operations",
    intro: "As manufacturing operations grow, payment requirements can become more complex. More entities, markets, customers, and payment flows should not automatically mean more finance complexity.",
    items: [
      { icon: "building", title: "Multiple Entities", desc: "Support appropriate payment operations across business entities and operating structures." },
      { icon: "globe", title: "Cross-Border Requirements", desc: "Support relevant payment needs across Payonus's operating markets: Nigeria, Ghana, Kenya, Côte d'Ivoire, South Africa, Zambia, Senegal and Cameroon." },
      { icon: "scale", title: "Multi-Currency Requirements", desc: "Support relevant currencies where available." },
      { icon: "users", title: "Distributor Networks", desc: "Manage payment flows across wider B2B and distribution relationships." },
      { icon: "gauge", title: "Growing Payment Activity", desc: "Support payment operations as transaction requirements increase." },
    ],
  },
  {
    kind: "cards", id: "solutions", columns: 3,
    heading: "Explore more ways to manage your payment operations",
    intro: "Collections and reconciliation are only part of your payment operation. Depending on how your business works, you may also need support for payment integrations, outgoing payments, reporting or faster access to settled funds.",
    items: [
      { icon: "card", title: "Collections", desc: "Make it easier for customers to pay and reduce friction between sending an invoice and receiving payment.", href: "/collections", linkLabel: "Explore Collections" },
      { icon: "plug", title: "Payment APIs", desc: "Connect payment functionality to the systems and digital workflows your business already uses.", href: "/payment-api", linkLabel: "Explore Payment APIs" },
      { icon: "route", title: "Payouts", desc: "Manage outgoing payments when your operation needs to pay suppliers, partners or other recipients.", href: "/payouts", linkLabel: "Explore Payouts" },
      { icon: "chart", title: "Analytics & Reporting", desc: "Get clearer visibility into payment activity, collections and settlement information.", href: "/analytics", linkLabel: "Explore Analytics & Reporting" },
      { icon: "clock", title: "Instant Settlement", desc: "Explore faster access to settled funds when this is available for your payment setup.", href: "/settlements", linkLabel: "Explore Instant Settlement" },
    ],
  },
  {
    kind: "faq", id: "faq",
    heading: "FAQ",
    items: faqs,
  },
  {
    kind: "textCta", id: "faq-transition",
    heading: "Ready to look at your payment operation?",
    copy: "Talk with our team about your collections, order-to-cash process, finance environment, and payment requirements.",
    cta: { label: "Talk to Sales", href: "/sales" },
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        hero={{
          eyebrow: "Industries / Manufacturing",
          heading: "Payment infrastructure built for manufacturing",
          subtext: "Collect invoices with less friction, improve payment visibility and strengthen the path from order to cash without disrupting the finance workflows your team already uses.",
          primaryCta: { label: "Talk to Sales", href: "/sales" },
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "Payment API", href: "/payment-api" },
          { label: "Collections", href: "/collections" },
          { label: "Analytics", href: "/analytics" },
        ]}
      />
    </>
  );
}
