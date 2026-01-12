const prompt = require("prompt-sync")();
const demande = String(prompt("Est-ce que vous avez un compte ? "));
if (demande.toLowerCase() === "oui") {
  console.log("Connectez-vous");
} else if (demande.toLowerCase() === "non") {
  console.log("Veuillez creer un compte");
} else {
  console.log("Reponse invalide");
}
