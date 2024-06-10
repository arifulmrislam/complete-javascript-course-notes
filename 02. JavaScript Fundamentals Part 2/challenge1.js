
const calcAverage = (callAverage) => {
    return callAverage / 3;
}

function checkWinner(avgDolphins, avgKoalas){
    const dolphins = calcAverage(avgDolphins);
    const koalas = calcAverage(avgKoalas);
    return `Koalas win ${koalas} vs ${dolphins}`;
}

const dolphinsTotal = 44 + 23 + 71;
const koalasTotal = 65 + 54 + 49;

console.log(checkWinner(dolphinsTotal, koalasTotal));