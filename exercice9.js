const prompt=require('prompt-sync')();
const nombre=parseInt(prompt('Nombre: '));
for(let i=1;i<=10;i++){
    console.log(`${nombre} * ${i} = ${nombre*i}`);
}