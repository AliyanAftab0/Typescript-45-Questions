// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Calling the function to show magicians' names
show_magicians(magicianNames);
