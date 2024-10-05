/*Name: Simrandeep Kaur, Student ID: 200554998
  Name: Ashmandeep Kaur, Student ID: 200555988
  Name: Krisha Patel 
*/ 

// index.js

// Importing the functions from the second file using ES module syntax
import { printWelcomeMessage, convertUnit, performMathOperation, advancedFunction } from './module.js';

// Calling the functions from the second(module) file

// 1. Calling the first function to print a welcome message
printWelcomeMessage("Harry", "Potter", "G@I College");

// 2. Calling the second function to convert units (e.g., Celsius to Fahrenheit)
// fahrenheit variable will store the result of convertUnit() function
let fahrenheit = convertUnit(30);
console.log(`Converted to Fahrenheit: ${fahrenheit}`);

// 3. Calling the third function to perform a math operation (e.g., square of a number)
// result variable will store the result of performMathOperation() function
let result = performMathOperation(5,2);
console.log(`The result of the math operation is: ${result}`);

// 4. Calling the fourth advanced function (your choice, e.g., checking prime numbers)
// isPrime ariable will store the result of advancedFunction() function
let isPrime = advancedFunction(7);
console.log(`Is the number 7 prime? ${isPrime}`);

