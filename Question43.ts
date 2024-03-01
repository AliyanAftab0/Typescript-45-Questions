// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great by modifying the array
function make_great(magicians: string[]): string[] {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(magician => magician + " the Great");
}

// Array of magician's names
let originalMagicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Creating a copy of the original array
let copiedMagicians: string[] = [...originalMagicians];

// Calling the function to make magicians great with the copied array
let greatMagicians: string[] = make_great(copiedMagicians);

// Calling the function to show original magicians' names
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Calling the function to show modified magicians' names
console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicians);