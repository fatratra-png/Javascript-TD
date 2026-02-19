/*exo 3:
Analyse du problème:
-entrée:tableau T
-sortie:element en double ou le doublon 

conception:
La relation:
-la somme de 1 à n nmbre = n(n+1)/2 or T de n+1 signifie que le tableau contient des élemnts jusqu'à n + 1 et l'element 
en plus est un doublon de l'un des élément 1 à n qui est x donc theoriquement la 
somme des élements serait = 1 + 2+....+ n + x =>somme = (n(n + 1)/2) + x
algorithme:
- creer une fonction qui va prendre en paramètre le tableau T
-utiliser un accumulateur somme = 0
-declarer une variable x qui sera le doublon de l'un des élèments du tableau 
-utiliser une boucle pour pour parcourir le tableau tel que somme += t[i]
-declarer n = t.longueur - 1 et utiliser la formule de la relation sn =n(n+1)/2 
or somme = n(n+1)/2 + x = somme += t[i]
-creer une variable x qui va stocker la valeur du doublon
-x = somme - sn
 
pseudo-code:
Début
  Déclarer t: tableau
  Déclarer somme: entier
  somme = 0
  Déclarer x : entier
  Déclarer i : entier
  Déclarer n : entier
  n = t.longueur - 1
  Déclarer sn : entier 
  sn =  (n*(n+1)/2)
  fonction doublon (t)
    pour i = 0 à t.longueur Faire 
      somme += t[i]
    fin Pour
   retourner x = somme - sn
  fin fonction
fin*/
function doublon(tab) {
  let somme = 0;
  let x;
  let n = tab.length - 1;
  const sn = (n * (n + 1) / 2)
  for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
  }
  return x = somme - sn;
}
console.log(doublon([1, 2, 3, 3]));