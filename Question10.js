//Program 1: Sum Numbers
// Simple Sum Program - Calculates and prints the sum of two numbers.
function sum(a, b) {
    return a + b;
}
// Example usage:
const a = 582;
const b = 2356;
const result = sum(a, b);
console.log(`Sum of ${a} and ${b} is : ${result}`); //Output sum of 582 and 2356 is : 2938
//Program 2: Check EvenOdd
// Even/Odd Checker - Checks and prints whether a given number is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is Even Number`);
    }
    else {
        console.log(`${num} is Odd Number`);
    }
}
// Example usage:
const NumbertoCheck = Math.random();
checkEvenOdd(NumbertoCheck); // Output is random
export {};
