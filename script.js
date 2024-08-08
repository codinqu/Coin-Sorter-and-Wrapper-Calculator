// Coin Sorter and Wrapper Calculator

//Objective = Create a JavaScript program that calcs the total value of coins in US currency.
//Sort those coins into coin wrappers.
//The program will then output the number of coin wrappers needed and the total amount in dollars.


//Defining multiple arrays.

let coins = [.01, .05, .10, .25];

let coinName = ["pennies", "nickles", "dimes", "quaters"];

let coinAmount = [300];

let totalValue = [3, 15, 30, 75];

let wrapperAmount = [50, 40, 50, 40];


//Calculations 
//calculating the final value of coins together 
let finalValue = (totalValue[0] + totalValue[1] + totalValue[2] + totalValue[3]);

console.log(`Final value amount: ${finalValue}`);
//answer for final value amount = 123

//End of first calculations


//Wrapper Calculations
//Calc # of wrappers for each coin
//Divide each coin: coinAmount / wrapperAmount
// console.log the whole array : (wrapsFilled)

let pennies = (coinAmount[0] / wrapperAmount[0]);
let nickles = (coinAmount[0] / wrapperAmount[1]);
let dimes = (coinAmount[0] / wrapperAmount[2]);
let quaters = (coinAmount[0] / wrapperAmount[3]);

let wrapsFilled = [6, 7.5, 6, 7.5];
console.log(`Wraps filled for each type of coin: ${wrapsFilled}`);
//answer: wrapsFilled = [6, 7.5, 6, 7.5]

//total wrappers filled in general 
let totalWrappers = (wrapsFilled[0] + wrapsFilled[1] + wrapsFilled[2] + wrapsFilled[3]);
console.log(`Total wrappers filled: ${totalWrappers}`);
//answer: 27

//End of wrapper calculations


//Modulus
//let remainCoins =
//(# % #) coinAmount % wrapperAmount
//console.log(# % #);

let remainCoins = (300 % 27);
console.log(`Remaining coins: ${remainCoins}`);
//answer: 3

//End of modulus calculation.


