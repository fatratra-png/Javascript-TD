//Écrire un algorithme affichant les éléments d’un tableau de façon alternée en commençant par l'élément du milieu, puis en alternant les éléments à droite et à gauche. Par exemple, pour le tableau [1,2,3,4,5] il affichera 3,4,2,5,1.

//Analyse du probleme:
//Entree:tableau d'entier
//Sortie: tableau d'entier alterné depuis le milieu puis à droite et à gauche

//Conception:
//Trouver le milieu du tableau
//Créer un nouveau tableau
//Ajouter le milieu du tableau dans le nouveau tableau
//Ajouter les éléments à droite et à gauche du milieu dans le nouveau tableau jusqu'à ce que tous les éléments soient ajoutés

//Pseudocode:

//DEBUT
//Declarer left: entier
//Declarer right: entier
//Declarer milieu: entier
//Declarer newTab: tableau

//Fonction AlternateFromMid(tab):

//  left = 0
//  right = longueur de tab - 1
//  milieu = [(left + right) / 2]
//  ajouter tab[milieu] à newTab en tant que premier élément
//  right = milieu + 1
//  left = milieu - 1
//  Tant que longueur de newTab !== longueur de tab Faire
//    Si droite < longueur de tab Alors
//      ajouter tab[droite] à newTab en tant que dernier élément
//      droite=droite + 1
//    Fin Si
//    Si gauche >= 0 Alors
//      ajouter tab[gauche] à newTab en tant que dernier élément
//    Fin Si
//      gauche=gauche - 1
//  Fin Tant que
//  retourner newTab
//Fin Fonction
//FIN

//Implementation

const alternateFromMid = (tab) => {
  let left = 0;
  let right = tab.length - 1;
  let milieu = Math.floor((left + right) / 2);
  let newTab = [];
  newTab.push(tab[milieu]);
  right = milieu + 1;
  left = milieu - 1;
  while (newTab.length !== tab.length) {
    if (right < tab.length) {
      newTab.push(tab[right]);
      right++;
    }
    if (left >= 0) {
      newTab.push(tab[left]);
      left--;
    }
  }
  return newTab;
};

console.log(alternateFromMid([1,2,3,4,5]));
