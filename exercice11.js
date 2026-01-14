// Analyse du probleme:
// Entree:mot de passe
// Sortie:message en fonction du mot de passe entree et de la veracite du mot de passe

// Conception:
// Utiliser une structure iterative TANT QUE pour afficher le message tant que le mot de passe est faux et pour ainsi manipuler le nombre d'essai de l'uitilisateur

// Pseudo-code:

// DEBUT
//   Declarer motDePasseSaisi:chaine de caracteres
//   Declarer motDePasse:chaine de caracteres
//   Declarer essaiRestant=2 (car le premier essaie comptera deja comme 1)
//   motDePasse="Incorrect"
//   Lire motDePasse

//   TANT QUE motDePasseSaisi!=motDePasse Faire
//    Afficher "Le mot de passe est Incorrect"
//    Lire motDePasse
//    essaiRestant=essaiRestant-1
  
//      Si essaiRestant==0 Alors
//        Sortir de la boucle
//      FinSi
//  Fin TANT QUE

//FIN

  

//Implementation:

const prompt = require("prompt-sync")();
let motDePasseSaisi = prompt("Entrer le mot de passe: ");
let essaiRestant = 2;
let motDePasse = "Incorrect";
while (motDePasseSaisi !== motDePasse) {
  console.log("Le mot de passe est Incorrect");
  motDePasseSaisi = prompt("Essayer encore: ");
  essaiRestant -= 1;
  if (essaiRestant == 0) {
    break;
  }
}
