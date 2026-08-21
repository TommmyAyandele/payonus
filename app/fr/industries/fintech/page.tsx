import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock, MARKET_COUNTRIES_FR } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Infrastructure de paiement pour les fintechs et entreprises financières en Afrique",
  description: "Infrastructure de paiement sécurisée et évolutive pour les fintechs et entreprises financières dans 8 marchés africains. Prenez en charge la façon dont vous encaissez, déplacez, réglez et gérez les paiements avec Payonus.",
  path: "/fr/industries/fintech",
  locale: "fr",
  alternatePath: "/industries/fintech",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Fintech", path: "/fr/industries/fintech" },
]);

const faqs = [
  { q: "Payonus peut-il accompagner une entreprise comme la nôtre ?", a: "Payonus peut prendre en charge différents modèles d'entreprises de services financiers, notamment les fintechs, les PSP, les entreprises de crédit, les sociétés de transfert d'argent, ainsi que les entreprises de portefeuille et de paiement. La configuration appropriée dépend de vos flux de paiement et de vos exigences." },
  { q: "Payonus peut-il fonctionner avec nos systèmes existants ?", a: "Oui. Payonus propose une API de paiement qui peut connecter les capacités de paiement pertinentes à vos plateformes et flux existants." },
  { q: "Quelles capacités de paiement Payonus propose-t-il ?", a: "Encaissement, décaissement, règlement instantané, API de paiement, et analytique & rapports." },
  { q: "Pouvons-nous suivre l'activité de paiement ?", a: "Oui. Analytique & Rapports offre une visibilité sur l'activité de paiement et la performance des transactions." },
  { q: "Comment Payonus assure-t-il la sécurité ?", a: "Payonus maintient les certifications ISO 27001 et PCI DSS niveau 1, utilise le chiffrement et applique des processus KYC ainsi que des pistes d'audit des transactions." },
  { q: "Payonus surveille-t-il son infrastructure ?", a: "Oui. Payonus assure une surveillance de l'infrastructure 24/7 et maintient un SLA de disponibilité de 99 %." },
  { q: "Payonus peut-il accompagner notre entreprise à mesure qu'elle se développe ?", a: "Les capacités de Payonus peuvent être envisagées en fonction de l'évolution des exigences de paiement, techniques et opérationnelles à mesure que votre entreprise se développe." },
  { q: "Pouvons-nous parler à quelqu'un avant de décider ?", a: "Oui. Vous pouvez discuter de vos flux de paiement, exigences d'intégration et besoins opérationnels avec l'équipe Payonus afin de déterminer s'il existe une adéquation appropriée." },
];
const faqSchema = faqJsonLd(faqs);

