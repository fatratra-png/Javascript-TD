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
        console.log('Merci');
        break;
    default:
        console.log('Choix invalide');
        
  }
}
