// Analyse du problème :
// 	Entrée : Choix numerote de 1 a 4
// 	Sortie :Un message et une transaction en fonction du choix

// Conception :
// 	Utiliser une structure consitionnelle TANT QUE pour afficher le menu en continu
//  Utiliser une structure conditionnelle a choix multiple pour savoir quel message afficher a l'utilisateur et quelle transaction effectuer du cote de la machine DAB

// Pseudo-code :
// DEBUT
//   Declarer solde:entier
//   Declarer choix:entier
//   Declarer montant:entier
//   choix=0

//   TANT QUE choix!=0 Faire
//     Afficher "===BOA==="
//     Afficher "1-Versement"
//     Afficher "2-Retrait"
//     Afficher "3-Consulter solde"
//     Afficher "4-Quitter"
//     choix="Transaction a effectuer : "
//     Lire choix

//     Selon choix

//           cas choix=1
//               montant="Entrer le montant a verser: "
//               solde=solde+montant
//           cas choix=2
//               montant="Entrer le montant a retirer: "
//                 Si solde<montant Alors
//                   Afficher "Solde insuffisant"
//                 Sinon
//                     solde=solde-montant
//                 FinSi
//           cas choix=3
//               Afficher "solde actuel: solde"
//           cas choix=4
//               Sortir de la boucle
//     Fin selon
//   Fin TANT QUE
// FIN

//Implementation:

const prompt = require("prompt-sync")();
let solde = 3000000;
let choix = 0;
let montant;
while (choix !== 4) {
  console.log("===BOA===");
  console.log("1-Versement");
  console.log("2-Retrait");
  console.log("3-Consulter solde");
  console.log("4-Quitter");

  choix = parseInt(prompt("Transaction a effectuer : "));
  switch (choix) {
    case 1:
      montant = parseInt(prompt("Entrer le montant a verser: "));
      solde += montant;
      console.log("===Versement effectue===");
      console.log(`Nouveau solde : ${solde}`);
      break;
    case 2:
      montant = parseInt(prompt("Entrer le montant a retirer: "));
      if (montant > solde) {
        console.log("Solde insuffisant");
      } else {
        solde -= montant;
        console.log("===Retrait effectue===");
        console.log(`Nouveau solde : ${solde}`);
        break;
      }
    case 3:
      console.log(`Solde actuel: ${solde}`);
      break;
    case 4:
      console.log("Merci");
      break;
    default:
      console.log("Choix invalide");
  }
}
