"use strict";

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//     tips.push(tip);
//     totals.push(tip + bill);
// };

// for(let i=0;i<=bills.length;i++){
//     calcTip(bills[i]);
// }

// console.log(tips);
// console.log(totals);


const array = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var sum = 0;
var average;

function calcAverage(arr){
    return (average = sum / array.length);
}

for(let i=0;i < array.length;i++){
    sum = array[i] + sum;
    calcAverage(sum)
}
console.log(average);

