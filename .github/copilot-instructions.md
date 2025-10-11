# Copilot Instructions for AI Coding Agents

## Vue d'ensemble du projet
Ce dépôt est un portfolio personnel statique, principalement composé de fichiers HTML, CSS et JavaScript. Il expose des réalisations, des certificats, des témoignages et des informations personnelles à travers une interface moderne et personnalisable.

## Structure principale
- `index.html` : Page principale du portfolio, structure le contenu et inclut les composants clés.
- `main.js` : Logique JavaScript pour la navigation, l'affichage dynamique des certificats, et l'interaction utilisateur.
- `css/` : Contient les styles globaux (`style.css`), le switcher de thèmes (`styleswitcher.css`), et des skins de couleur (`skins/yellow.css`).
- `assets/` : Images, vidéos, certificats, logos, témoignages, etc. Organisé par type de contenu.
- `fonts.styles.css` : Définition des polices personnalisées utilisées dans le projet.
- `Dockerfile` : Permet de lancer un environnement Ubuntu avec interface graphique et accès XRDP (usage avancé, non nécessaire pour le site statique).

## Conventions et patterns spécifiques
- **Color Switcher** : Le composant de changement de couleur est géré via le dossier `assets/styleswitcher/` et le fichier `css/styleswitcher.css`. Les couleurs sont appliquées via des skins CSS (ex : `css/skins/yellow.css`).
- **Navigation** : La navigation (desktop et mobile) est gérée dans `main.js` avec scroll fluide et activation visuelle des liens.
- **Affichage dynamique** : Les certificats sont affichés dynamiquement à partir d'un tableau JS dans `main.js`. Suivre ce pattern pour ajouter d'autres contenus dynamiques.
- **Organisation des assets** : Les images et médias sont rangés par catégorie dans `assets/` (ex : `certifs/`, `portfolio/`, `testimonials/`).
- **Polices** : Les polices sont chargées localement via `fonts.styles.css` et le dossier `fonts/`.

## Workflows de développement
- **Aucun build ou test automatisé** : Le projet est statique, aucune compilation ou test n'est requis.
- **Déploiement** : Publier le contenu tel quel sur un serveur web statique (ex : GitHub Pages, Netlify, Vercel).
- **Personnalisation** : Modifier le contenu dans `index.html`, ajouter des styles dans `css/`, ou des assets dans `assets/`.
- **Ajout de certificats** : Ajouter l'image dans `assets/certifs/` et une entrée dans le tableau `certificates` de `main.js`.

## Points d'intégration et dépendances
- **Librairies CSS** : Utilisation de Bootstrap, Animate.css, FontAwesome, Devicon, Swiper (certaines sont commentées dans le HTML).
- **Aucune dépendance JS externe** : Tout le JS est natif, aucune librairie JS tierce n'est utilisée.
- **Docker** : Un Dockerfile est présent pour lancer un environnement desktop Ubuntu avec XRDP, utile pour des usages avancés ou des démonstrations distantes.

## Exemples de patterns
- Pour ajouter une nouvelle couleur :
  1. Ajouter l'image dans `assets/styleswitcher/`.
  2. Créer un fichier CSS dans `css/skins/`.
  3. Lier le nouveau skin dans le HTML.
- Pour ajouter un nouveau certificat :
  1. Placer l'image dans `assets/certifs/`.
  2. Ajouter une entrée dans le tableau `certificates` de `main.js`.

## Fichiers clés à consulter
- `index.html`, `main.js`, `css/style.css`, `css/styleswitcher.css`, `css/skins/yellow.css`, `fonts.styles.css`, `Dockerfile`, `assets/`

---

Pour toute modification, respecter l'organisation des assets et des styles. Documenter les patterns spécifiques dans ce fichier pour faciliter l'automatisation par les agents IA.
