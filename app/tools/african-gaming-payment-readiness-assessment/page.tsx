import ToolLandingPage, { ToolLandingData } from "../../ToolLandingPage";

const data: ToolLandingData = {
  vertical: "gaming",
  leadMagnetName: "African Gaming Payment Readiness Assessment",
  leadMagnetType: "assessment",
  pageSlug: "african-gaming-payment-readiness-assessment",
  eyebrow: "Free Assessment",
  h1: "Is Your Gaming Payment Setup Ready for African Expansion?",
  subheadline: "The African Gaming Payment Readiness Assessment helps you identify payment, operational and market-readiness gaps that could affect player deposits, withdrawals, transaction reliability and expansion into new African markets.",
  ctaLabel: "Complete the African Gaming Payment Readiness Assessment",
  builtFor: "Designed as a practical decision-support tool for gaming businesses evaluating payment readiness across African markets.",
  introHeading: "Is Your Payment Infrastructure Ready to Support Your Next Market?",
  introBody: [
    "Expanding a gaming operation into another African market involves more than acquiring new players. Your payment setup needs to support the ways players deposit and withdraw, handle different currencies and payment methods, maintain reliable transaction status, and give your finance and operations teams enough visibility to manage the resulting payment flows.",
    "A payment setup that works well in one market may expose gaps when transaction volumes increase or new markets are added.",
    "This assessment helps you identify those gaps before they become an expansion problem.",
  ],
  evaluateHeading: "What Does the Assessment Help You Evaluate?",
  evaluateItems: [
    { title: "Payment coverage", desc: "Assess whether your required payment methods, currencies and markets are adequately supported." },
    { title: "Deposit and withdrawal readiness", desc: "Identify potential gaps in the way players deposit funds and receive withdrawals." },
    { title: "Payment reliability", desc: "Consider how your setup handles successful, failed, pending, reversed and delayed transactions." },
    { title: "Market expansion readiness", desc: "Identify payment and operational requirements that may need to be addressed before entering additional African markets." },
    { title: "Risk and operational controls", desc: "Review whether your payment operation is equipped to manage transaction monitoring, disputes, exceptions and operational issues." },
    { title: "Settlement and reconciliation", desc: "Consider whether your finance team can accurately trace transactions and reconcile payment activity as your operation grows." },
  ],
  whoForHeading: "Who Is This Assessment For?",
  whoForIntro: "This assessment is designed for gaming operators, betting businesses, gaming platforms and other businesses handling gaming-related payment flows across African markets. It is particularly useful if you are:",
  whoForBullets: [
    "Entering a new African market",
    "Adding new payment methods",
    "Experiencing deposit or withdrawal issues",
    "Reviewing your existing payment provider",
    "Planning for higher transaction volumes",
    "Considering whether your current payment infrastructure can support expansion",
  ],
  howToHeading: "How to Use the Assessment",
  howToSteps: [
    { title: "Review your current payment setup", desc: "Document the markets, payment methods, and operational processes you currently rely on." },
    { title: "Identify potential gaps", desc: "Use the assessment to determine where your current setup may not fully support your operational or expansion requirements." },
    { title: "Prioritize what needs attention", desc: "Use the results to identify the payment and operational areas that should be addressed before expansion." },
  ],
  closingHeading: "Ready to Assess Your Gaming Payment Readiness?",
  footerNote: "Designed as a practical decision-support tool for gaming businesses evaluating payment readiness across African markets.",
  resourceHref: "/resources/gaming",
  resourceLinkText: "African gaming payment infrastructure",
};

export default function Page() {
  return <ToolLandingPage data={data} />;
}
