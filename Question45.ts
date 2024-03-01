import { colors } from "chalk";

// Interface to define the structure of car information
interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow additional arbitrary properties
}

// Function to store information about a car
function createCar(manufacturer: string, modelName: string, ...options: any[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    }

    // Add additional properties to the car object
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car
}
// Calling the function with required and optional information
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["Features",["GPS", "Sunroof"]])

// Printing the returned object
console.log(myCar);