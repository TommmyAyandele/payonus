import React from "react";
import type { LegalSection } from "../LegalPage";

export interface Article {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "payment-infrastructure-in-africa",
    category: "Payment Infrastructure",
    title: "How payment infrastructure works across Africa",
    subtitle: "A guide to payment rails, settlement cycles, and cross-border processing for merchants operating in African markets.",
    updated: "August 2026",
    sections: [
      {
        id: "what-is-payment-infrastructure",
        heading: "What is payment infrastructure?",
        content: (
          <>
            <p>Payment infrastructure is the set of systems that move money between a customer, a merchant, and the banks or wallets on either side of a transaction. It covers how a payment is initiated, authorised, cleared, and settled — and, for a business operating across borders, how currencies are converted along the way.</p>
            <p>In mature markets, most of this infrastructure is invisible: card networks, bank rails, and clearing houses have operated the same way for decades. Across Africa, the picture is different. Each market has its own dominant payment methods, regulatory requirements, and settlement timelines, which means infrastructure built for one country often doesn't work in the next.</p>
          </>
        ),
      },
      {
        id: "local-rails",
        heading: "Local rails differ market to market",
        content: (
          <>
            <p>A merchant collecting payments in Nigeria, Ghana, and Kenya at the same time is really operating on three separate payment systems, not one. Cards matter in some markets and barely register in others. Mobile money is dominant in Kenya and Ghana. USSD-based payments remain a primary channel in Nigeria for customers without reliable internet access.</p>
            <p>Building and maintaining direct integrations with each of these rails — cards, bank transfer, USSD, and mobile money — is why most cross-border merchants in Africa end up either restricting which markets they serve, or working with an infrastructure provider like <a href="/payment-api">Payonus's Payment API</a> that has already built and maintains those connections.</p>
          </>
        ),
      },
      {
        id: "settlement-cycles",
        heading: "Settlement cycles and why they matter",
        content: (
          <>
            <p>Settlement is the point at which money collected from a customer actually lands in a merchant's account. A standard settlement window in Africa is T+1 for verified merchant accounts — meaning funds collected today are available the next business day. International payouts, which typically route through intermediary banks, can take two to three business days depending on the destination.</p>
            <p>Settlement speed directly affects cash flow. A business with tight margins or high transaction volume needs predictable settlement timing to plan around, which is why platforms like Payonus offer <a href="/settlements">flexible settlement schedules</a> — daily, weekly, or on-demand — rather than a single fixed cycle.</p>
          </>
        ),
      },
      {
        id: "cross-border-and-fx",
        heading: "Cross-border processing and FX",
        content: (
          <>
            <p>Operating across multiple African markets means handling multiple currencies — NGN, GHS, KES, ZAR, ZMW, XAF, and XOF among them. Every cross-border transaction involves a foreign exchange conversion at some point, and the rate applied at that conversion has a direct effect on what a merchant actually receives.</p>
            <p>Infrastructure that handles FX at competitive, transparent rates — rather than burying a margin inside the conversion — is one of the clearest differences between payment providers operating in Africa. It's worth checking exactly where and how a provider converts currency before committing to it.</p>
          </>
        ),
      },
      {
        id: "why-unified-infrastructure-matters",
        heading: "Why unified infrastructure matters",
        content: (
          <>
            <p>Every one of these pieces — local rails, settlement timing, FX handling — can be built independently. Most growing businesses don't have the time or the regulatory relationships to build them all well, market by market.</p>
            <p>That's the case for a single integration that handles collections, payouts, and settlement across every market a business operates in, rather than stitching together separate providers per country. It's also why payment infrastructure is worth understanding before choosing a provider, not after.</p>
          </>
        ),
      },
    ],
  },
  {
    slug: "enterprise-payment-operations",
    category: "Enterprise Operations",
    title: "Running payment operations at scale",
    subtitle: "What reconciliation, reporting, and risk monitoring actually look like once a business is processing high transaction volumes.",
    updated: "August 2026",
    sections: [
      {
        id: "what-changes-at-scale",
        heading: "What changes once volume grows",
        content: (
          <>
            <p>Payment operations at low volume are mostly manual — a finance team can check a handful of transactions against a bank statement by hand. That approach breaks down quickly as volume grows. Once a business is processing thousands of transactions a day across multiple payment methods, the operational question shifts from "did this payment work" to "how do we know, systematically, that every payment worked, was recorded correctly, and settled where it should."</p>
            <p>That shift is what "payment operations" usually refers to: the tooling and processes that keep transaction data accurate and visible as volume increases, rather than the individual transactions themselves.</p>
          </>
        ),
      },
      {
        id: "reconciliation-and-reporting",
        heading: "Reconciliation and reporting",
        content: (
          <>
            <p>Reconciliation is the process of matching every payment, payout, and settlement to the internal record it's supposed to correspond to — an order, an invoice, a payroll run. Done manually, it's one of the largest hidden costs of running payment operations, because errors compound and become harder to trace the longer they go unresolved.</p>
            <p>Automated reconciliation matches transactions to internal references as they happen, and makes the result exportable — typically as CSV or PDF — so finance teams can close the books without cross-referencing spreadsheets by hand. This is a core function across <a href="/collections">Collections</a>, <a href="/settlements">Settlements</a>, and <a href="/payouts">Payouts</a>.</p>
          </>
        ),
      },
      {
        id: "real-time-visibility",
        heading: "Real-time visibility",
        content: (
          <>
            <p>At scale, waiting until end-of-day to find out something went wrong is expensive. Real-time dashboards and webhook-based notifications close that gap — a failed payout, a spike in declined transactions, or a settlement delay can be surfaced and acted on within minutes instead of being discovered the next morning during reconciliation.</p>
            <p>Webhooks in particular let operations teams build their own automated responses — retrying a failed payment, alerting a specific team, or updating an internal system — without needing to poll an API or check a dashboard manually.</p>
          </>
        ),
      },
      {
        id: "monitoring-risk-at-scale",
        heading: "Monitoring risk at scale",
        content: (
          <>
            <p>Fraud and risk patterns that are invisible in a handful of transactions become statistically obvious across thousands. Volume gives risk teams the data to spot anomalies — an unusual spike in declined cards, a cluster of transactions from a single flagged region — before they turn into chargebacks or losses.</p>
            <p>This is why <a href="/analytics">analytics and risk signals</a> become more valuable, not less, as a business grows: the same infrastructure that tracks revenue is what surfaces risk early enough to act on it.</p>
          </>
        ),
      },
      {
        id: "choosing-an-infrastructure-partner",
        heading: "Choosing an infrastructure partner",
        content: (
          <>
            <p>Every business eventually has to decide how much of this operational tooling to build in-house versus rely on a payment provider for. Building reconciliation, real-time monitoring, and risk detection from scratch is a significant, ongoing engineering investment — one that has nothing to do with the core product a business is trying to grow.</p>
            <p>For most growing businesses, the practical path is choosing infrastructure that already handles reconciliation, reporting, and risk monitoring as a baseline — and reserving in-house engineering effort for the parts of the operation that are actually unique to the business.</p>
          </>
        ),
      },
    ],
  },
];
