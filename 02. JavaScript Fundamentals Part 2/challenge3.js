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
