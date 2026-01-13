const prompt=require('prompt-sync')();
const estBissextile=(annee)=>{
    if((annee%4==0 || annee%400==0 && annee%100!==0)){
        return `${annee} est Bissextile`;
    }
    return `${annee} n'est pas Bissextile`;
}
const annee=Number(prompt('Annee: '));
console.log(estBissextile(annee));
