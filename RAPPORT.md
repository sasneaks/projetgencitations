# Rapport — Générateur de citations avec CI/CD

Je voulais faire un mini projet simple pour valider ce qu’on a vu: un peu de Node, un test unitaire, et un workflow GitHub Actions qui tourne à chaque push. Au début j’ai hésité entre faire une petite API ou juste une page statique. J’ai finalement pris l’option la plus directe pour aller au bout sans me perdre.

## Objectifs du projet
- Avoir une fonction en JS qui renvoie une citation aléatoire.
- Écrire un test unitaire basique (Jest).
- Mettre un workflow CI/CD sur GitHub Actions qui lance les tests à chaque push.
- Déployer une page statique (GitHub Pages) qui affiche une citation, avec un bouton pour en changer.

## Structure du code
```
src/app.js          -> fonction citationAleatoire()
tests/app.test.js   -> test: renvoie une string non vide
scripts/cli.js      -> petit script pour afficher une citation en console
public/index.html   -> page très simple (pas de styles)
public/app.js       -> récupère et affiche une citation aléatoire
.github/workflows/ci.yml -> workflow CI (tests + déploiement Pages)
```
J’ai gardé des noms simples et peu de code pour que ça reste lisible. La page web est volontairement minimale.

## Pipeline CI/CD
J’ai créé `.github/workflows/ci.yml`. Il se déclenche sur `push` et `pull_request` vers `main`.

En gros:
1. Récupère le code (checkout).
2. Installe Node 20.
3. `npm install` puis `npm test`.
4. Si les tests passent, il envoie le dossier `public/` comme artefact et le déploie sur GitHub Pages.

J’ai choisi GitHub Pages parce que c’est intégré à GitHub Actions et ça évite d’ajouter des secrets. Au final, je push, les tests tournent, et si tout est vert, la page est en ligne.

## Difficultés rencontrées
- Au début, je n’étais pas sûr des permissions pour Pages. Sans `pages: write` et `id-token: write`, le déploiement ne passait pas.
- J’ai hésité entre `npm ci` et `npm install`. J’ai mis `npm install` pour éviter les soucis si le `package-lock.json` n’est pas là.
- J’ai simplifié le front au maximum (pas de CSS, pas d’emoji) pour rester dans l’esprit du sujet et ne pas me disperser.

## Améliorations possibles
- Ajouter d’autres tests (par exemple vérifier que la citation vient bien du tableau, mocker `Math.random`).
- Ajouter ESLint/Prettier et un job “lint” dans la CI.
- Activer la couverture Jest et publier le rapport comme artefact.
- Mettre un cache npm dans la CI pour aller plus vite.
- Charger les citations depuis un fichier JSON séparé ou une petite API.

## Conclusion
Au final, le projet est simple mais il coche les cases: code minimal en Node, test unitaire qui tourne, CI qui s’exécute à chaque push, et déploiement automatique d’une page statique. J’ai choisi cette méthode parce qu’elle est claire et suffisante pour un rendu Bachelor. Si je devais continuer, je renforcerais surtout les tests et la qualité (lint + format), et j’ajouterais un cache dans le workflow pour accélérer.
