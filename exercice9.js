// Analyse du probleme:
// Entree:nombre
// Sortie:Table de multiplication de ce nombre

// Conception:
// Utiliser une structure iterative POUR

// Pseudo-code:
// DEBUT
//     Declarer nombre:entier
//     Lire nombre
//     Pour i allant de 1 a 10 Faire
//         Afficher "nombre x i=(nombre*i)"
//     FinPour
// FIN

// Implementaion:

const prompt=require('prompt-sync')();
const nombre=parseInt(prompt('Nombre: '));
for(let i=1;i<=10;i++){
    console.log(`${nombre} * ${i} = ${nombre*i}`);
}