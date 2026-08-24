import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Solutions de paiement pour l'industrie manufacturière",
  description: "Améliorez l'encaissement, le fonds de roulement et les opérations de paiement grâce à une infrastructure conçue pour des flux de travail manufacturiers complexes.",
  path: "/fr/industries/manufacturing",
  locale: "fr",
  alternatePath: "/industries/manufacturing",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Industrie manufacturière", path: "/fr/industries/manufacturing" },
]);

const faqs = [
  { q: "Payonus peut-il prendre en charge les flux de paiement et d'encaissement pour l'industrie manufacturière ?", a: "Oui. Payonus peut prendre en charge les exigences de paiement et d'encaissement au sein du processus order-to-cash plus large d'un fabricant. Cela inclut les méthodes de paiement pertinentes, les encaissements et la visibilité des paiements. L'objectif n'est pas seulement d'accepter le paiement — c'est de rendre l'étape de paiement plus efficace." },
  { q: "Payonus va-t-il remplacer notre ERP ou nos systèmes financiers existants ?", a: "Non. L'objectif est de compléter les systèmes que vos équipes utilisent déjà. Payonus peut s'intégrer aux côtés des flux ERP, comptables et financiers existants. L'approche d'intégration appropriée dépend de votre environnement et de vos exigences." },
  { q: "Payonus peut-il s'intégrer à nos systèmes existants ?", a: "Payonus propose des capacités basées sur API pour connecter les fonctionnalités de paiement aux systèmes métier pertinents. L'approche spécifique dépend de vos systèmes, de vos flux de paiement et de vos exigences d'intégration." },
  { q: "Pouvons-nous encaisser des paiements de facture, des acomptes ou des paiements par étapes ?", a: "Les exigences d'encaissement dans l'industrie manufacturière peuvent varier des factures aux acomptes, en passant par les paiements partiels et les étapes convenues. Le flux de paiement approprié dépend de la façon dont votre entreprise encaisse aujourd'hui et des capacités nécessaires pour prendre en charge ce processus." },
  { q: "Payonus peut-il prendre en charge des encaissements transfrontaliers ou multidevises ?", a: "Oui. Payonus peut prendre en charge les exigences transfrontalières et multidevises pertinentes lorsque des capacités approuvées sont disponibles. La couverture doit être évaluée en fonction de vos pays, entités, devises et exigences de règlement." },
  { q: "L'implémentation va-t-elle perturber nos opérations financières ?", a: "L'objectif est d'améliorer les opérations de paiement sans perturbation inutile. L'implémentation doit être conçue autour de vos flux de travail, systèmes et priorités opérationnelles existants. L'approche appropriée dépend de votre environnement." },
  { q: "Comment Payonus s'intègre-t-il dans notre processus order-to-cash ?", a: "Payonus peut prendre en charge les étapes de paiement et d'encaissement entre la facturation et la visibilité financière. Il n'a pas vocation à remplacer votre processus order-to-cash plus large — l'objectif est de renforcer l'infrastructure de paiement qui s'y trouve." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "stats", id: "stats",
    items: [
      { value: "8", label: "Marchés africains" },
      { value: "99%", label: "SLA de disponibilité" },
      { value: "24/7", label: "Surveillance de l'infrastructure" },
    ],
  },
  {
    kind: "bento", id: "complexity", leadMock: "obi",
    heading: "Les paiements dans l'industrie manufacturière vont bien au-delà de l'encaissement",
    intro: "Le paiement d'un client n'est souvent qu'une étape dans un processus plus large impliquant factures, conditions de paiement, distributeurs, règlement et rapprochement.",
    items: [
      { icon: "clock", title: "Cycles de paiement longs", desc: "Des conditions de paiement étendues peuvent retarder les encaissements et accroître la pression sur le fonds de roulement." },
      { icon: "card", title: "Encaissements pilotés par la facturation", desc: "Les paiements B2B doivent s'adapter à la façon dont les factures et les comptes clients sont gérés." },
      { icon: "refresh", title: "Rapprochement manuel", desc: "Des canaux de paiement déconnectés peuvent obliger les équipes finance à rapprocher les transactions manuellement." },
      { icon: "users", title: "Encaissements auprès des distributeurs", desc: "De multiples clients, distributeurs et circuits de paiement peuvent compliquer le suivi des encaissements." },
      { icon: "globe", title: "Encaissements transfrontaliers", desc: "Les paiements internationaux introduisent des exigences supplémentaires en matière de devise, de règlement et d'encaissement." },
      { icon: "layers", title: "Flux financiers fragmentés", desc: "L'activité de paiement peut se déconnecter des systèmes que les équipes finance utilisent au quotidien." },
    ],
  },
  {
    kind: "list", id: "outcomes", numbered: true,
    heading: "Transformez de meilleures opérations de paiement en une meilleure trésorerie",
    intro: "La bonne infrastructure de paiement peut contribuer à créer un chemin plus clair et plus efficace entre la vente et l'encaissement.",
    items: [
      { icon: "bolt", title: "Encaissez plus rapidement", desc: "Réduisez la friction entre l'émission d'une demande de paiement et sa réception." },
      { icon: "scale", title: "Améliorez le fonds de roulement", desc: "Rapprochez l'encaissement du moment où le revenu est généré." },
      { icon: "layers", title: "Réduisez le travail manuel", desc: "Réduisez l'administration de paiement inutile et la gestion des exceptions." },
      { icon: "eye", title: "Améliorez la visibilité des paiements", desc: "Donnez aux équipes finance une vision plus claire de l'activité de paiement et de règlement." },
      { icon: "chart", title: "Améliorez vos prévisions", desc: "Utilisez des informations de paiement plus rapides pour soutenir la planification de trésorerie." },
      { icon: "card", title: "Réduisez la friction à l'encaissement", desc: "Facilitez la finalisation des paiements pour les clients et les distributeurs." },
    ],
  },
  {
    kind: "showcase", id: "capabilities",
    heading: "Prenez en charge les flux de paiement que votre entreprise utilise déjà",
    intro: "Les fabricants gèrent différents clients, factures, montants de transaction et exigences de paiement.",
    items: [
      { icon: "card", title: "Paiements de factures", desc: "Prenez en charge les encaissements liés aux transactions B2B basées sur facture.", illustration: "invoiceDoc" },
      { icon: "route", title: "Virements bancaires", desc: "Des options basées sur compte pour finaliser les paiements.", illustration: "bankApp" },
      { icon: "wallet", title: "Paiements par carte", desc: "Prenez en charge les paiements par carte lorsqu'ils correspondent à votre modèle.", illustration: "cardTap" },
      { icon: "link", title: "Liens de paiement", desc: "Des parcours de paiement directs pour des factures spécifiques.", illustration: "qrLink" },
      { icon: "clock", title: "Acomptes & étapes", desc: "Des parcours de paiement structurés avec des montants échelonnés.", illustration: "milestoneDeal" },
      { icon: "globe", title: "Multidevises", desc: "Les devises et marchés pertinents lorsqu'ils sont disponibles.", illustration: "currencyExchange" },
      { icon: "users", title: "Encaissements auprès des distributeurs", desc: "À travers les relations avec les distributeurs et les clients professionnels.", illustration: "halima" },
      { icon: "plug", title: "API de paiement", desc: "Connectez les fonctionnalités aux systèmes de votre activité.", illustration: "tobi" },
    ],
  },
  {
    kind: "flow", id: "differentiator",
    heading: "Facilitez la gestion des paiements dans toute votre activité",
    intro: "Être payé n'est qu'une partie du processus. Votre équipe doit aussi suivre, régler et rapprocher les paiements avec les commandes et les factures.",
    steps: ["Commande", "Facture", "Demande de paiement", "Paiement client", "Encaissement", "Règlement", "Rapprochement", "Visibilité financière"],
    bullets: ["Accélérer les encaissements", "Réduire l'intervention manuelle", "Améliorer la visibilité des paiements", "Simplifier le rapprochement", "Renforcer la gestion de trésorerie"],
  },
  {
    kind: "quote", id: "quote",
    text: "Être payé n'est qu'une partie du processus.",
  },
  {
    kind: "split", id: "integration", icon: "building", mock: "yusuf", reverse: true,
    heading: "Connectez les paiements à votre environnement financier existant",
    body: ["Votre entreprise s'appuie déjà sur des systèmes pour gérer la finance et les opérations. L'infrastructure de paiement doit s'intégrer à cet environnement, et non créer un flux de travail isolé de plus."],
    bullets: [
      "Environnement ERP — connectez les flux de paiement aux systèmes qui gèrent votre activité financière.",
      "Flux comptables — prenez en charge les informations que les équipes finance utilisent pour le suivi et le reporting.",
      "API — connectez les fonctionnalités de paiement là où votre environnement technologique l'exige.",
      "Reporting & rapprochement — donnez aux équipes finance accès aux informations de paiement pertinentes.",
    ],
  },
  {
    kind: "textCta", id: "integration-cta",
    heading: "Discutez de vos exigences d'intégration",
    copy: "L'approche d'intégration appropriée dépend de votre ERP, de vos flux comptables, de vos API et de vos besoins de reporting.",
    cta: { label: "Discuter de vos exigences d'intégration", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Gardez les opérations de paiement critiques sûres et fiables",
    intro: "L'infrastructure de paiement affecte le chiffre d'affaires, les relations clients et le reporting financier.",
    items: [
      { title: "Une sécurité qui protège l'activité de paiement", desc: "Normes ISO 27001 et PCI DSS niveau 1, avec un chiffrement qui protège les données de paiement et de transaction." },
      { title: "Conformité et contrôles de paiement", desc: "Les processus KYC et les pistes d'audit des transactions offrent un enregistrement plus clair de l'activité de paiement pertinente." },
      { title: "Une visibilité plus claire des transactions", desc: "Des pistes d'audit numériques de bout en bout fournissent un enregistrement de l'activité de paiement tout au long du parcours transactionnel." },
      { title: "Une infrastructure sur laquelle vous pouvez compter", desc: "Une surveillance de l'infrastructure 24/7 et un SLA de disponibilité de 99 % soutiennent la fiabilité et la continuité." },
    ],
  },
  {
    kind: "list", id: "scale",
    heading: "Conçu pour des opérations manufacturières complexes",
    intro: "Davantage d'entités, de marchés, de clients et de flux de paiement ne devrait pas automatiquement signifier davantage de complexité financière.",
    items: [
      { icon: "building", title: "Entités multiples", desc: "Prenez en charge des opérations de paiement adaptées à travers les entités commerciales et les structures opérationnelles." },
      { icon: "globe", title: "Exigences transfrontalières", desc: "Nigeria, Ghana, Kenya, Côte d'Ivoire, Afrique du Sud, Zambie, Sénégal et Cameroun." },
      { icon: "scale", title: "Exigences multidevises", desc: "Prenez en charge les devises pertinentes lorsqu'elles sont disponibles." },
      { icon: "users", title: "Réseaux de distributeurs", desc: "Gérez les flux de paiement à travers des relations B2B et de distribution plus larges." },
      { icon: "gauge", title: "Activité de paiement croissante", desc: "Prenez en charge les opérations de paiement à mesure que les exigences transactionnelles augmentent." },
    ],
  },
  {
    kind: "cards", id: "solutions", columns: 3,
    heading: "Découvrez d'autres façons de gérer vos opérations de paiement",
    intro: "Les encaissements et le rapprochement ne sont qu'une partie de votre opération de paiement.",
    items: [
      { icon: "card", title: "Encaissements", desc: "Facilitez le paiement pour vos clients et réduisez la friction entre facture et paiement.", href: "/collections", linkLabel: "Découvrir les encaissements" },
      { icon: "plug", title: "API de paiement", desc: "Connectez les fonctionnalités de paiement aux systèmes que votre entreprise utilise déjà.", href: "/payment-api", linkLabel: "Découvrir l'API de paiement" },
      { icon: "route", title: "Décaissements", desc: "Gérez les paiements sortants vers fournisseurs, partenaires ou autres bénéficiaires.", href: "/payouts", linkLabel: "Découvrir les décaissements" },
      { icon: "chart", title: "Analytique & Rapports", desc: "Obtenez une visibilité plus claire sur l'activité de paiement et les informations de règlement.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
      { icon: "clock", title: "Règlement instantané", desc: "Un accès plus rapide aux fonds réglés lorsque disponible pour votre configuration.", href: "/settlements", linkLabel: "Découvrir le règlement instantané" },
    ],
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "textCta", id: "faq-transition",
    heading: "Prêt à examiner votre opération de paiement ?",
    copy: "Parlez avec notre équipe de vos encaissements, de votre processus order-to-cash, de votre environnement financier et de vos exigences de paiement.",
    cta: { label: "Parler aux ventes", href: "/sales" },
  },
];

export default function ManufacturingPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Manufacturing"
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Industrie manufacturière",
          heading: "Infrastructure de paiement conçue pour l'industrie manufacturière",
          subtext: "Encaissez vos factures avec moins de friction, améliorez la visibilité des paiements et renforcez le chemin entre la commande et l'encaissement, sans perturber les flux financiers que votre équipe utilise déjà.",
          primaryCta: { label: "Parler aux ventes", href: "/sales" },
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "API de paiement", href: "/payment-api" },
          { label: "Encaissements", href: "/collections" },
          { label: "Analytique", href: "/analytics" },
        ]}
      />
    </>
  );
}
