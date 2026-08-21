import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Passerelle de paiement Forex pour l'Afrique",
  description: "Aidez les traders à alimenter leurs comptes et à retirer leurs fonds grâce à une infrastructure de paiement conçue pour les entreprises de Forex et de trading à travers les marchés africains.",
  path: "/fr/industries/forex",
  locale: "fr",
  alternatePath: "/industries/forex",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Forex", path: "/fr/industries/forex" },
]);

const faqs = [
  { q: "Payonus prend-il en charge les entreprises de Forex ?", a: "Payonus prend en charge les entreprises de Forex et de trading approuvées en fonction de leur activité, de leurs marchés et de leurs exigences de paiement. Parlez avec notre équipe pour déterminer si votre entreprise correspond à ce profil." },
  { q: "Dans quels pays Payonus opère-t-il ?", a: "Nigeria, Ghana, Kenya, Côte d'Ivoire, Afrique du Sud, Zambie, Sénégal et Cameroun." },
  { q: "Pouvons-nous utiliser Payonus pour les dépôts et les retraits ?", a: "Payonus propose des services d'encaissement et de décaissement qui peuvent prendre en charge les flux de dépôt et de retrait, selon votre activité, vos marchés et votre configuration de paiement approuvée." },
  { q: "Payonus peut-il s'intégrer à notre plateforme de trading ?", a: "Oui. Payonus peut prendre en charge des intégrations approuvées via son API de paiement. L'approche appropriée dépend de votre activité et de vos exigences techniques." },
  { q: "Payonus peut-il prendre en charge un flux de paiement personnalisé ?", a: "Oui. Payonus peut échanger sur des flux de paiement sur mesure lorsque votre entreprise a besoin de plus qu'une configuration standard." },
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
    kind: "bento", id: "challenges", leadMock: "fatima",
    heading: "Quand les paiements ralentissent, les opérations de trading en ressentent l'impact",
    intro: "Un dépôt échoué peut empêcher un trader d'alimenter son compte. Un retrait retardé peut nuire à la confiance et créer davantage de travail pour votre équipe support.",
    items: [
      { icon: "alert", title: "Dépôts échoués", desc: "La friction de paiement peut interrompre l'activité de trading et affecter l'expérience du trader." },
      { icon: "clock", title: "Retraits retardés", desc: "Les retards peuvent générer de la frustration et mettre la pression sur vos équipes support et opérations." },
      { icon: "globe", title: "Marchés différents, exigences différentes", desc: "De nouveaux pays peuvent impliquer des méthodes de paiement différentes et des exigences locales spécifiques." },
      { icon: "refresh", title: "Interruptions de paiement", desc: "Les traders et les équipes internes sont souvent les premiers à ressentir l'impact de paiements peu fiables." },
      { icon: "eye", title: "Visibilité limitée sur les paiements", desc: "Identifier les problèmes et gérer les opérations devient plus difficile sans visibilité." },
      { icon: "layers", title: "Davantage à gérer à mesure que vous grandissez", desc: "L'augmentation des volumes peut rendre les processus plus difficiles à maîtriser." },
    ],
  },
  {
    kind: "list", id: "how-we-help",
    heading: "Offrez à vos traders une meilleure expérience de paiement",
    intro: "De l'alimentation des comptes au traitement des retraits, Payonus aide les entreprises de trading à gérer l'activité de paiement qui fait avancer leurs clients et leurs opérations.",
    items: [
      { icon: "card", title: "Aidez les traders à alimenter leurs comptes", desc: "Prenez en charge les dépôts de compte et facilitez l'entrée de fonds sur les comptes de trading de vos clients.", href: "/collections", linkLabel: "Encaissements" },
      { icon: "route", title: "Gérez les retraits avec moins de friction", desc: "Prenez en charge le mouvement des fonds vers les clients lorsqu'ils effectuent un retrait de leur compte.", href: "/payouts", linkLabel: "Décaissements" },
      { icon: "plug", title: "Connectez les paiements à votre plateforme de trading", desc: "Intégrez Payonus à votre plateforme existante grâce à l'API de paiement appropriée.", href: "/payment-api", linkLabel: "API de paiement" },
      { icon: "clock", title: "Gardez votre entreprise en mouvement entre paiement et règlement", desc: "Gérez le règlement comme partie intégrante de votre opération de paiement globale.", href: "/settlements", linkLabel: "Règlement instantané" },
      { icon: "chart", title: "Voyez ce qui se passe dans vos paiements", desc: "Utilisez les données transactionnelles et les rapports pour suivre l'activité de paiement.", href: "/analytics", linkLabel: "Analytique & Rapports" },
    ],
  },
  {
    kind: "split", id: "differentiation", icon: "layers", mock: "amina", reverse: true,
    heading: "Plus qu'un simple moyen d'accepter les paiements",
    body: [
      "Votre opération de paiement ne commence ni ne s'arrête lorsqu'un trader effectue un dépôt. Vous devez aussi gérer les retraits, gérer le règlement, comprendre ce qui se passe à travers les transactions et connecter les paiements aux systèmes que votre entreprise utilise déjà.",
      "Payonus rapproche ces différentes parties de votre opération de paiement, afin que vous puissiez évaluer un seul partenaire de paiement selon la façon plus globale dont votre entreprise de trading doit faire circuler et gérer l'argent.",
    ],
  },
  {
    kind: "showcase", id: "business-fit",
    heading: "Conçu autour de la façon dont votre entreprise fonctionne",
    intro: "Votre configuration de paiement doit s'adapter à vos marchés, à la façon dont les traders alimentent et retirent de leurs comptes, et aux systèmes que votre entreprise utilise déjà.",
    items: [
      { icon: "globe", title: "Vos marchés", desc: "Là où vous devez accepter et faire circuler l'argent.", illustration: "aisha" },
      { icon: "route", title: "Comment l'argent circule", desc: "Dépôts, retraits et autre activité de paiement.", illustration: "amara" },
      { icon: "plug", title: "Votre plateforme", desc: "Connectez-vous via l'approche d'intégration appropriée.", illustration: "yusuf" },
      { icon: "eye", title: "Votre visibilité", desc: "Suivez ce qui se passe dans l'activité de paiement.", illustration: "amina" },
      { icon: "scale", title: "Votre croissance", desc: "Une configuration qui s'adapte à l'évolution des exigences de votre entreprise.", illustration: "tunde" },
    ],
  },
  {
    kind: "textCta", id: "custom-workflow",
    heading: "Besoin d'une configuration de paiement adaptée à votre flux de travail ?",
    copy: "Certaines entreprises de trading ont besoin de plus qu'une configuration de paiement standard. Parlez à Payonus de la configuration de flux de paiement adaptés à la façon dont votre entreprise encaisse, fait circuler et gère l'argent.",
    cta: { label: "Parler à notre équipe", href: "/sales" },
  },
  {
    kind: "trust", id: "trust", split: true,
    heading: "Une infrastructure qui prend en charge les paiements à grande échelle",
    intro: "Avant de choisir un partenaire de paiement, vous devez avoir la certitude que l'infrastructure derrière lui peut prendre en charge des opérations de paiement sérieuses.",
    items: [
      { title: "ISO 27001", desc: "Sécurité de l'information alignée sur les normes du secteur reconnues." },
      { title: "PCI DSS niveau 1", desc: "Sécurité des paiements alignée sur les exigences PCI DSS niveau 1." },
      { title: "Chiffrement", desc: "Les données de paiement sont protégées à travers l'infrastructure." },
      { title: "KYC & pistes d'audit", desc: "Plus grande visibilité et traçabilité de l'activité de paiement." },
      { title: "Surveillance 24/7", desc: "La surveillance de l'infrastructure soutient des opérations fiables à toute heure." },
      { title: "SLA de disponibilité de 99 %", desc: "Pour des opérations de paiement fiables." },
    ],
  },
  {
    kind: "textCta", id: "qualification",
    heading: "Commencez par les exigences de votre entreprise",
    copy: "Les entreprises de Forex et de trading peuvent avoir des exigences de marché, d'activité et de paiement différentes. Commencez par échanger sur le fonctionnement de votre entreprise et ce que votre configuration doit prendre en charge.",
    cta: { label: "Parler à un spécialiste des paiements", href: "/sales" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "cta", id: "final-cta",
    heading: "Prêt à discuter de vos exigences de paiement ?",
    subtext: "Parlez à l'équipe Payonus de vos marchés d'opération, de la façon dont les traders alimentent et retirent de leurs comptes, et de ce que votre configuration de paiement doit prendre en charge.",
    primaryCta: { label: "Parler aux ventes", href: "/sales" },
  },
];

export default function ForexPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Forex",
          heading: "Passerelle de paiement Forex pour les entreprises de trading à travers l'Afrique",
          subtext: "Aidez les traders à alimenter leurs comptes et à retirer leur argent sans friction de paiement inutile. Payonus prend en charge les entreprises de Forex et de trading avec une infrastructure de paiement pour les dépôts, les retraits et les opérations de paiement qui font avancer le trading.",
          primaryCta: { label: "Parler aux ventes", href: "/sales" },
          geoLine: "Présent au Nigeria, au Ghana, au Kenya, en Côte d'Ivoire, en Afrique du Sud, en Zambie, au Sénégal et au Cameroun.",
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
