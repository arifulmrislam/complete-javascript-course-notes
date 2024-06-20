// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// Problem 1:
//We work for a company building a smart home thermometer. Our most recent task is this: "Give an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


//1) Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? and what do do?

//2) Breaking up into sub-problems
//- How to ignore errors?
//- Find max value in temp array
//- Find min value in temp array
//- Subtract min from max (amplitude) and return it

const calcTemAmplitudeNew = function (t1, t2){
    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i=0;i<temps.length;i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

// const amplitude = calcTemAmplitude(temperatures);
// console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const amplitudeNew = calcTemAmplitudeNew([3,5,1], [9,0,5]);
console.log(amplitudeNew);

const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:'))
    };

    console.log(measurement);
    console.table(measurement);


    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());
*/

///////////////////////////////
//Coding challenge #1

// 1) Understand the problem
// - Array transform to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// -Transform array into string
// -Transform each element to string with C
// -String needs to contain day (index + 1)
// -Add ... between elements and start and end of string


const arr = [17,21,23];

function printForest(arr){
    for(let i=0;i<arr.length;i++){
        console.log(`...${arr[i]}°C in ${[i+1]} days`);
    }
}
printForest(arr);