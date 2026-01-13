const prompt = require("prompt-sync")();
const mention = (moyenne) => {
  switch (true) {
    case moyenne >= 10 && moyenne < 12:
      return "Passable";
    case moyenne >= 12 && moyenne < 14:
      return "Assez bien";
    case moyenne >= 14 && moyenne < 16:
      return "Bien";
    case moyenne >= 16 && moyenne < 18:
      return "Tres bien";
    case moyenne >= 18 && moyenne <= 20:
      return "Honorable";
    default:
      return "Echec";
  }
};
const moyenne = Number(prompt("Entrer votre moyenne: "));
console.log(mention(moyenne));
