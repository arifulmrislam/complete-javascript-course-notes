'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
// 
//     function printAge() {
//         var millenial = true;
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
// 
//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//         }
//         console.log(millenial);
//     }
//     printAge();
// 
//     return age;
// }
// 
// const firstName = 'Jonas';
// calcAge(1991);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991);
// 
// 
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

const jonas = {
    name: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge;
matilda.calcAge();