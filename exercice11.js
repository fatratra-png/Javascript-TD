const prompt = require("prompt-sync")();
let motDePasseSaisi = prompt("Entrer le mot de passe: ");
let essai = 3;
let motDePasse = "Incorrect";
while (motDePasseSaisi !== motDePasse) {
  console.log("Le mot de passe est Incorrect");
  motDePasseSaisi = prompt("Essayer encore: ");
  essai -= 1;
  if (essai == 0) {
    console.log("");
    break;
  }
}
