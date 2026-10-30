# PRO ASSURANCE GABON — site vitrine

## Lancer
Prérequis : Node.js 20+ et npm.

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

Le build génère le bundle client, le bundle serveur et un HTML pré-rendu pour chaque URL listée dans `scripts/prerender.mjs`. Le sitemap est généré dans `dist/sitemap.xml`.

## À compléter avant publication
Modifier `src/config.ts` : adresse exacte, téléphone au format +241, WhatsApp, email, horaires, domaine, GPS, liens sociaux et fiche Google Business Profile. Remplacer les fichiers graphiques temporaires par le logo officiel et les couleurs réelles de PRO ASSURANCE. Vérifier chaque mention commerciale et réglementaire.

Ne jamais publier de coordonnées entre crochets. N'inventer ni agrément, ni compagnie partenaire, ni ancienneté, ni témoignage, ni chiffre de clientèle.

## Formulaire
Le formulaire utilise React Hook Form + Zod, validation de numéro, honeypot et consentement. Il est actuellement en mode démonstration et n'envoie pas de message. Connecter un backend ou un service de messagerie avant production ; ne pas exposer de clé secrète dans le navigateur.

## SEO / déploiement
- Mettre le vrai domaine dans `src/config.ts`, `scripts/prerender.mjs` et `public/robots.txt`.
- Configurer HTTPS, redirection www/non-www et compression côté hébergeur/CDN.
- Soumettre sitemap.xml dans Google Search Console.
- Créer/valider la fiche Google Business Profile avec exactement le même NAP.
- Vérifier les pages pré-rendues, canonicals, données structurées et métadonnées avec Google Rich Results Test.
- Ajouter uniquement des avis réels. Aucun AggregateRating fictif n'est inclus.
- Les pages mentionnent les zones de Libreville à titre indicatif, sans prétendre à une implantation physique partout.

Les contenus réglementaires sont informatifs et doivent être relus par un professionnel compétent avant publication. Les garanties ne sont jamais garanties par ce site : elles dépendent des contrats et des assureurs.

Les photos distantes sont temporaires. Remplacer par des visuels autorisés et optimisés WebP/AVIF, stockés localement, avec dimensions explicites.
