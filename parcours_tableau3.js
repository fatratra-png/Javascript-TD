//Analyse du probleme:
//Entree:tableau d'entier de taille n+1 avec des éléments compris entre 1 et n, où un élément apparaît deux fois
//Sortie: l'élément qui apparaît deux fois

//Conception:
//Calculer la somme des éléments du tableau
//Calculer la somme des entiers de 1 à n
//Soustraire la somme des entiers de 1 à n de la somme des éléments du tableau pour trouver l'élément en double

//Pseudocode:

//DEBUT
//Declarer sumTab: entier
//Declarer sumN: entier
//Declarer x: entier
//Declarer n: entier

//Fonction findDuplicate(tab):

//  sumTab = 0
//  Pour i allant de 0 à longueur de tab - 1 Faire
//    sumTab = sumTab + tab[i]
//  Fin Pour

//  n = longueur de tab - 1
//  sumN = (n * (n + 1)) / 2

//  x = sumTab - sumN
//  retourner x
//Fin Fonction
//FIN

//Implementation

const findDuplicate = (tab) => {
  let sumTab = 0;
  for (let i = 0; i < tab.length; i++) {
    sumTab += tab[i];
  }

  const n = tab.length - 1;
  const sumN = (n * (n + 1)) / 2;

  const x = sumTab - sumN;
  return x;
};

console.log(findDuplicate([1, 2, 3, 3, 4, 5]));
