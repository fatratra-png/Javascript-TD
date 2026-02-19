/*exo 2 alterner depuis le milieu
Analyse du problème:
entrer: tableau d'entier
sortie: elements alterner depuis le milieu

conception:
-creer une fonction milieu qui va prendre en paramètre un  tableau
-creer une valiable gauche = 0 et droite = tab.longueur - 1
-creer une valiable milieu =(gauche + droite)/2
-creer un nouveau tableau pour stocker les éléments alterner
-utiliser une boucle tant que que tab.longueur > newTab.longueur on insere milieu en tant que dernier element du newtab et gauche = milieu -1 
droite = milieu + 1 
-utilisre une condition si que gauche >= 0 on insere gauche en tangt que dernier element de newtab et que si droite < tab.longueur on insere 
droite en tant que dernier element de newtab
-on augmente droite et decremente gauche après avoir fini un tour

pseudo-code:
Début
  Déclarer tab: tableau
  Déclarer newTab: tableau
  newTab =[]
  Déclarer gauche: entier
  Déclarer droite : entier
  Déclarer milieu :entier
  fonction milieu (tab)
    gauche = 0
    droite = tab.longueur - 1
    milieu = arrondissement((gauche + droite)/2)
     inserer ilieu en tant que dernier element de newtab
       gauche = milieu - 1
       droite = milieu + 1
    tant que tab.longueur != newtab.longueur
        Si dtroite < tab.longueur faire 
          inserer droite en tant que dernier element de newtab
          droite ++
        Fin si
        Si gauche >=0 faire 
          inserer gauche en tant que dernier element de tab
          gauche --
        Fin si 
    fin tant que
  fin fonction
fin
*/
function milieu(tab) {
  let gauche = 0;
  let droite = tab.length - 1;
  const milieu = Math.floor((gauche + droite) / 2);
  let newTab = [];
  newTab.push(tab[milieu]);
  droite = milieu + 1;
  gauche = milieu - 1;
  while (tab.length != newTab.length) {
    if (droite < tab.length) {
      newTab.push(tab[droite]);
      droite++;
    }
    if (gauche >= 0) {
      newTab.push(tab[gauche]);
      gauche--;
    }
  }
  return newTab;
}
console.log(milieu([1, 2, 3, 4, 5]));

