"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

const interface = 'Audio';
const private = 534;


Function:
function logger(){
    console.log('My name is Arif');
}

logger();

function fruitsProcess(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const fruit = fruitsProcess(5,0);
console.log(fruit);

const appleOrangeJuice = fruitsProcess(2,4);
console.log(appleOrangeJuice);



function forLearn(english, math){
    // console.log('I complete my english and math exam!!');
    const exam = `He failed in the english ${english}, but he made a good marks in math ${math}.`;
    return exam;
}

const education = forLearn(30, 100);
console.log(education);


Function declaration
function calAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calAge1(1993);
console.log(age1);

// Function expression
const calAge2 = function(birthYear){
    return 2024 - birthYear;
}

const age2 = calAge2(1993);
console.log(age2);

// Arrow function

const calAge3 = (birthYear) => 2024 - birthYear;
const age3 = calAge3(1993);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years who is ${age} years old.`;
}

console.log(yearsUntilRetirement(1996, 'Ariful'));
console.log(yearsUntilRetirement(2000, 'Kalam'));

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitsProcess(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

const fruits = fruitsProcess(2,4); 
console.log(fruits);


const calcAverage = (callAverage) => {
    return callAverage / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
    const dolphins = calcAverage(avgDolphins);
    const koalas = calcAverage(avgKoalas);
    return `Koalas win (${koalas} vs ${dolphins})`;
}

const dolphinsTotal = 44 + 23 + 71;
const koalasTotal = 65 + 54 + 49;

console.log(checkWinner(dolphinsTotal, koalasTotal));

Array
const friends = ['Shuvo','Shanto','Iqram'];
console.log(friends);

const years = new Array(1992, 1984, 2008, 2020);
console.log(years);

friends[2] = 'Joy';
console.log(friends); 

const calcAge = function(birthYear){
    return 2024 - birthYear;
}
const years = [1990, 1981, 2002, 2008, 2010];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


const friends = ['Michael','Steven', 'Peter'];
friends.push('Jay');
friends.unshift('Mick');
friends.pop();
friends.shift();
console.log(friends);

if(friends.includes('Steven')){
    console.log('You have a friends Steven');
}
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
console.log(tips);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Islam',
    age: 2024 - 1993,
    job: 'teacher',
    friends: ['Shu','Nic','Peter']
};


const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);
console.log(jonas.friends[2]);


const jonas = {
    firstName: "Jonas",
    lastName: "Islam",
    birthYear: 1993,
    job: "teacher",
    friends: ["Shu", "Nic", "Peter"],
    hasDriverLicense: false,

    // calcAge: function(birthYear){
    //     return 2024-birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2024 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());


// BMI = mass / height ** 2;

const bmiMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    }
}

const bmiJohn = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / this.height ** 2).toFixed(1);
        return this.bmi;
    },
};

const getSummary = function(){
    return bmiMark.calcBMI() > bmiJohn.calcBMI() ? `Mark's BMI (${bmiMark.calcBMI()}) is higher than John's (${bmiJohn.calcBMI()})!!` : `John's BMI ${bmiJohn.calcBMI()} is higher than Mark's ${bmiMark.calcBMI()}!!`
}

console.log(getSummary());


for(let i = 1; i <= 10; i++){
    console.log(i);
}

const jonasArray = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i in jonasArray){
    if(typeof jonasArray[i] !== 'string') break;

    console.log(jonasArray[i], typeof jonasArray[i]);

    types.push(typeof jonasArray[i]);
} 

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0;i<years.length;i++){
    ages.push(2037 - years[i]);
}
console.log(ages);


const jonas = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i= jonas.length-1;i >= 0;i--){
    console.log(i, jonas[i]);
}



for (let exercise = 1; exercise < 4; exercise++){
    console.log(`----Starting Exercise ${exercise}`);
    for(let rep=1; rep<=5;rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


for(let rep=1; rep<=5;rep++){
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
}


let rep = 1;
while(rep <= 10){
    // console.log('Hello');
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(('Loop is about to end....'));
}

"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for(let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bill);
}

console.log(bills, tips, totals);



const calcAverage = function(arr){
    let sum = 0;
    for(let i=0;i < arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([5, 6, 7]));
*/
