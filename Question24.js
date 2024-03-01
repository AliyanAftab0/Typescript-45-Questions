let string1 = "hello";
let string2 = "world";
let number1 = 10;
let number2 = 5;
let array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);
// Tests using the lower case function
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 > 0 && number2 < 10);
console.log("Is number1 greater than 5 or number2 equal to 5? I predict True.");
console.log(number1 > 5 || number2 === 5);
// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
export {};
