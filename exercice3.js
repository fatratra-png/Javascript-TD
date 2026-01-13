// Analyse du probleme:
// Entree: a,b
// Sortie: signe du produit de a et b

// Conception:
// Utiliser une structure conditionnelle alternative
// Verifier le signe de a et de b pour permettre de connaitre le signe de leur produit sans utiliser d'operateurs arithmetiques

// Pseudo-code:
// DEBUT 
//     Declarer a:reel
//     Declarer b:reel
//     Lire a
//     Lire b
//     Si a>0 ET b>0 OU a<0 ET b<0 Alors
//         Afficher "Le produit est positif"
//     Sinon si a>0 ET b<0 OU a>0 ET b<0 Alors
//         Afficher "Le produit est negatif"
//     Sinon 
//         Afficher "Le produit est nul"
//     FinSi
// FIN

// Implementation:


const prompt=require('prompt-sync')();
const a=Number(prompt('Entrer un nombre: '));
const b=Number(prompt('Entrer un autre nombre: '));
if(a>0 && b>0 || a<0 && b<0){
    console.log('Le produit est positif');
    
}else if(a>0 && b<0 || a<0 && b>0){
    console.log('Le produit est negatif');
    
}else{
    console.log('Le produit est nul');
    
}