const prompt=require('prompt-sync')();
const estParfait=(n)=>{
    let somme = 0;
    for(let i=1;i<=n/2;i++){
        if (n%i===0){
            somme+=i;
        }
    }
    return somme===n;
};
const n = Number(prompt('Entrer N: '));
if(estParfait(n)){
    console.log(`${n} est un nombre parfait`);
}else{
    console.log(`${n} n'est pas un nombre parfait`);
    
}