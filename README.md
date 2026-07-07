# Portfolio BUT3 Informatique — Hawa M'Bodj

Site statique (HTML / CSS / JS, aucune dépendance, aucun build) présentant le portfolio de compétences
dans le cadre du BUT Informatique (UPEC).

## Structure

```
index.html              Page Profil (présentation)
parcours.html           Formation (Lycée → BUT Informatique)
projets.html            Stage Rakedd Consulting + 3 projets académiques
competence-4.html       Compétence 4 — Gérer des données de l'information
competence-5.html       Compétence 5 — Conduire un projet
competence-6.html       Compétence 6 — Collaborer au sein d'une équipe informatique
css/style.css           Feuille de style (thème sombre tech/IAM)
js/main.js              Menu mobile + calcul auto de l'année universitaire
```

## À compléter avant publication

Dans le `<footer>` de chaque page, deux liens sont des placeholders (`href="#"`) :

```html
<a href="#" target="_blank" rel="noopener">GitHub</a>
<a href="#" target="_blank" rel="noopener">LinkedIn</a>
```

Remplace le `#` par tes vraies URLs (ex. `https://github.com/ton-pseudo`,
`https://www.linkedin.com/in/ton-profil`) — cherche `TODO` dans les fichiers pour les repérer vite.

## Tester en local

Ouvre simplement `index.html` dans un navigateur (double-clic), tous les chemins sont relatifs.

## Déploiement — GitHub Pages (le plus simple, gratuit)

1. Crée un dépôt GitHub (public) et ajoute ce dossier :
   ```
   git init
   git add .
   git commit -m "Portfolio BUT3 Informatique"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<nom-du-repo>.git
   git push -u origin main
   ```
2. Sur GitHub : **Settings → Pages → Source : Deploy from a branch**, choisis la branche `main` et le
   dossier `/ (root)`.
3. Le site sera disponible en quelques minutes à l'adresse :
   `https://<ton-pseudo>.github.io/<nom-du-repo>/`

### Alternative encore plus rapide (sans compte, pour un aperçu) : Netlify Drop

Va sur `app.netlify.com/drop` et glisse-dépose le dossier `portfolio` entier dans la page : un lien
public est généré instantanément (utile pour un aperçu ; pour un lien permanent lié à ton nom, crée un
compte gratuit Netlify ou GitHub Pages).
