// BMI = mass / height ** 2 = mass / (height * height);

let mark_mass = 78;
let mark_height = 1.69;
let john_mass = 92;
let john_height = 1.95;

let BMI_mark = mark_mass / mark_height ** 2;
let BMI_john = john_mass / john_height ** 2;

const markHigherBMI = BMI_mark > BMI_john; console.log(true);

console.log(BMI_mark);
console.log(BMI_john);
