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
//calculating the total number of coins

console.log(`Final value amount: ${finalValue}`);
//answer for final value amount = 123

let totalMoney = ("$22.53")
console.log(`Total dollar amount: ${totalMoney}`);
//total dollar amount.

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

//End of Coin Sorter and Wrapper Calculator





const challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

//Requests 
//Give me the total amount of each coin
//ex: dime = 234
//convert the total amount of coins into dollars (US currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)


//Using the reduce() method to iterate over any given array to create an object that stores the count of each element.
const count = challengeData.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(count); //You can use count.variable (whatever name your varible is) to call it in an object!
//dimes: 123 pennies: 117 nickles: 118 quarters: 109

//defining an array of coin value and quantity of coins
let coinVal = [.01, .05, .10, .25];
let quantityofCoins = [123, 118, 123, 109];

//calculating coin value and amount of each coin
let pennyCurr = (coinVal[0] * quantityofCoins[0]);
console.log(`Total dollar amount of pennies: $ ${pennyCurr} `);

let nickleCurr = (coinVal[1] * quantityofCoins[1]);
console.log(`Total dollar amount of nickles: $ ${nickleCurr}`);

let dimeCurr = (coinVal[2] * quantityofCoins[2]);
console.log(`Total dollar amount of dimes: $ ${dimeCurr} `);

let quaterCurr = (coinVal[3] * quantityofCoins[3]);
console.log(`Total dollar amount of quaters: $ ${quaterCurr} `);

//Adding up the total money amount 
let totalmoneyAmount = (pennyCurr + nickleCurr + dimeCurr + quaterCurr);
console.log(`Total money amount overall: $ ${totalmoneyAmount.toFixed(2)} `);
//.toFixed(# of decimal places you want) to round up or down for numbers :)

//End of calculations for this request