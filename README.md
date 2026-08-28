# Portfolio — Hawa M'Bodj

Site statique (HTML / CSS / JS, aucune dépendance, aucun build) présentant mon profil, mes expériences
et mes projets, à destination des recruteurs.

## Structure

```
index.html              Profil : positionnement, savoir-faire (avec preuves), formation → terrain, stack
projets.html            Expériences & projets : contexte / rôle / résultat pour chacun
parcours.html           Chronologie, diplômes, langues
competences.html        Vue d'ensemble des 3 compétences terminales, auto-évaluation, preuves
formation-terrain.html  Passerelle formation → terrain : acquis mobilisés, livrables, écarts comblés
css/style.css           Feuille de style (thème clair & sombre)
js/main.js              Menu mobile, bascule de thème, année universitaire auto

Pages de compétence (référentiel BUT), accessibles depuis competences.html :
competence-4.html       Gérer des données de l'information (UE5.4 · UE6.4)
competence-5.html       Conduire un projet (UE5.5 · UE6.5)
competence-6.html       Collaborer au sein d'une équipe informatique (UE5.6 · UE6.6)
```

Les pages `competence-*.html` conservent le format attendu par le BUT (apprentissages critiques,
composantes essentielles, auto-évaluation par AC, ressources, traces & preuves, pistes d'amélioration).
Elles sont accessibles depuis `competences.html`, elle-même dans la navigation principale : le
référentiel est assumé, mais présenté dans un registre professionnel.

## Tester en local

Ouvre `index.html` dans un navigateur (double-clic), tous les chemins sont relatifs.

## Déploiement — GitHub Pages

Sur GitHub : **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
Le site est publié à l'adresse `https://june0809.github.io/Portfolio-2026/`.
