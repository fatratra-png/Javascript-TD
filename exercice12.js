// Analyse du probleme:
// Entree:nombre
// Sortie:Parfait ou imparfait

// Conception:
// Utiliser une structure conditionnelle et une structure iterative POUR pour parcourir les nombres inferieurs au nombre et verifier si leur somme est egal au nombre ci-dernier

// Pseudo-code:
// DEBUT
//     Declarer nombre:entier
//     Declarer somme:entier
//     somme=0
//     Fonction estParfait(nombre)
//         POUR i allant de 1 a nombre-1 Faire
//             Si nombre%i==0 ALors
//                 somme=somme+i
//             FinSi
//         Fin POUR
//         Retourner somme==n

//     Fin Fonction

//     Si estParfait==vrai Alors
//         Afficher "nombre est un nombre parfait"
//     Sinon 
//         Afficher "nombre n'est pas un nombre parfait"
//     FinSi

// FIN

const prompt=require('prompt-sync')();
const estParfait=(n)=>{
    let somme = 0;
    for(let i=1;i<=n-1;i++){
        if (n%i===0){
            somme+=i;
        }
    }
    return somme==n;
};
const n = parseInt(prompt('Entrer N: '));
if(estParfait(n)){
    console.log(`${n} est un nombre parfait`);
}else{
    console.log(`${n} n'est pas un nombre parfait`);
    
}