// Define an array of places to visit
let placesToVisit: string[] = ["Makkah", "Madina", "Kashmir", "Palestin", "Dubai"];

// Print the array in its original order
console.log("Original Order", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
let sortedarray = [...placesToVisit].sort()
console.log("Alphabatical Order:", sortedarray)

// Show that the original array is still in its original order
console.log("Oringinal Order (after sorting):", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
let reversesortedarray = [...placesToVisit].sort().reverse()
console.log("Reverse Alphabetical Order:", reversesortedarray);

// Show that the original array is still in its original order
console.log("Original Order (after reverse sorting):", placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse()
console.log("Reversed Order:", placesToVisit)

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse()
console.log("Back to Original Order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort()
console.log("Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a))
console.log("Reverse Alphabetical Order:", placesToVisit);