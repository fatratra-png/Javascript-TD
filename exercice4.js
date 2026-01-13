// Analyse du probleme:
// Entree:moyenne
// Sortie:mention

// Conception:
// Utiliser une structure conditionnelle a choix multiple pour definir les conditions d'obtention d'une mention en fonction de la moyenne

// Pseudo-code:
// DEBUT
//   Declarer mention:chaine de caractere
//   mention=
//   Fonction (moyenne)
//    Selon moyenne
//       Cas moyenne>=10 ET moyenne < 12
//         Retourner "Passable"
//       Cas moyenne>=12 ET moyenne < 14
//         Retourner "Assez bien"
//       Cas moyenne>=14 ET moyenne < 16
//         Retourner "Bien"
//       Cas moyenne>=16 ET moyenne < 18
//         Retourner "Tres bien"
//       Cas moyenne>=18 ET moyenne < 20
//         Retourner "Honorablee"
//     Fin Selon
//   Fin Fonction
// FIN

// Implementation:

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
