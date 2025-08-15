// --- Données éditables -------------------------------------------------------
export const PROFILE = {
  name: "Nadir (Nad)",
  role: "Développeur Front‑end / JavaScript",
  bio: "Je crée des sites vitrines rapides, accessibles et orientés business (SEO, conversion).",
  email: "contact@nad.dev",
  location: "Île‑de‑France",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username/",
};

// Projets fictifs — uniquement des sites vitrines
export const PROJECTS = [
  {
    id: "vitrine-immo",
    title: "Agence Immobilière Altimo",
    year: 2025,
    tags: ["React", "Vitrine", "SEO", "Formulaire"],
    description: "Site vitrine d’agence immobilière avec annonces mises en avant.",
    details:
      "Conception d’une architecture claire pour présenter les biens, formulaires de contact par bien et pages quartiers. Optimisations SEO (schema.org RealEstateAgent), temps de chargement < 1s sur les pages clés et balisage meta dynamique. Intégration d’un module d’avis clients et d’un calculateur de capacité d’emprunt simplifié.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-photo",
    title: "Studio Photo Lumen",
    year: 2025,
    tags: ["React", "UI", "Vitrine", "Galerie", "SEO"],
    description: "Vitrine pour photographe avec galerie filtrable et tarifs.",
    details:
      "Galerie masonry optimisée (lazy‑loading, LCP < 2s), pages services (mariage, corporate), CTA clairs et calendrier de disponibilités. Structure sémantique soignée (H1/H2), Open Graph pour le partage social et micro‑données pour les prestations. Système de témoignages et packshot avant/après.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-banque",
    title: "Agence Bancaire NovaBank",
    year: 2024,
    tags: ["React", "Vitrine", "Formulaire", "Accessibilité"],
    description: "Site vitrine d’agence bancaire locale avec prise de RDV.",
    details:
      "Parcours d’accompagnement (ouvrir un compte, épargne, pro) avec pages d’atterrissage dédiées. Formulaires multi‑étapes accessibles (labels, aria‑describedby) et routage clair. Pages légales (mentions, RGPD) et traduction FR/EN. Tableau de frais transparent et simulateurs illustratifs (non contractuels).",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-restaurant",
    title: "Restaurant Côte & Basilic",
    year: 2024,
    tags: ["React", "UI", "Vitrine", "Menu", "SEO"],
    description: "Vitrine restaurant avec menu, photos et réservation.",
    details:
      "Menu administrable (catégories, allergènes), horaires dynamiques et intégration Google Maps. Optimisation locale (LocalBusiness), balisage des avis et des plats populaires. Mise en avant du midi (formules) et calculateur simple d’itinéraire. Animations légères pour les sections clés (apparition des plats).",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-avocat",
    title: "Cabinet d’Avocat Eléanor",
    year: 2025,
    tags: ["React", "Vitrine", "Formulaire", "SEO"],
    description: "Site vitrine cabinet d’avocat (droit de la famille).",
    details:
      "Arborescence claire (domaines, honoraires, FAQ), prise de rendez‑vous, et pages de contenu optimisées pour la longue traîne (questions fréquentes). Témoignages, charte graphique sobre, et chargement prudent des polices pour améliorer le CLS. Pages guides (divorce, pension) avec appels à l’action progressifs.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-architecte",
    title: "Atelier d’Architecture Arcadia",
    year: 2023,
    tags: ["React", "UI", "Vitrine", "Portfolio", "Accessibilité"],
    description: "Vitrine d’architecte avec portfolio de réalisations.",
    details:
      "Grille de projets avec fiches détaillées (programme, matériaux, coûts indicatifs). Navigation par filtres (logement, tertiaire) et mise en récit des études de cas. Pages personnelles de l’équipe, manifeste, et section actualités pour le référencement.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-hotel",
    title: "Hôtel Boutique L’Atelier",
    year: 2023,
    tags: ["React", "Vitrine", "Réservation", "SEO"],
    description: "Vitrine hôtel avec chambres, services et demandes de devis.",
    details:
      "Fiches chambres (équipements, photos HD), page SPA et restaurant, et intégration d’un moteur de demande de devis (non‑transactionnel). Optimisation Core Web Vitals via images responsives et préchargement conditionnel. Contenus multilingues et cartes de quartier.",
    live: "#",
repo: "#",
  },
  {
    id: "vitrine-dentiste",
    title: "Clinique Dentaire Blanche",
    year: 2024,
    tags: ["React", "UI", "Vitrine", "Formulaire", "SEO"],
    description: "Vitrine clinique dentaire avec prise de contact rapide.",
    details:
      "Pages traitements (implants, blanchiment) avec visuels pédagogiques et section questions. Formulaire de pré‑diagnostic (texte + photo) et messages d’alerte. Optimisation locale et annuaire santé. Respect des contrastes pour l’accessibilité.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-agence-creative",
    title: "Agence Créative Noctua",
    year: 2025,
    tags: ["React", "Vitrine", "Portfolio", "SEO"],
    description: "Vitrine d’agence créative avec sélection de cas clients.",
    details:
      "Études de cas détaillées (brief, process, résultats), section services packagés et formulaire de brief rapide. Micro‑animations, pages d’offre SEO et intégration d’un formulaire de devis. Mise en place d’un blog pour la capture de trafic organique.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-association",
    title: "Association Sportive Rivages",
    year: 2024,
    tags: ["React", "UI", "Vitrine", "Calendrier", "SEO"],
    description: "Vitrine associative avec actualités et calendrier.",
    details:
      "Publication des matchs/événements, annuaire des équipes et page dons. Optimisation pour recherches locales et accessibilité renforcée pour la lecture sur mobile.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-ecole-danse",
    title: "École de Danse Équinoxe",
    year: 2023,
    tags: ["React", "UI", "Vitrine", "Planning", "Formulaire"],
    description: "Vitrine d’école avec planning et inscriptions.",
    details:
      "Planning par niveaux, fiches cours, portraits profs et formulaire d’inscription. Galerie d’événements et section partenaires. Pages d’actualité pour SEO saisonnier.",
    live: "#",
    repo: "#",
  },
  {
    id: "vitrine-coiffeur",
    title: "Salon de Coiffure Rue 27",
    year: 2023,
    tags: ["React", "UI", "Vitrine", "Tarifs", "SEO"],
    description: "Vitrine salon avec tarifs, galerie et contact rapide.",
    details:
      "Tarifs clairs (H/F, juniors), galerie avant/après, prise de contact rapide et carte. Focus sur les requêtes locales (quartier + service).",
    live: "#",
    repo: "#",
  },
];

// --- Utilitaires --------------------------------------------------------------
export const uniqueTags = (projects) => Array.from(new Set(projects.flatMap((p) => p.tags)));
export const filterByTag = (projects, tag) => (tag === "Tous" ? projects : projects.filter((p) => p.tags.includes(tag)));
