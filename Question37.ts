// Function to create a T-shirt with default values
function Make_Shirt(size: string = "Large", message: string = "I Love TypeScript"): void {
    console.log(`Creating a ${size}-sized T-shirt with the message: "${message}"`);
}

// Creating a large shirt with default message
Make_Shirt()

// Creating a medium shirt with default message
Make_Shirt("Medium")

// Creating a small shirt with a different message
Make_Shirt("Small", "TypeScript is awesome!")