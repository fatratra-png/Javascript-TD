const prompt=require('prompt-sync')();
const motDePasse=prompt('Entrer un mot de passe: ');
if(motDePasse.length<=8){
    console.log('Le mot de passe est trop faible');   
}

