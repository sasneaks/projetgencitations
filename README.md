# Generateur de citations (Node + CI)

Projet tres simple pour valider: git/github, un test unitaire, et un workflow GitHub Actions. Pas de framework. Juste Node, Jest et une petite page HTML.

## Prerequis
- Node 18+
- npm
- Un depot GitHub (branche `main`)

## Installation
```bash
npm install
```

## Lancer un test
```bash
npm test
```

## Afficher une citation en console
```bash
npm run quote
```

## Ouvrir la page
- Ouvrir `public/index.html` dans un navigateur.
- Il y a un bouton pour changer la citation.

## Structure rapide
```
src/app.js          // fonction qui renvoie une citation
tests/app.test.js   // test Jest tres simple
scripts/cli.js      // petit script pour afficher une citation
public/index.html   // page statique
public/app.js       // JS tres basique pour afficher la citation
.github/workflows/ci.yml  // workflow GitHub Actions
```

## CI/CD (GitHub Actions)
- A chaque push sur `main` :
  - installe Node
  - `npm install`
  - `npm test`
  - si OK, deploie `public/` sur GitHub Pages

Activer Pages:
- GitHub → Settings → Pages → Source: GitHub Actions
- Faire un push sur `main` pour lancer le workflow

## Remarques
- Le test verifie juste que la fonction retourne bien une string non vide.
- Le code est exprès minimal pour rester clair.
