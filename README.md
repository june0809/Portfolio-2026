# Portfolio — Hawa M'Bodj

Site statique (HTML / CSS / JS, aucune dépendance, aucun build) présentant mon profil, mes expériences
et mes projets, à destination des recruteurs.

## Structure

```
index.html              Profil : positionnement, savoir-faire (avec preuves), stack, contact
projets.html            Expériences & projets : contexte / rôle / résultat pour chacun
parcours.html           Chronologie, diplômes, langues
css/style.css           Feuille de style (thème clair & sombre)
js/main.js              Menu mobile, bascule de thème, année universitaire auto

Annexes (référentiel pédagogique BUT, non listées dans la navigation principale) :
competence-4.html       Gérer des données de l'information (UE5.4 · UE6.4)
competence-5.html       Conduire un projet (UE5.5 · UE6.5)
competence-6.html       Collaborer au sein d'une équipe informatique (UE5.6 · UE6.6)
```

Les pages `competence-*.html` conservent le format attendu par le BUT (apprentissages critiques,
composantes essentielles, ressources, traces & preuves, pistes d'amélioration). Elles ne sont
accessibles que par un lien discret en pied de page, pour ne pas parasiter la lecture côté recruteur.

## Tester en local

Ouvre `index.html` dans un navigateur (double-clic), tous les chemins sont relatifs.

## Déploiement — GitHub Pages

Sur GitHub : **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
Le site est publié à l'adresse `https://june0809.github.io/Portfolio-2026/`.
