// Données du portfolio. Générées par le Software Template Backstage.
export const profile = {
  fullName: "Omelkhir Rebei",
  jobTitle: "Ingénieur DevOps",
  bio: "Passionné par le cloud, l'automatisation et la culture DevOps.",
  location: "Casablanca, Maroc",
  email: "omelkirrebei22@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  skills: "Docker, Kubernetes, CI/CD, Linux, Next.js"
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
};

export const projects = [
  {
    name: 'Site e-commerce',
    description: 'Boutique en ligne responsive avec panier et paiement.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Application de gestion de tâches',
    description: 'Tableau kanban collaboratif avec notifications temps réel.',
    stack: ['React', 'WebSocket', 'MongoDB'],
  },
  {
    name: 'API de suivi de données',
    description: 'API REST documentée (OpenAPI) pour le suivi de capteurs.',
    stack: ['Node.js', 'Express', 'Docker'],
  },
];
