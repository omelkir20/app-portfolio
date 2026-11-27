// Données du portfolio — mises à jour par le Software Template "portfolio-evolve-template".
export const profile = {
  fullName: "Omelkhir Rebei ",
  jobTitle: "Ingénieur DevOps & Cloud",
  bio: "Ingénieur DevOps spécialisé en Platform Engineering, conteneurisation et automatisation CI/CD.",
  location: "Tozeur",
  email: "omelkirrebei22@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  skills: "Docker, Kubernetes, Terraform, GitHub Actions, Backstage, Next.js"
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

// Nouvelle section : Certifications
export const certifications = [{"name":"Docker Certified Associate","issuer":"Docker","year":"2025"},{"name":"Certified Kubernetes Administrator (CKA)","issuer":"CNCF","year":"2025"}];

// Nouvelle section : Projets DevOps & Cloud
export const devopsProjects = [{"name":"Plateforme développeur Backstage","description":"Portail développeur automatisant création, build, publication et déploiement d'un portfolio.","stack":"Backstage, GitHub Actions, Docker"},{"name":"Infrastructure as Code","description":"Provisionnement d'une infrastructure cloud reproductible.","stack":"Terraform, AWS, Ansible"}];
