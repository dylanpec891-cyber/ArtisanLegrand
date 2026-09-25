# Artisan LeGrand

Site vitrine multipage en français pour un artisan plombier à Paris 18e.

Site : https://artisan-legrand.vercel.app

## Structure
HTML statique, CSS et JavaScript natif. Aucune dépendance à installer et aucun build requis pour déployer les pages déjà générées. Les dossiers correspondent aux routes du site.

Les textes, modèles de pages et métadonnées sont dans `source/build.mjs`. Après modification : `node source/build.mjs`. La feuille de style et les interactions sont dans `assets/style.css` et `assets/site.js`. Pour changer de domaine, utiliser `SITE_URL=https://nouveau-domaine.fr node source/build.mjs`.

## Publication
Déployer le contenu de ce dossier avec Vercel, preset « Other », sans commande de build. Configuration dans `vercel.json`.

## Informations à compléter
- Téléphone et e-mail, puis boutons d’appel et de contact.
- Identité juridique, SIRET, mentions légales et informations réglementaires applicables.
- Zone exacte d’intervention hors Paris 18e, tarifs et conditions.
- Domaine personnalisé et Search Console, si souhaités.

Aucun faux avis, certification ou délai garanti n’est affiché. Les visuels sont des illustrations générées par IA, pas des photos de chantiers réels.

## Référencement
Titres et descriptions distincts, URL canonique, sitemap XML, robots.txt, données structurées Plumber, FAQPage et BreadcrumbList. Mettre à jour les URL canoniques et le sitemap si le domaine change. Aucun classement dans les moteurs n’est garanti.

## Animation et accessibilité
Menu mobile avec état accessible, focus visible, lien d’évitement, FAQ native, prise en compte de `prefers-reduced-motion`. Les pages restent lisibles sans JavaScript.

## Version 2
Accueil bleu nuit, composition photographique, accès directs par type d’urgence, cartes et typographie revues, pages services avec lien vers les premiers réflexes, animations discrètes avec réduction des mouvements, progression de lecture. Le numéro de téléphone et l’e-mail ne sont pas encore renseignés.
