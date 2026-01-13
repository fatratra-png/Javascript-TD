//Analyse du probleme:
//Entree:mot de passe
//Sortie:message en fonction de la surete du mot de passe

//Conception:
//Utiliser une structure conditionnelle simple

//Pseudo-code:
//DEBUT
//     Declarer motDePasse:chaine de caracteres
//     Lire motDePasse
//     Si longueur de motDePasse <= 8 Alors
//         Afficher "Reponse invalide"
//     FinSi
// FIN

//Implementation:

const prompt = require("prompt-sync")();
const motDePasse = prompt("Entrer un mot de passe: ");
if (motDePasse.length <= 8) {
  console.log("Reponse invalide");
}
