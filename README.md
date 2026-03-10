# Bois Pratique

Site Astro bilingue FR/EN pour un média éditorial sur le travail du bois.

## État du projet

Le projet est maintenant dans un état présentable :

- structure FR + EN
- catégories dynamiques
- cartes d’articles avec visuels réalistes
- ton éditorial retravaillé sur les articles FR/EN
- pages légales, RSS et sitemap
- home et pages catégories renforcées

## Commandes

- `npm run dev` — développement local
- `npm run build` — build de production
- `npm run preview` — preview locale

## Arborescence utile

- `src/content/fr/` — contenus français
- `src/content/en/` — contenus anglais
- `public/images/articles-real/` — visuels d’articles réalistes
- `public/images/categories/` — visuels de rubriques
- `src/pages/[category]/` — routes FR
- `src/pages/en/[category]/` — routes EN
- `src/data/site.ts` — marque, navigation, rubriques

## Déploiement recommandé

### Option 1 — Vercel

Le plus simple pour ce projet.

Réglages :
- Framework preset : **Astro**
- Build command : `npm run build`
- Output directory : `dist`

Un fichier `vercel.json` est déjà présent.

### Option 2 — Netlify

Réglages :
- Build command : `npm run build`
- Publish directory : `dist`

Un fichier `netlify.toml` est déjà présent.

### Option 3 — Cloudflare Pages

Réglages :
- Build command : `npm run build`
- Build output directory : `dist`

## Checklist avant mise en ligne

- vérifier le domaine final à utiliser dans `src/data/site.ts`
- vérifier le logo / hero si tu veux les versions définitives
- relire About / Contact si tu veux une voix plus incarnée
- ajouter analytics / consentement si nécessaire
- brancher affiliation / tracking si le modèle du site le demande

## Point volontairement laissé tel quel

Le projet remonte encore des warnings Astro de `duplicate id` sur certains contenus.

Ils sont **connus**, **non bloquants**, et ont été laissés en place volontairement pour ne pas casser le flux de production pendant les itérations éditoriales.

## Suite logique

1. connecter le repo à Vercel / Netlify / Cloudflare Pages
2. pointer le domaine
3. faire une dernière vérification mobile
4. lancer les prochaines séries d’articles
