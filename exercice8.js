const prompt = require("prompt-sync")();
const horaire = (h, m) => {
  if (h!=23 && m == 59) {
    return `${h + 1}:00`;
  }
  if(h==23 && m==59){
    return `00:00`;
  }
  return `${h}:${m + 1}`;
};
const h=Number(prompt('Heure: '));
const m=Number(prompt('Minute: '));
console.log(horaire(h,m));
