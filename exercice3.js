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