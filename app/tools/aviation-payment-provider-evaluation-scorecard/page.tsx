import ToolLandingPage, { ToolLandingData } from "../../ToolLandingPage";

const data: ToolLandingData = {
  vertical: "aviation",
  leadMagnetName: "Aviation Payment Provider Evaluation Scorecard",
  leadMagnetType: "scorecard",
  pageSlug: "aviation-payment-provider-evaluation-scorecard",
  eyebrow: "Free Scorecard",
  h1: "Aviation Payment Provider Evaluation Scorecard",
  subheadline: "Compare payment providers before payment problems become your problem. Evaluate aviation payment providers across payment coverage, transaction reliability, refunds, risk management, settlement, reconciliation, API capabilities and operational support, so you can identify critical gaps before committing to a provider.",
  ctaLabel: "Get the Free Aviation Payment Provider Evaluation Scorecard",
  builtFor: "Built for airlines, OTAs, travel agencies, flight aggregators and other travel businesses operating across African markets.",
  introHeading: "Is Your Payment Provider Ready for Your Travel Business?",
  introBody: [
    "Choosing a payment provider for an airline, OTA, travel agency or flight aggregator involves more than checking whether it can take a card payment.",
    "You need to know whether the provider's coverage, reliability, risk handling, settlement terms and operational support genuinely fit how your business sells and reconciles travel bookings across African markets.",
    "This scorecard gives you a structured way to compare providers on the areas that matter before you commit.",
  ],
  evaluateHeading: "What Does the Scorecard Help You Evaluate?",
  evaluateItems: [
    { title: "Payment coverage", desc: "Are the payment methods, markets and currencies suitable for your passengers and business?" },
    { title: "Payment reliability", desc: "Can the provider handle confirmation, pending payments, failures, reversals and payment-status updates properly?" },
    { title: "Risk and disputes", desc: "How does the provider approach fraud, chargebacks, transaction review and dispute management?" },
    { title: "Settlement", desc: "Will settlement timing, currency, deductions and reporting work for your operation?" },
    { title: "Reconciliation", desc: "Can finance trace transactions from booking through payment and settlement?" },
    { title: "API and operations", desc: "Can your technical and operational teams integrate, monitor, and manage the payment flow effectively?" },
  ],
  whoForHeading: "Who Is the Scorecard For?",
  whoForIntro: "The scorecard is designed for airlines, online travel agencies, travel agencies, flight aggregators, travel platforms and other businesses handling aviation or travel payment flows across African markets. It is particularly useful when you are:",
  whoForBullets: [
    "Selecting a new provider",
    "Comparing providers",
    "Replacing an existing provider",
    "Expanding into additional markets",
  ],
  howToHeading: "How Should You Use the Scorecard?",
  howToSteps: [
    { title: "Define your requirements", desc: "Document the markets, payment methods, currencies, and operational requirements that matter to your business." },
    { title: "Evaluate each provider", desc: "Use the scorecard to assess providers across the same core areas." },
    { title: "Record evidence", desc: "Where possible, verify provider claims through documentation, testing, contractual terms or other reliable evidence." },
    { title: "Identify critical gaps", desc: "A strong overall provider score should not hide a failure to meet an important requirement." },
    { title: "Compare before you commit", desc: "Use the completed scorecard to support a more informed decision by the provider." },
  ],
  closingHeading: "Get the Free Aviation Payment Provider Evaluation Scorecard",
  footerNote: "The scorecard is a decision-support tool and does not replace legal, regulatory, financial, or commercial due diligence.",
  resourceHref: "/resources/aviation",
  resourceLinkText: "Payment infrastructure for aviation businesses",
};

export default function Page() {
  return <ToolLandingPage data={data} />;
}
