const prompt = require("prompt-sync")();
const motDePasse = prompt("Entrer un mot de passe: ");
if (motDePasse.length <= 8) {
    console.log("Reponse invalide");
}

// Analyse du probleme:
// Entree:mot de passe
// Sortie:message en fonction du mot de passe

// Conception
// Utiliser une structure conditionnelle simple pour verifier si le mot de passe saisi est egal au mot de passe enregistre

// Pseudo-Code:
// DEBUT
//   Declarer motDePasse:chaine de caractere
//   motDePasse="5825451311spicy"
//   Declarer auth
//   Lire auth
//   Si auth==motDePasse Alors
//     Afficher "Vous etes authentifie,bienvenue"
//   Sinon
//     Afficher "Mauvais mot de passe"
//   FinSi
// FIN

// Implementation:


const prompt = require("prompt-sync")();
let motDePasse = "5825451311spicy";
let auth = prompt("Entrer le mot de passe: ");
if (auth === motDePasse) {
    console.log("Vous etes authentifie,bienvenue");
} else {
    console.log("Mauvais mot de passe");
}
