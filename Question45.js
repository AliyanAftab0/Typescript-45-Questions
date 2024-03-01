// Function to store information about a car
function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional properties to the car object
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
// Calling the function with required and optional information
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["Features", ["GPS", "Sunroof"]]);
// Printing the returned object
console.log(myCar);
export {};
