// let Dolphins_score1 = 36;
// let Dolphins_score2 = 108;
// let Dolphins_score3 = 89;

let Dol_average_score = ((36 + 108 + 89) / 3).toFixed(1);
let Kol_average_score = ((88 + 91 + 110) / 3).toFixed(1);

if(Dol_average_score === Kol_average_score){
    console.log("Draw");
}else if(Dol_average_score > Kol_average_score){
    console.log("Dolphins win the match");
}else{
    console.log("Koalas win the match");
}
// console.log(Dol_average_score);
// console.log(Kol_average_score);