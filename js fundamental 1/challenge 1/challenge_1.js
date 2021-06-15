
// Coding Challenge#1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).

// Your tasks:
// 1.Store Mark's and John's mass and height in variables.
// 2.Calculate both their BMIs using the formula (you can even implement both versions)
// 3.Create a Booleanvariable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.


// Test data:
// Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀



// Solution

let markMass = 78;
let markHeight =1.69;
let markBMI = markMass/ markHeight ** 2;
console.log(markBMI);



let johnMass = 92;
let JohnHeight = 1.95;
let johnBMI = johnMass/ JohnHeight ** 2;
console.log(johnBMI);




let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

