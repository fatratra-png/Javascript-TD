// Analyse du probleme:
// Entree:Heure et minute
// Sortie:Heure et minute +1

// Conception
// Utiliser une structure conditionnelle simple et retourner une heure en fonction de l'entree

// Pseudo-code:
// DEBUT
//   Declarer horaire:fonction
//   Fonction horaire(h,m)
//     Declarer h:entier
//     Declarer m:entier
//     Si h!=23 ET m==59 Alors
//       h==h+1
//       m==00
//       Retourner "h:m"
//     FinSi
//     Si h==23 ET m==59 Alors
//       h==00
//       m==00
//       Retourner "h:m"
//     Sinon
//       m==m+1
//       Retourner "h:m"
//     FinSi
// FIN

// Implementation:

const prompt = require("prompt-sync")();
const horaire = (h, m) => {
  if (h!=23 && m == 59) {
    return `${h + 1}:00`;
  }
  if(h==23 && m==59){
    return `00:00`;
  }
  return `${h}:${m + 1}`;
};
const h=Number(prompt('Heure: '));
const m=Number(prompt('Minute: '));
console.log(horaire(h,m));
