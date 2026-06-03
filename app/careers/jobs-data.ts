export interface Job {
  dept:             string;
  title:            string;
  location:         string;
  type:             string;
  desc:             string;
  slug:             string;
  responsibilities: string[];
  requirements:     string[];
}

export const JOBS: Job[] = [
  {
    dept:     "Engineering",
    title:    "Senior Backend Engineer (Payments)",
    location: "Lagos · Remote",
    type:     "Full-time",
    slug:     "senior-backend-engineer-payments",
    desc:     "Design and scale high-throughput payment systems handling thousands of transactions per second across multiple African markets.",
    responsibilities: [
      "Architect and own core payment processing pipelines — disbursements, collections, and settlements",
      "Design fault-tolerant distributed systems capable of handling peak loads across Nigeria, Ghana, Kenya, and beyond",
      "Partner with product and infrastructure to drive reliability, latency, and cost efficiency goals",
      "Lead code reviews, mentor mid-level engineers, and raise the engineering bar across the backend guild",
      "Participate in on-call rotation and drive incident response, post-mortems, and systemic fixes",
    ],
    requirements: [
      "5+ years of backend engineering, with at least 2 years on payment, fintech, or high-throughput transaction systems",
      "Deep proficiency in one or more of: Go, Node.js (TypeScript), or Java",
      "Solid understanding of distributed systems, message queues (Kafka, RabbitMQ), and relational databases at scale",
      "Experience with REST and asynchronous API design, idempotency keys, and webhook delivery guarantees",
      "Familiarity with PCI-DSS or other financial compliance frameworks is a strong plus",
    ],
  },
  {
    dept:     "Engineering",
    title:    "Frontend Engineer (React / Next.js)",
    location: "Lagos · Remote",
    type:     "Full-time",
    slug:     "frontend-engineer-react-nextjs",
    desc:     "Build the merchant dashboard and developer tooling that makes Payonus delightful to use — fast, accessible, and beautifully designed.",
    responsibilities: [
      "Own the merchant-facing dashboard: charts, transaction tables, onboarding flows, and settings",
      "Build reusable component systems that balance design fidelity with developer velocity",
      "Collaborate closely with design to implement pixel-accurate, accessible interfaces",
      "Instrument performance budgets and optimise Core Web Vitals across all page surfaces",
      "Ship developer documentation UI and interactive API playgrounds alongside the backend team",
    ],
    requirements: [
      "3+ years of production experience with React and TypeScript",
      "Deep knowledge of Next.js — App Router, server components, and the edge runtime",
      "Strong eye for UI details: spacing, motion, colour, and micro-interaction",
      "Experience with data visualisation libraries (Recharts, Nivo, or D3)",
      "Understanding of web accessibility standards (WCAG 2.1 AA) and semantic HTML",
    ],
  },
  {
    dept:     "Engineering",
    title:    "DevOps / Platform Engineer",
    location: "Lagos · Remote",
    type:     "Full-time",
    slug:     "devops-platform-engineer",
    desc:     "Own our cloud infrastructure, CI/CD pipelines, and observability stack to keep the platform reliable for every transaction.",
    responsibilities: [
      "Design, provision, and operate cloud infrastructure (AWS / GCP) for production payment workloads",
      "Build and maintain CI/CD pipelines that let the engineering team ship confidently and frequently",
      "Define and own SLOs, alerting, and dashboards using Prometheus, Grafana, and PagerDuty",
      "Harden the security posture: secrets management, network segmentation, and audit logging",
      "Partner with security to achieve and maintain SOC 2 Type II and PCI-DSS compliance",
    ],
    requirements: [
      "3+ years in a DevOps, SRE, or platform engineering role",
      "Hands-on experience with Kubernetes, Terraform, and one of AWS or GCP",
      "Proficiency with observability tooling — logs, metrics, traces, and on-call workflows",
      "Experience securing financial systems: secrets management (Vault), IAM, and network policies",
      "Strong scripting skills in Bash and Python; Go experience is a plus",
    ],
  },
  {
    dept:     "Growth",
    title:    "Growth Marketing Lead",
    location: "Lagos",
    type:     "Full-time",
    slug:     "growth-marketing-lead",
    desc:     "Drive customer acquisition and expansion across key African markets through creative, data-driven campaigns and partnerships.",
    responsibilities: [
      "Own the end-to-end growth funnel: from awareness campaigns to merchant activation and retention",
      "Define and execute channel strategy across SEO, paid media, events, and content",
      "Build data-driven experimentation programmes — A/B tests, cohort analysis, and growth accounting",
      "Partner with sales on go-to-market in new geographies: positioning, messaging, and collateral",
      "Report on growth KPIs to leadership and iterate strategy based on what the data reveals",
    ],
    requirements: [
      "4+ years in B2B growth or performance marketing, ideally in fintech or developer-focused products",
      "Proven track record of scaling acquisition and activation in at least one African market",
      "Comfort with analytics tools: Mixpanel, Amplitude, GA4, or similar",
      "Strong copywriting and storytelling skills — you can write for developers and business owners alike",
      "Experience managing agencies, budgets, and cross-functional stakeholders",
    ],
  },
  {
    dept:     "Growth",
    title:    "Partnership Manager",
    location: "Lagos · Remote",
    type:     "Full-time",
    slug:     "partnership-manager",
    desc:     "Build and grow strategic relationships with fintechs, banks, and enterprise clients across West and East Africa.",
    responsibilities: [
      "Identify, negotiate, and close integration partnerships with banks, mobile money operators, and fintechs",
      "Manage a portfolio of strategic accounts: QBRs, escalations, and expansion opportunities",
      "Work with product to translate partner needs into roadmap priorities",
      "Represent Payonus at industry conferences and forums across the continent",
      "Build the playbook for scaling the partnership function as we enter new markets",
    ],
    requirements: [
      "4+ years in business development, partnerships, or enterprise sales in financial services",
      "Existing network within West or East African banking, fintech, or telecoms ecosystems",
      "Excellent negotiation and relationship management skills across cultures and seniority levels",
      "Ability to turn complex commercial structures into clear, mutual-value narratives",
      "Understanding of payment rails, interoperability, and regulatory environments in key African markets",
    ],
  },
  {
    dept:     "Product",
    title:    "Product Manager",
    location: "Lagos",
    type:     "Full-time",
    slug:     "product-manager",
    desc:     "Own product discovery and delivery for our core payments primitives, working closely with engineering, design, and customers.",
    responsibilities: [
      "Own the roadmap for one or more payment primitives: collections, disbursements, or settlements",
      "Run structured discovery: customer interviews, data analysis, and competitive benchmarking",
      "Write clear, opinionated product specs that engineering can build from without ambiguity",
      "Collaborate with design to craft intuitive API surfaces and dashboard experiences",
      "Define success metrics and run post-launch reviews to close the feedback loop",
    ],
    requirements: [
      "3+ years of product management at a B2B SaaS or fintech company",
      "Deep empathy for both technical (developer API) and non-technical (merchant dashboard) users",
      "Strong analytical skills — you are comfortable in SQL and BI tools",
      "Experience shipping payment, banking, or financial infrastructure products is strongly preferred",
      "Excellent written communication: you write specs, memos, and updates that people actually read",
    ],
  },
];
