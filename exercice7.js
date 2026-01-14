// Analyse du probleme:
// Entree:annee
// Sortie:bissextile ou non bissextile

// Conception:
// Utiliser une structure conditionnelle simple et utiliser la condition pour qu'une annee soit bissextile en guise de condition dans la structure conditionnelle
// Pseudo-code:
// DEBUT
//   Fonction estBissextile(annee)
//     Declarer annee
//     Lire annee
//     Si annee%4==0 ET annee%100!=0 OU (annee%400==0) Alors
//       Retourner annee est bissextile
//     Sinon 
//       Retourner annee n'est pas bissextile
//     FinSi
// FIN

// Implementation:

const prompt = require("prompt-sync")();
const estBissextile = (annee) => {
  if (annee % 4 == 0 && annee%100!=0 || (annee%400==0)) {
    return `${annee} est Bissextile`;
  }
  return `${annee} n'est pas Bissextile`;
};
const annee = Number(prompt("Annee: "));
console.log(estBissextile(annee));
