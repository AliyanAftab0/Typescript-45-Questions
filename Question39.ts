// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let result1 = city_country("Karachi", "Pakistan")
let result2 = city_country("Istanbul", "Turkey")
let result3 = city_country("New York", "USA")

// Printing the returned values
console.log(result1);
console.log(result2);
console.log(result3);