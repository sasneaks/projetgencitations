const citations = [
  "Le succès est la somme de petits efforts répétés jour après jour.",
  "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
  "La simplicité est la sophistication suprême.",
  "La meilleure façon de prédire l’avenir, c’est de le créer.",
  "On ne change jamais les choses en combattant la réalité existante. Pour changer quelque chose, construis un nouveau modèle qui rend l’ancien obsolète.",
  "Il n’y a pas d’ascenseur pour le succès, il faut prendre les escaliers.",
  "Les détails font la perfection, et la perfection n’est pas un détail.",
  "Le plus grand risque est de n’en prendre aucun."
];

var quoteEl = document.getElementById('quote');
var btn = document.getElementById('btn');

function pick() {
  var i = Math.floor(Math.random() * citations.length);
  return citations[i];
}

function render() {
  quoteEl.textContent = pick();
}

btn.addEventListener('click', render);
render();
