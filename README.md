# mon-portfolio

Portfolio personnel développé avec Next.js

Portfolio **Next.js** généré par le Software Template Backstage `portfolio-nextjs-template`.

## Contenu

| Fichier | Rôle |
| --- | --- |
| `app/`, `data/profile.js` | Application Next.js (App Router) et données du portfolio |
| `app/api/health` | Endpoint de santé (`/api/health`) |
| `Dockerfile`, `.dockerignore` | Conteneurisation (multi-étapes, sortie Next.js *standalone*) |
| `docker-compose.yml` | Déploiement local sur http://localhost:3000 |
| `.github/workflows/ci-cd.yml` | Build + publication de l'image sur Docker Hub (`workflow_dispatch`) |
| `catalog-info.yaml` | Métadonnées du composant pour le Backstage Catalog |

## Cycle de livraison (tout depuis Backstage)

1. **Create → `Livraison du Portfolio`** : déclenche le workflow GitHub Actions (build, image Docker `omelkir/portfolio-nextjs:<version>`, push Docker Hub), puis déploie en local avec Docker Compose et vérifie `/api/health`.
2. **Create → `Évolution du Portfolio`** : modifie le code (Pull Request fusionnée automatiquement) puis relance toute la chaîne avec une nouvelle version.

## Image

```
omelkir/portfolio-nextjs:<version>
```

## Développement local (optionnel)

```bash
npm install
npm run dev   # http://localhost:3000
```
