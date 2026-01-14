// Analyse du probleme:
// Entree:a,b,c
// Sortie:solution(s)

// Conception:
// Utiliser une structure conditionnelle simple en fonction des cas 

// Pseudo-code:

// DEBUT
//   Fonction fonctionDuSecondDegre(a,b,c)
//     Declarer a,b,c:reel
//     Lire a,b,c
//     Si a==0 ET b==0 ET c==0 Alors
//       Retourner "Infinite de solution"
//     FinSi
//
//     Declarer DELTA
//     DELTA=b*b-4*a*c
//     Lire DELTA
//     Si DELTA<0 Alors
//       Retourner "Pas de solution reelle"
//     FinSi
//     Si DELTA==0 Alors
//       Declarer x:reel
//       x=(-c/b)
//     FinSi
//     Si DELTA>0 Alors 
//       Declarer x1:reel
//       Declarer x2:reel
//       x1:(-b-Math.sqrt(DELTA))/(2*a)
//       x2:(-b+Math.sqrt(DELTA))/(2*a)
//       Retourner x1
//       Retourner x2
//     FinSi
// FIN

// Implementation:



const prompt = require("prompt-sync")();
const fonctionDuSecondDegre = (a, b, c) => {
  if (a === 0 && b === 0 && c === 0) {
    return "Infinite de solution";
  }
  if (a === 0 && b == 0) {
    return "Aucune solution";
  }
  if (a === 0) {
    return { x: -c / b };
  }
  const DELTA = b * b - 4 * a * c;
  if (DELTA < 0) {
    return "Pas de solution reelle";
  }
  if (DELTA === 0) {
    return { x: -b / (2 * a) };
  }
  const x1 = -b - Math.sqrt(DELTA) / (2 * a);
  const x2 = -b + Math.sqrt(DELTA) / (2 * a);
  return { x1, x2 };
};
const a = Number(prompt("Entrer a: "));
const b = Number(prompt("Entrer b: "));
const c = Number(prompt("Entrer c: "));

console.log(fonctionDuSecondDegre(a,b,c));
