const prompt = require("prompt-sync")();
let number = parseInt(prompt("Entrez un nombre premier: "));
let estPremier = true;
if (number <= 1) {
    estPremier = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            estPremier = false;
            break;
        }
    }
}
if (estPremier) {
    console.log(`${number} est premier`);
} else {
    console.log(`${number} n'est pas premier`);
}