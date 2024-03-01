// Function to show magicians' names
function show_magicians(magicians: string[]): void{
    for(let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great by modifying the array
function make_great(magicians: string[]): string[] {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(magician => magician + "the Great");
}
// Array of magician's names
let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Calling the function to make magicians great
let greatMagicians: string[] = make_great(magicianNames)

// Calling the function to show modified magicians' names
show_magicians(greatMagicians);