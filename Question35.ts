// Store three different animals with a common characteristic in an array
let animals: string[] = ["Dog", "Cat", "Parrot"]

for (let animal of animals){
    console.log(animal);
}

console.log("\n");

// Modify the for loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet!`);
}

console.log("\n");

// Add a line at the end to state what these animals have in common
console.log("Any of these animals would make a great pet!");