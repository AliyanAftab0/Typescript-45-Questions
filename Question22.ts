// Define an array of fruits
const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Intentional error: Accessing an index that doesn't exist
console.log(fruits[10]);  // This will produce an index error

// Correct the error by accessing a valid index
console.log(fruits[2]);   // Accessing the third element (Orange) at index 2