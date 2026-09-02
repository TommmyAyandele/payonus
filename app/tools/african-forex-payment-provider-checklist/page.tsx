import ToolLandingPage, { ToolLandingData } from "../../ToolLandingPage";

const data: ToolLandingData = {
  vertical: "forex",
  leadMagnetName: "African Forex Payment Provider Checklist",
  leadMagnetType: "checklist",
  pageSlug: "african-forex-payment-provider-checklist",
  eyebrow: "Free Checklist",
  h1: "African Forex Payment Provider Checklist",
  subheadline: "Compare forex payment providers on the capabilities, operational requirements and commercial considerations that matter before you choose, add or replace a provider.",
  ctaLabel: "Download the Free Checklist",
  builtFor: "Built for forex businesses evaluating payment infrastructure across African markets.",
  introHeading: "What Should You Check Before Choosing a Forex Payment Provider?",
  introBody: [
    "For a forex business, choosing a payment provider is not simply a question of whether the provider accepts payments.",
    "You need to understand whether the provider can support your markets, currencies, payment methods, transaction flows, settlement requirements and operational needs while fitting your business and compliance requirements.",
    "The wrong provider can create payment failures, settlement friction, unnecessary operational work or limitations when your business expands.",
    "This checklist gives you a structured way to evaluate the areas that should be clarified before making a provider decision.",
  ],
  evaluateHeading: "What Does the Checklist Help You Compare?",
  evaluateItems: [
    { title: "Market and payment coverage", desc: "Check whether the provider supports the countries, currencies and payment methods relevant to your operation." },
    { title: "Transaction performance", desc: "Evaluate how the provider handles successful, failed, pending and reversed transactions." },
    { title: "Risk and compliance", desc: "Identify the questions you need to ask about transaction monitoring, merchant eligibility, risk controls and dispute handling." },
    { title: "Settlement", desc: "Review settlement timing, currencies, destinations, fees, reserves and other conditions that can affect your cash flow." },
    { title: "Reconciliation and reporting", desc: "Determine whether your finance team can trace transactions and reconcile payment activity effectively." },
    { title: "API and integration", desc: "Check documentation, sandbox access, payment-status notifications, transaction lookup and other integration requirements." },
    { title: "Support and operations", desc: "Evaluate technical support, incident handling, escalation processes and operational responsiveness." },
    { title: "Commercial terms", desc: "Compare the pricing structure and contractual considerations that may affect the actual cost and flexibility of the relationship." },
  ],
  whoForHeading: "Who Should Use the Checklist?",
  whoForIntro: "The checklist is designed for forex businesses and trading platforms evaluating payment providers for African markets. Use it when you are:",
  whoForBullets: [
    "Choosing your first payment provider",
    "Comparing multiple providers",
    "Adding a second payment provider",
    "Replacing an existing provider",
    "Entering additional African markets",
    "Reviewing whether your current provider still meets your requirements",
  ],
  howToHeading: "How to Use the Checklist",
  howToSteps: [
    { title: "Define your requirements", desc: "Identify the markets, currencies, payment methods, and operational capabilities your business needs." },
    { title: "Ask each provider the same questions", desc: "Use the checklist to create a consistent basis for comparison." },
    { title: "Verify the answers", desc: "Where possible, confirm capabilities through documentation, testing, contractual terms or other reliable evidence." },
    { title: "Identify gaps before committing", desc: "Use the results to determine which requirements need clarification before you make a provider decision." },
  ],
  closingHeading: "Compare Providers With Greater Clarity",
  footerNote: "Built for forex businesses evaluating payment infrastructure across African markets.",
  resourceHref: "/resources/forex",
  resourceLinkText: "Forex payment providers in Africa",
};

export default function Page() {
  return <ToolLandingPage data={data} />;
}
