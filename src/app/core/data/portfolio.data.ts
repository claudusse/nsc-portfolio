export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  impact: string;
  tools: string[];
  accent: string;
  image?: string;
  galleryImages?: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Power Platform',
    icon: '⚡',
    items: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse'],
  },
  {
    title: 'Microsoft 365',
    icon: '☁️',
    items: ['SharePoint', 'Teams', 'Forms', 'OneDrive', 'Exchange Online'],
  },
  {
    title: 'Digitalisation',
    icon: '📊',
    items: ['Workflow métier', 'Reporting exécutif', 'Automatisation', 'Validation multi-niveaux'],
  },
  {
    title: 'Développement',
    icon: '💻',
    items: ['Angular', 'Laravel', 'PHP', 'MySQL', 'API REST'],
  }
];

export const projects: Project[] = [
  {
    title: 'Application de gestion des demandes internes',
    category: 'Power Apps / SharePoint',
    description: 'Fiches de demandes internes basées sur des listes Sharepoint',
    impact: 'Réduction des traitements manuels et meilleure traçabilité des demandes.',
    tools: ['Power Apps', 'SharePoint', 'Power Automate'],
    accent: 'linear-gradient(135deg, #00a4ef, #6d5dfc)',
    image: 'assets/images/projects/aec.png',
    galleryImages: [
      'assets/images/projects/aec.png',
      'assets/images/projects/aec-2.png',
      'assets/images/projects/aec-3.png',
    ],
  },
  {
    title: 'Programme d\'évaluation de bourses d\'études',
    category: 'Power Apps',
    description: 'Processus d\'évaluation des demandes',
    impact: 'Elaboration du profil du candidat, reception et centralisation des données',
    tools: ['Power Apps', 'Teams', 'Outlook', 'SharePoint'],
    accent: 'linear-gradient(135deg, #43d9ad, #00a4ef)',
    image: 'assets/images/projects/beEnriched.png',
    galleryImages: [
      'assets/images/projects/beEnriched.png',
      'assets/images/projects/beEnriched-2.png',
      'assets/images/projects/beEnriched-3.png',
    ],
  },
  {
    title: 'Dashboard décisionnel de performance',
    category: 'Power BI',
    description: 'Tableau de bord avec indicateurs clés, filtres dynamiques et analyse par période, service et statut.',
    impact: 'Vision claire pour la direction et prise de décision plus rapide.',
    tools: ['Power BI', 'Excel', 'SQL', 'SharePoint List'],
    accent: 'linear-gradient(135deg, #f7c948, #00a4ef)',
    image: 'assets/images/projects/dash.png',
    galleryImages: [
      'assets/images/projects/dash.png',
      'assets/images/projects/dash-2.png',
      'assets/images/projects/dash-3.png',
    ],
  },
  {
    title: 'Plateforme de gestion de planning et activites des inspecteurs',
    category: 'Solution métier',
    description: 'Prototype de gestion et optimisation des plannings',
    impact: 'Meilleure visibilité du temps de travail, suivi des livrables et calcul du taux de saturation',
    tools: ['Angular', 'Laravel', 'Power BI', 'MySQL'],
    accent: 'linear-gradient(135deg, #6d5dfc, #43d9ad)',
    image: 'assets/images/projects/planner.png',
    galleryImages: [
      'assets/images/projects/planner.png',
      'assets/images/projects/planner-2.png',
      'assets/images/projects/planner-2.png',
    ],
  },
  {
    title: 'People on Board',
    category: 'Solution métier',
    description: 'Une solution orienée RH pour gérer le parcours d\'un agent',
    impact: 'Suivi d\'un parcours agent',
    tools: ['Power Apps', 'Dataverse', 'Power BI'],
    accent: 'linear-gradient(135deg, #6d5dfc, #43d9ad)',
    image: 'assets/images/projects/PoB.png',
    galleryImages: [
      'assets/images/projects/PoB.png',
      'assets/images/projects/PoB-2.png',
      'assets/images/projects/PoB-3.png',
    ],
  },
  {
    title: 'Intranet',
    category: 'Sharepoint',
    description: 'Portail interne de communication et collaboration',
    impact: 'Permettre aux agents de rester informer sur les élemnts en interne et de mieux collaborer',
    tools: ['Sharepoint', 'Teams', 'Lists'],
    accent: 'linear-gradient(135deg, #6d5dfc, #43d9ad)',
    image: 'assets/images/projects/adw.png',
    galleryImages: [
      'assets/images/projects/adw.png',
      'assets/images/projects/adw-2.png',
      'assets/images/projects/adw-3.png',
    ],
  },
];

export const experiences = [
  {
    year: 'Depuis 2025',
    title: 'Consultant Microsoft 365 / Power Platform',
    description: 'Conception de solutions digitales orientées automatisation, collaboration et reporting.',
  },
  {
    year: '2021 - 2024',
    title: 'IT ANALYSTE PROGRAMMEUR - BUREAU VERITAS CI',
    description: 'Elaboration des états d\'analyse sur Power BI, Conception des applications via Powerapps, gestion de données, Automatisation des processus metiers workflows via Power automate...',
  },
  {
    year: '2018 - 2020',
    title: 'CONSULTANT IT - EBURNETECH',
    description: 'Collaboration sur des projets à travers différents langages de programmation et des outils autour d\'office 365, Developpement du site web de la COP 15',
  },
];
