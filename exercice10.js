// Analyse du probleme:
// Entree:nombre
// Sortie:primalite du nombre

// Conception:
// Utliser une structure conditionnelle simple et une structure iterative

// Pseudo-code:

// DEBUT 

//   Declarer nombre:entier
//   Lire nombre
//   Declarer estPremier:booleen
//   estPremier:vrai

//   Si nombre<=1 Alors
//     estPremier==faux
//   Sinon
//     POUR i allant de 2 a nombre Faire
//       Si nombre%i==0 Alors
//         estPremier=faux
//         Sortir de la boucle
//     FinPOUR
//   FinSi

//   Si estPremier==vrai Alors
//     Afficher"nombre est premier"
//   Sinon
//     Afficher"nombre n'est pas premier"
//   FinSi

// FIN

// Implementation:



const prompt = require("prompt-sync")();
let number = parseInt(prompt("Entrez un nombre premier: "));
let estPremier = true;
if (number <= 1) {
  estPremier = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      estPremier = false;
      break;
    }
  }
}
if (estPremier) {
  console.log(`${number} est premier`);
} else {
  console.log(`${number} n'est pas premier`);
}
