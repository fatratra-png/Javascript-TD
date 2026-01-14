// Analyse du probleme:
// Entree:notes
// Sortie:moyenne des notes

// Conception:
// Utiliser une structure iterative TANT QUE pour afficher un message demandant si l'on veut encore ajouter une note a la somme a calculer

// Pseudo-code:
// DEBUT 
//     Declarer note:reel 
//     Declare somme:reel 
//     Declarer coeff:entier 
//     Declarer moyenne:reel
//     coeff=0
//     Declarer continuer:caractere
//     continuer="o"

//     TANT QUE continuer=="o" Faire 
//         Lire note 
//         somme=somme+note 
//         coeff=coeff+1
//         Lire continuer
//     Fin TANT QUE

//     moyenne=(somme/coeff)
//     afficher moyenne

// FIN

// Implementation:

const prompt=require('prompt-sync')();
let somme=0;
let coeff=0;
let continuer="o";
while(continuer.toLowerCase()==="o"){
    let note=Number(prompt('Entrer une note: '));
    somme+=note;
    coeff++;
    continuer=prompt('Voulez vouz saisir une autre note ? ');
}
let moyenne=somme/coeff;
console.log(`Moyenne= ${moyenne}`);