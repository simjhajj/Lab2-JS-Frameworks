// module.js

// 1. First function: No return, just prints a welcome message with concatenated text
// export keyword makes the function available to be used by other files 
// printWelcomeMessage is the function' name
// It has 3 parameters, 3 values have to provided as arguments to the function
// console.log() is a built in javascript function used to output the text on the console of  browser or in the terminal
// Use of backticks `` to embed variables directly in the string using $ sign
export function printWelcomeMessage(firstName, lastName, collegeName) {
    console.log(`Welcome ${firstName} ${lastName} to ${collegeName}`);
}

// 2. Second function: Returns a converted unit value (e.g., Celsius to Fahrenheit)
// this function  has 1 parameter which takes celsius as the input
export function convertUnit(celsius) {
    // Convert Celsius to Fahrenheit
    // formula to convert temperature from celsius to fahrenheit has been used
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// 3. Third function: Performs a math operation (e.g., raise number to given exponent)
// The function has 2 parameters which take base and exponent as inputs
export function performMathOperation(base, exponent) {
    // Let's return the square of the number
    return Math.pow(base, exponent);
}


// 4. Fourth advanced function: Check if a number is prime
// this function has 1 parameter which takes number as the input
// the function returns true if the number is prime, false otherwise
export function advancedFunction(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

