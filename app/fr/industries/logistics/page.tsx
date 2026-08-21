import IndustryPage from "../../../IndustryPage";
import JsonLd from "../../../JsonLd";
import { pageMetadata, breadcrumbJsonLd, faqJsonLd } from "../../../seo";
import { IndustryBlock, MARKET_COUNTRIES_FR } from "../../../IndustryBlocks";

export const metadata = pageMetadata({
  title: "Passerelle de paiement pour la logistique et le VTC",
  description: "Encaissez des paiements, gérez les décaissements, prenez en charge le règlement et connectez vos flux de paiement à votre plateforme de logistique ou de VTC avec Payonus.",
  path: "/fr/industries/logistics",
  locale: "fr",
  alternatePath: "/industries/logistics",
});

const breadcrumbs = breadcrumbJsonLd([
  { name: "Accueil", path: "/fr" },
  { name: "Logistique & VTC", path: "/fr/industries/logistics" },
]);

const faqs = [
  { q: "Payonus peut-il prendre en charge les flux de paiement de la logistique et du VTC ?", a: "Oui. Payonus propose des capacités d'encaissement, de décaissement, une API de paiement, l'analytique et des fonctionnalités de règlement pertinentes qui peuvent prendre en charge les flux de paiement dans les opérations de logistique et de VTC. La configuration appropriée dépend de la manière dont votre entreprise encaisse, règle et décaisse les fonds." },
  { q: "Pouvons-nous encaisser les paiements clients et gérer les décaissements via Payonus ?", a: "Payonus prend en charge à la fois les capacités d'encaissement client et les flux de décaissement pertinents. Cela peut aider les entreprises à gérer différentes parties de l'opération de paiement via une infrastructure connectée. Le flux approprié dépend de vos exigences opérationnelles et de marché." },
  { q: "Payonus peut-il s'intégrer à notre plateforme existante ?", a: "Oui. Les organisations peuvent utiliser l'API de paiement Payonus pour connecter l'infrastructure de paiement à leurs plateformes existantes et aux flux pertinents. L'approche d'intégration dépend de vos systèmes, flux de paiement et exigences techniques." },
  { q: "Payonus peut-il prendre en charge des flux de paiement personnalisés ?", a: "Oui. Payonus peut travailler avec les organisations sur des implémentations de paiement sur mesure en fonction de leurs exigences opérationnelles. Il s'agit d'implémentations personnalisées plutôt que de produits standards, donc l'approche appropriée dépend du flux que vous devez prendre en charge." },
  { q: "Payonus peut-il prendre en charge les décaissements vers les chauffeurs ou les partenaires de livraison ?", a: "Oui. Payonus propose des capacités de décaissement qui peuvent prendre en charge les flux de paiement opérationnels pertinents, y compris les paiements aux chauffeurs, coursiers, partenaires de livraison et autres bénéficiaires. L'implémentation appropriée dépend de la structure de votre entreprise et de vos exigences de paiement." },
  { q: "Payonus va-t-il nous obliger à remplacer nos systèmes existants ?", a: "L'objectif est de connecter l'infrastructure de paiement aux systèmes et flux que votre entreprise utilise déjà. L'API de paiement Payonus peut prendre en charge l'intégration dans les environnements technologiques pertinents, l'approche spécifique étant déterminée par votre configuration et vos exigences existantes." },
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
    kind: "bento", id: "reality", leadMock: "halima",
    heading: "Les opérations de paiement ne devraient pas ralentir votre entreprise",
    intro: "Vous encaissez auprès des clients, gérez ce que gagnent les chauffeurs ou partenaires, suivez les transactions, et faites circuler des fonds à travers votre opération. Des processus déconnectés signifient plus de temps passé à gérer des problèmes de paiement plutôt qu'à faire avancer l'entreprise.",
    items: [
      { icon: "card", title: "Gardez les encaissements sur la bonne voie", desc: "Un moyen simple pour les clients de payer trajets, livraisons et autres services." },
      { icon: "route", title: "Gérez les paiements aux chauffeurs et partenaires", desc: "Faites circuler l'argent vers ceux qui font tourner votre opération." },
      { icon: "eye", title: "Savoir où est l'argent", desc: "Une vue claire de ce qui a été encaissé, réglé et décaissé." },
      { icon: "layers", title: "Réduisez le travail manuel", desc: "Les processus déconnectés laissent les équipes courir après l'information." },
      { icon: "plug", title: "Intégration de plateforme", desc: "Connectez l'infrastructure de paiement à la technologie que vous utilisez déjà." },
      { icon: "scale", title: "Complexité croissante", desc: "Prenez en charge une activité croissante sans un flux déconnecté de plus." },
    ],
  },
  {
    kind: "list", id: "value",
    heading: "Faites circuler l'argent dans votre opération avec moins de friction",
    intro: "La bonne infrastructure de paiement devrait permettre à l'argent de circuler dans votre entreprise, pas créer un système de plus à gérer pour votre équipe.",
    items: [
      { icon: "card", title: "Encaissez plus efficacement", desc: "Donnez aux clients des moyens pris en charge de finaliser leurs paiements via votre plateforme." },
      { icon: "route", title: "Prenez en charge les décaissements opérationnels", desc: "Connectez les décaissements aux flux utilisés pour gérer chauffeurs, coursiers et partenaires de livraison." },
      { icon: "eye", title: "Améliorez la visibilité des paiements", desc: "Donnez aux équipes pertinentes une meilleure visibilité sur les encaissements, décaissements et l'activité de paiement." },
      { icon: "plug", title: "Gardez les flux connectés", desc: "Rapprochez les capacités de paiement des systèmes qui font déjà tourner votre opération." },
      { icon: "refresh", title: "Prenez en charge le rapprochement", desc: "Utilisez les informations et rapports de paiement pour la supervision opérationnelle." },
      { icon: "scale", title: "Préparez-vous à la croissance", desc: "Prenez en charge une complexité transactionnelle et opérationnelle plus grande à mesure que vous vous développez." },
    ],
  },
  {
    kind: "cards", id: "capabilities", columns: 3, tint: true,
    heading: "Prenez en charge les flux de paiement derrière votre plateforme",
    intro: "Les entreprises de logistique et de VTC gèrent différents flux de paiement entre clients, plateformes et partenaires opérationnels.",
    items: [
      { icon: "card", title: "Encaissez des paiements", desc: "Prenez en charge l'encaissement des paiements clients grâce aux capacités d'encaissement Payonus.", href: "/collections", linkLabel: "Découvrir les encaissements" },
      { icon: "route", title: "Gérez les décaissements", desc: "Prenez en charge les flux de décaissement pour chauffeurs, coursiers, partenaires de livraison et autres bénéficiaires.", href: "/payouts", linkLabel: "Découvrir les décaissements" },
      { icon: "clock", title: "Prenez en charge le règlement", desc: "Intégrez les services de règlement à vos flux de paiement et de trésorerie.", href: "/settlements", linkLabel: "Découvrir le règlement instantané" },
      { icon: "plug", title: "Connectez via des API", desc: "Intégrez les services de paiement à vos plateformes et flux existants.", href: "/payment-api", linkLabel: "Découvrir l'API de paiement" },
      { icon: "chart", title: "Suivez l'activité de paiement", desc: "Utilisez les capacités d'analytique et de rapport pour maintenir la visibilité.", href: "/analytics", linkLabel: "Découvrir l'analytique & les rapports" },
    ],
  },
  {
    kind: "textCta", id: "workflow-fit",
    heading: "Des flux de paiement adaptés à votre entreprise",
    copy: "Toutes les entreprises de logistique ou de VTC ne font pas circuler l'argent de la même façon. Travaillez avec Payonus pour configurer des flux de paiement adaptés à vos exigences opérationnelles, y compris des flux d'encaissement et de paiement personnalisés.",
    cta: { label: "Parler à notre équipe", href: "/sales" },
  },
  {
    kind: "numberedSteps", id: "settlement-payout", split: true, mock: "kwame",
    heading: "Gardez encaissements, règlement et décaissements connectés",
    intro: "Les opérations de paiement continuent après qu'un client a finalisé une transaction.",
    steps: [
      { title: "Encaisser", desc: "Les paiements clients entrent dans votre flux de paiement." },
      { title: "Régler", desc: "Les fonds circulent via le processus de règlement configuré." },
      { title: "Décaisser", desc: "Les flux de décaissement pris en charge dirigent les fonds vers les bénéficiaires pertinents." },
    ],
  },
  {
    kind: "split", id: "analytics", icon: "chart", mock: "fatima", reverse: true,
    heading: "Voyez ce qui se passe dans vos opérations de paiement",
    body: [
      "À mesure que l'activité transactionnelle croît, la visibilité devient plus importante. Les équipes finance et opérations doivent comprendre ce qui se passe entre encaissements, décaissements et règlement.",
      "Utilisez les capacités d'analytique et de rapport Payonus pour prendre en charge le suivi des paiements, la supervision opérationnelle et le rapprochement de l'activité transactionnelle, de l'activité d'encaissement, de l'activité de décaissement et du statut de règlement.",
    ],
  },
  {
    kind: "trust", id: "security",
    heading: "Conçu avec la sécurité et la conformité à l'esprit",
    intro: "L'infrastructure de paiement gère une activité financière sensible. Les entreprises ont besoin de contrôles, d'enregistrements et de garde-fous opérationnels appropriés.",
    items: [
      { title: "ISO 27001", desc: "Sécurité de l'information alignée sur les normes du secteur reconnues." },
      { title: "PCI DSS niveau 1", desc: "Sécurité des paiements alignée sur les exigences PCI DSS niveau 1." },
      { title: "KYC & pistes d'audit des transactions", desc: "Prise en charge de la vérification et un enregistrement plus clair de l'activité de paiement." },
      { title: "Pistes d'audit numériques de bout en bout", desc: "Un enregistrement numérique de l'activité de paiement tout au long du parcours transactionnel." },
      { title: "Chiffrement", desc: "Les données de paiement sont protégées à travers l'infrastructure." },
      { title: "Surveillance de l'infrastructure 24/7", desc: "Une surveillance continue soutient des opérations de paiement fiables." },
      { title: "SLA de disponibilité de 99%", desc: "Soutenir la fiabilité et la continuité de l'activité de paiement critique." },
    ],
  },
  {
    kind: "markets", id: "markets",
    heading: "Prenez en charge vos opérations dans les principaux marchés africains",
    intro: "Payonus opère dans 8 marchés africains, aidant les organisations avec une infrastructure de paiement à travers leurs opérations régionales.",
    countries: MARKET_COUNTRIES_FR,
  },
  {
    kind: "showcase", id: "why",
    heading: "Pourquoi les opérations en croissance ont besoin d'une infrastructure de paiement flexible",
    intro: "À mesure que votre opération grandit, l'infrastructure de paiement doit s'adapter à la façon dont l'argent, la technologie et les responsabilités opérationnelles circulent dans l'entreprise.",
    items: [
      { icon: "route", title: "Conçu autour de votre flux", desc: "Connectez l'infrastructure aux systèmes qui font déjà tourner votre entreprise.", illustration: "kwame" },
      { icon: "card", title: "Encaissements et décaissements", desc: "Prenez en charge à la fois l'encaissement client et les flux de décaissement opérationnels.", illustration: "cardTap" },
      { icon: "plug", title: "Intégration basée sur des API", desc: "Intégrez les capacités de paiement à votre plateforme existante.", illustration: "yusuf" },
      { icon: "scale", title: "Implémentation flexible", desc: "Des implémentations sur mesure pour des flux de paiement spécialisés.", illustration: "tobi" },
      { icon: "globe", title: "Opérations régionales", desc: "Prenez en charge les exigences dans les marchés Payonus approuvés.", illustration: "aisha" },
    ],
  },
  {
    kind: "cta", id: "decision",
    heading: "Prêt à construire une opération de paiement adaptée à votre entreprise ?",
    subtext: "Dites-nous comment votre entreprise encaisse les paiements, gère le règlement et gère les décaissements. Nous pouvons examiner votre plateforme, vos flux de paiement et vos exigences opérationnelles pour déterminer où Payonus peut s'intégrer.",
    primaryCta: { label: "Parler aux ventes", href: "/sales" },
    secondaryCta: { label: "Découvrir l'API de paiement Payonus", href: "/payment-api" },
  },
  {
    kind: "faq", id: "faq",
    heading: "Questions fréquentes",
    items: faqs,
  },
  {
    kind: "textCta", id: "faq-transition",
    heading: "Prêt à examiner votre opération de paiement ?",
    copy: "Parlez avec l'équipe Payonus de la façon dont l'argent circule dans votre entreprise, de l'encaissement client au règlement et au décaissement.",
    cta: { label: "Parler aux ventes", href: "/sales" },
  },
];

export default function LogisticsPageFr() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <IndustryPage
        industryName="Logistics & Ride-Hailing"
        locale="fr"
        hero={{
          eyebrow: "Secteurs / Logistique & VTC",
          heading: "Infrastructure de paiement pour les entreprises de logistique et de VTC",
          subtext: "Encaissez les paiements clients, gérez les décaissements opérationnels et gardez le règlement connecté aux systèmes qui font tourner votre entreprise.",
          primaryCta: { label: "Parler aux ventes", href: "/sales" },
          secondaryCta: { label: "Découvrir l'API de paiement Payonus", href: "/payment-api" },
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