const blocks: IndustryBlock[] = [
  {
    kind: "stats", id: "stats", tint: false,
    items: [
      { value: "8", label: "Marchés africains" },
      { value: "99%", label: "SLA de disponibilité" },
      { value: "24/7", label: "Surveillance de l'infrastructure" },
    ],
  },
  {
    kind: "list", id: "recognition",
    heading: "Conçu pour la façon dont les entreprises financières font circuler l'argent",
    intro: "Que vous construisiez un produit fintech, exploitiez des services de paiement, accordiez des crédits à des clients ou fassiez circuler de l'argent à travers les marchés, les paiements sont au cœur du fonctionnement de votre entreprise. Les banques constituent un élément important de l'écosystème de paiement plus large — Payonus fournit une infrastructure de paiement pour les entreprises qui y opèrent.",
    items: [
      { icon: "bolt", title: "Fintechs", desc: "Intégrez des capacités de paiement aux produits et expériences que vos clients utilisent." },
      { icon: "link", title: "Prestataires de services de paiement", desc: "Prenez en charge les flux de paiement impliqués dans l'aide aux marchands et entreprises pour encaisser et faire circuler l'argent." },
      { icon: "wallet", title: "Entreprises de crédit", desc: "Gérez les flux de paiement impliqués dans l'encaissement des remboursements et l'envoi de fonds aux emprunteurs." },
      { icon: "globe", title: "Sociétés de transfert d'argent", desc: "Prenez en charge l'activité de paiement impliquée dans la réception et la circulation des fonds tout au long des parcours clients." },
      { icon: "card", title: "Entreprises de portefeuille et de paiement", desc: "Connectez l'infrastructure de paiement à la façon dont les utilisateurs alimentent, utilisent et font circuler l'argent via votre plateforme." },
      { icon: "layers", title: "Autres entreprises de services financiers", desc: "Explorez les capacités de paiement en fonction de la façon dont votre entreprise encaisse, déplace, règle et gère les fonds." },
    ],
  },
  {
    kind: "bento", id: "challenges", leadMock: "fatima",
    heading: "Lorsque les paiements deviennent plus difficiles à gérer, le reste de l'entreprise en ressent l'impact",
    intro: "À mesure qu'une entreprise financière se développe, davantage de clients, de transactions, de produits et de marchés peuvent générer plus de complexité de paiement — sans pour autant créer plus de friction pour les clients ni plus de travail manuel pour votre équipe.",
    items: [
      { icon: "card", title: "Facilitez le paiement pour les clients et utilisateurs", desc: "Des moyens fiables d'encaisser des fonds sans friction inutile dans le parcours client." },
      { icon: "route", title: "Faites circuler l'argent sans travail opérationnel supplémentaire", desc: "Payer clients, utilisateurs, marchands ou partenaires peut devenir plus difficile lorsque les flux de décaissement sont fragmentés." },
      { icon: "clock", title: "Sachez quand les fonds sont disponibles", desc: "Le calendrier et la visibilité du règlement peuvent affecter la trésorerie, le rapprochement et les opérations quotidiennes." },
      { icon: "layers", title: "Cessez de gérer les paiements sur des systèmes déconnectés", desc: "Des systèmes séparés signifient plus de temps passé à gérer les intégrations et à rapprocher l'activité." },
      { icon: "eye", title: "Visualisez ce qui se passe dans vos paiements", desc: "Des données de paiement dispersées compliquent l'obtention d'une vue claire de l'activité." },
      { icon: "globe", title: "Développez-vous sans complexité inutile", desc: "De nouveaux marchés peuvent introduire des environnements de paiement et des exigences opérationnelles différents." },
      { icon: "shield", title: "Sécurité et responsabilisation", desc: "Une activité de paiement croissante nécessite une infrastructure qui prend en charge la sécurité et la surveillance." },
    ],
  },
  {
    kind: "quote", id: "quote",
    text: "Vous ne devriez pas avoir à reconstruire votre entreprise autour de votre infrastructure de paiement.",
  },
  {
    kind: "list", id: "help",
    heading: "Une infrastructure conçue autour de ce que vos opérations de paiement doivent accomplir",
    intro: "Payonus réunit des capacités de paiement qui peuvent prendre en charge la façon dont votre entreprise accepte l'argent, déplace des fonds, gère le règlement et suit l'activité de paiement.",
    items: [
      { icon: "card", title: "Facilitez le paiement des clients et utilisateurs", desc: "Connectez les flux d'encaissement aux produits et expériences que vos clients utilisent déjà.", href: "/collections", linkLabel: "Découvrir l'encaissement" },
      { icon: "route", title: "Faites circuler l'argent là où il doit aller", desc: "Prenez en charge les flux de paiement qui envoient des fonds aux clients, utilisateurs, marchands, partenaires ou autres bénéficiaires.", href: "/payouts", linkLabel: "Découvrir le décaissement" },
      { icon: "clock", title: "Accédez plus rapidement aux fonds réglés là où c'est important", desc: "Prenez en charge les opérations de paiement où la rapidité du règlement et l'accès aux fonds réglés affectent la gestion de l'entreprise.", href: "/settlements", linkLabel: "Découvrir le règlement instantané" },
      { icon: "plug", title: "Intégrez les paiements dans votre produit plutôt qu'autour de lui", desc: "Connectez les capacités de paiement aux produits, plateformes et flux que votre entreprise exploite déjà.", href: "/payment-api", linkLabel: "Découvrir l'API de paiement" },
      { icon: "chart", title: "Visualisez ce qui se passe sans assembler manuellement les données", desc: "Obtenez une visibilité sur l'activité de paiement et la performance des transactions pour soutenir vos décisions opérationnelles.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
    ],
  },
  {
    kind: "numberedSteps", id: "technical-fit",
    heading: "Une infrastructure de paiement qui peut s'intégrer à votre environnement existant",
    intro: "Payonus peut être envisagé en fonction de vos produits, systèmes, flux et exigences de paiement existants.",
    steps: [
      { title: "Connectez-vous via l'API de paiement", desc: "Intégrez les capacités de paiement Payonus pertinentes à vos plateformes et flux existants.", href: "/payment-api", linkLabel: "Découvrir l'API de paiement" },
      { title: "Rapprochez les flux de paiement associés", desc: "Encaissements, décaissements, règlement et rapports peuvent soutenir un environnement de paiement plus connecté." },
      { title: "Commencez par les exigences de votre entreprise", desc: "La configuration appropriée dépend de vos flux de paiement, de votre environnement technique et de vos besoins opérationnels." },
      { title: "Suivez l'activité de paiement", desc: "Utilisez Analytique & Rapports pour suivre l'activité de paiement et la performance des transactions.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
      { title: "Évaluez Payonus à mesure que vous vous développez", desc: "Payonus opère dans 8 marchés africains et peut être évalué à mesure que vos exigences évoluent." },
    ],
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Conçu pour des opérations de paiement sécurisées et responsables",
    intro: "L'infrastructure de paiement est un élément critique d'une entreprise financière. La sécurité, la surveillance et la responsabilisation comptent autant que les fonctionnalités de paiement.",
    items: [
      { title: "ISO 27001", desc: "Fait partie du cadre de sécurité de l'information de Payonus." },
      { title: "PCI DSS niveau 1", desc: "Conformité pour la sécurité des paiements." },
      { title: "Chiffrement", desc: "Protège les données de paiement dans toute l'infrastructure." },
      { title: "KYC & pistes d'audit des transactions", desc: "Visibilité et responsabilisation dans l'activité de paiement." },
      { title: "Surveillance de l'infrastructure 24/7", desc: "Soutient des opérations de paiement fiables." },
      { title: "SLA de disponibilité de 99 %", desc: "Un engagement de disponibilité défini." },
    ],
  },
  {
    kind: "numberedSteps", id: "implementation",
    heading: "Commencez par votre environnement de paiement",
    intro: "La configuration appropriée dépend de la façon dont votre entreprise fonctionne déjà. Le processus commence par la compréhension de vos besoins avant de déterminer comment Payonus peut s'intégrer.",
    steps: [
      { title: "Comprendre vos exigences de paiement", desc: "Discutez de votre modèle de paiement, de vos flux, de vos besoins opérationnels et de votre environnement de paiement existant." },
      { title: "Examiner votre environnement technique", desc: "Identifiez les systèmes, API et flux qui pourraient devoir se connecter." },
      { title: "Déterminer la configuration appropriée", desc: "Identifiez les capacités Payonus pertinentes pour vos exigences." },
      { title: "Connecter les capacités pertinentes", desc: "Intégrez via le flux technique approprié, y compris l'API de paiement le cas échéant.", href: "/docs", linkLabel: "Découvrir la documentation développeur" },
      { title: "Accompagner la transition", desc: "Travaillez avec l'équipe Payonus sur les exigences techniques et opérationnelles de l'implémentation." },
    ],
  },
  {
    kind: "list", id: "outcomes", numbered: true,
    heading: "Passez moins de temps à composer avec les paiements et plus de temps à développer votre entreprise",
    intro: "La valeur d'une infrastructure de paiement réside dans ce qu'elle permet à votre entreprise de faire avec moins de friction et de complexité.",
    items: [
      { icon: "route", title: "Gardez les opérations de paiement en mouvement", desc: "Prenez en charge des flux d'encaissement, de décaissement et de règlement adaptés aux besoins de votre entreprise." },
      { icon: "card", title: "Réduisez la friction dans les parcours de paiement", desc: "Créez des expériences de paiement plus connectées pour les clients, utilisateurs et autres bénéficiaires." },
      { icon: "layers", title: "Réduisez la complexité opérationnelle inutile", desc: "Réunissez les capacités de paiement pertinentes dans un environnement plus coordonné." },
      { icon: "eye", title: "Obtenez une visibilité plus claire sur l'activité de paiement", desc: "Utilisez Analytique & Rapports pour comprendre l'activité de paiement et soutenir vos décisions opérationnelles.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
      { icon: "globe", title: "Soutenez la croissance à travers les marchés", desc: "Évaluez Payonus dans ses 8 marchés africains actuels à mesure que vos exigences de paiement évoluent." },
      { icon: "plug", title: "Modernisez l'intégration des paiements dans votre produit", desc: "Connectez les capacités de paiement aux produits et flux existants via une infrastructure basée sur des API." },
      { icon: "scale", title: "Accompagnez l'évolution des exigences de l'entreprise", desc: "Envisagez des capacités de paiement en fonction de l'évolution des besoins clients, produits et opérationnels." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3,
    heading: "L'infrastructure de paiement derrière vos opérations",
    intro: "Chaque entreprise financière a des besoins de paiement différents. Payonus réunit l'infrastructure qui peut prendre en charge la façon dont votre entreprise accepte l'argent, déplace des fonds, gère le règlement et suit l'activité de paiement.",
    items: [
      { icon: "card", title: "Encaissement", desc: "Prenez en charge la façon dont votre entreprise accepte et gère les paiements entrants.", href: "/collections", linkLabel: "Découvrir l'encaissement" },
      { icon: "route", title: "Décaissement", desc: "Faites circuler des fonds vers les clients, utilisateurs, marchands, partenaires et autres bénéficiaires.", href: "/payouts", linkLabel: "Découvrir le décaissement" },
      { icon: "clock", title: "Règlement instantané", desc: "Prenez en charge les opérations de paiement où la rapidité du règlement compte.", href: "/settlements", linkLabel: "Découvrir le règlement instantané" },
      { icon: "plug", title: "API de paiement", desc: "Connectez les capacités de paiement à vos produits, plateformes et flux existants.", href: "/payment-api", linkLabel: "Découvrir l'API de paiement" },
      { icon: "chart", title: "Analytique & Rapports", desc: "Obtenez une visibilité sur l'activité de paiement et la performance des transactions.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
    ],
  },
  {
    kind: "markets", id: "markets",
    heading: "Prenez en charge vos opérations de paiement dans 8 marchés africains",
    intro: "Payonus opère actuellement dans :",
    countries: MARKET_COUNTRIES_FR,
    ctaLabel: "Discutez de vos exigences de marché avec un spécialiste des paiements",
    ctaHref: "/sales",
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Voyons si Payonus correspond à vos opérations de paiement",
    subtext: "Dites-nous comment votre entreprise accepte, déplace et gère l'argent. Nous discuterons de votre environnement de paiement, de vos exigences d'intégration et des capacités pertinentes pour votre entreprise.",
    primaryCta: { label: "Parler à un spécialiste des paiements", href: "/sales" },
  },
];

export default function FintechPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Fintech",
          heading: "Infrastructure de paiement pour les entreprises financières à travers l'Afrique",
          subtext: "Facilitez l'acceptation des paiements, la circulation de l'argent, la gestion du règlement et le suivi de l'activité de paiement grâce à une infrastructure conçue pour accompagner les entreprises financières dans 8 marchés africains.",
          primaryCta: { label: "Contacter les ventes", href: "/sales" },
          trustLine: "ISO 27001 · PCI DSS niveau 1 · SLA de disponibilité de 99 %",
        }}
        blocks={blocks}
        relatedLinks={[
          { label: "API de paiement", href: "/payment-api" },
          { label: "Décaissements", href: "/payouts" },
          { label: "Sécurité", href: "/security" },
        ]}
      />
    </>
  );
}
