# Bois Pratique

Site Astro bilingue FR/EN pour un média éditorial sur le travail du bois.

## Ce qui est prêt

- structure FR + EN
- catégories dynamiques
- cartes d’articles avec visuels
- héros d’articles / OG images simples
- 10 articles FR de départ
- 10 articles EN de départ
- pages légales, RSS et sitemap

## Commandes

- `npm run dev` — développement local
- `npm run build` — build de production
- `npm run preview` — preview locale

## Arborescence utile

- `src/content/fr/` — contenus français
- `src/content/en/` — contenus anglais
- `public/images/articles/` — visuels d’articles
- `public/images/categories/` — visuels de rubriques
- `src/pages/[category]/` — routes FR
- `src/pages/en/[category]/` — routes EN

## Suite logique

1. remplacer les SVG de départ par de vraies images
2. enrichir les articles EN complets
3. brancher analytics + consentement
4. déployer sur Vercel, Netlify ou Cloudflare Pages
