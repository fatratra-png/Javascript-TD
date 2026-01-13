//Analyse du probleme:
//Entree:Oui ou Non
//Sortie:Message en fonction de la reponse 

//Conception:
//Utiliser une structure conditionnelle alternative pour definir quelle message afficher en fonction de l'entree

//Pseudo-code:
// DEBUT
//   Declarer demande:chaine de caracteres
//   Lire demande
//   Si demande=="oui" Alors
//     Afficher "Connectez-vous"
//   Sinon si demande=="non" Alors
//     Afficher "Veuillez creer un compte"
//   Sinon 
//     Afficher "Reponse invalide"
//   FinSi
// FIN

//Implementation:

const prompt = require("prompt-sync")();
const demande = String(prompt("Est-ce que vous avez un compte ? "));
if (demande.toLowerCase() === "oui") {
  console.log("Connectez-vous");
} else if (demande.toLowerCase() === "non") {
  console.log("Veuillez creer un compte");
} else {
  console.log("Reponse invalide");
}
