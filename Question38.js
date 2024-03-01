// Function to describe a city with default country value
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); // Using the default country value
export {};
