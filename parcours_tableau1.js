/*exo 1 alterner les élements du tableau
Analyse du problème:
-entrée: tableau
-sortie: element du tableau de façon alterner
conception:

-creer une fonction alterner qui va prendre comme paramètre tab
-utiliser une boucle tant que, pour parcourir le tableau et que tant que premier < dernier on continue l'insertion
-creer un nouveau tableau pour stocker les elements alterner
-creer deux variable premier qui sera le premier indexe du tableau et dernier qui ser le dernierf element du tableau
-si premier element du tableau on ajoute en tant que dernier element , après on ajoute le dernier element du tableau en tant que l'element après le permier ajouter
on augmente l'indexe
-on augmente premier de 1 et  on decremente dernier de 1
-utiliser une condition que si le dernier = premier on ajoute juste l'pelement en tant que dernier  element et on sort directe de 
la boucle tant que

pseudo-code:
Début
   Déclarer tab: tableau
   Déclarer newtab:tableau
   newtab = []
   Déclarer premier = 0
   Déclarer dernier = tab.longueur - 1
   fonction alterner (tab)
   tant que premier < dernier 
     inserer le premier element du tableau en tant que dernier element du nouveau tableau
     inserer le dernier element du tableau en tant que l'element apres le premier element ajouter
     premier = premier + 1 
     dernier --
     Si premier == dernier
      ajouter l'element en tant que tab[dernier]
      sortir de la boucle tant que
     Fin si
   fin tant que
  fin fonction
  retourner newtab
Fin
*/
const alternateArray = (tab) => {
    let alternatedArray = [];
    let left = 0;
    let right = tab.length - 1;

    while (left  < right ){
      alternatedArray.push (tab[left]);
      alternatedArray.push (tab[right]);
      left ++;
      right --;
      if (right == left){
        alternatedArray.push (tab[right])
        break;
      };
    }
    return alternatedArray;
}
console.log(alternateArray([1,2,3,4,5]));
