import ToolLandingPage, { ToolLandingData } from "../../ToolLandingPage";

const data: ToolLandingData = {
  vertical: "ecommerce",
  leadMagnetName: "Cross-Border E-commerce Payment Cost & Settlement Worksheet",
  leadMagnetType: "worksheet",
  pageSlug: "cross-border-ecommerce-payment-cost-settlement-worksheet",
  eyebrow: "Free Worksheet",
  h1: "Cross-Border E-commerce Payment Cost & Settlement Worksheet",
  subheadline: "Find out where your African payment setup may be costing you money through payment losses, hidden costs, settlement delays and reconciliation burden.",
  ctaLabel: "Get the Free Worksheet",
  builtFor: "Built for e-commerce businesses evaluating the cost, performance and operational impact of payment infrastructure across African markets.",
  introHeading: "What Is Your Payment Setup Really Costing Your Business?",
  introBody: [
    "The cost of accepting payments across African markets is not always visible in the transaction fee.",
    "Payment failures can reduce completed sales. FX costs can affect margins. Settlement deductions can make expected revenue different from actual settlement. Refunds can create additional costs, while manual reconciliation can consume valuable finance and operations time.",
    "When these costs are spread across different markets and payment methods, it can become difficult to see where the biggest problems are.",
    "The Cross-Border E-commerce Payment Cost & Settlement Worksheet helps you document these costs and identify the areas that may deserve attention first.",
  ],
  evaluateHeading: "What Can You Evaluate With the Worksheet?",
  evaluateItems: [
    { title: "Payment conversion losses", desc: "Identify where unsuccessful or incomplete payments may be affecting completed transactions." },
    { title: "Payment and processing costs", desc: "Document the fees associated with collecting payments across your markets." },
    { title: "Currency and FX costs", desc: "Review the effect of currency conversion and related costs on your payment economics." },
    { title: "Settlement costs and delays", desc: "Record when funds become available, what deductions apply and whether settlement timing creates operational or cash-flow challenges." },
    { title: "Refund-related costs", desc: "Consider the costs and operational effort associated with refunds and payment reversals." },
    { title: "Reconciliation burden", desc: "Identify how much manual effort is required to match payment, settlement, and financial records." },
    { title: "Market-level differences", desc: "Compare payment performance and costs across the African markets in which you operate." },
  ],
  whoForHeading: "Who Is This Worksheet For?",
  whoForIntro: "This worksheet is designed for e-commerce businesses collecting payments across multiple African markets. It can be particularly useful if your business is:",
  whoForBullets: [
    "Expanding into additional African markets",
    "Experiencing payment conversion problems",
    "Unsure of the true cost of payment processing",
    "Dealing with settlement delays or unexpected deductions",
    "Spending significant time reconciling payment records",
    "Comparing payment providers",
    "Reviewing whether your current payment setup is still commercially efficient",
  ],
  howToHeading: "How to Use the Worksheet",
  howToSteps: [
    { title: "Gather your payment information", desc: "Collect the transaction, fee, settlement, and reconciliation information available for your markets." },
    { title: "Record the costs and operational impact", desc: "Use the worksheet to document the payment costs and issues affecting your business." },
    { title: "Compare markets and identify patterns", desc: "Look for differences in payment performance, costs and settlement across markets." },
    { title: "Prioritize the biggest issues", desc: "Use the completed worksheet to determine which payment or settlement problems deserve attention first." },
  ],
  closingHeading: "Find Out Where Your Payment Setup Is Costing You Money",
  footerNote: "Built for e-commerce businesses evaluating the cost, performance and operational impact of payment infrastructure across African markets.",
  resourceHref: "/resources/ecommerce",
  resourceLinkText: "Cross-border e-commerce payments in Africa",
};

export default function Page() {
  return <ToolLandingPage data={data} />;
}
