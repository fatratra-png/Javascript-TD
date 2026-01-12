const prompt = require("prompt-sync")();
let motDePasse = "5825451311spicy";
let auth = prompt("Entrer le mot de passe: ");
if (auth === motDePasse) {
  console.log("Vous etes authentifie,bienvenue");
} else {
  console.log("Mauvais mot de passe");
}
