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