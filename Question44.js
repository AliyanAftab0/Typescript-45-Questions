// Function to create a sandwich summary
function order_sandwich(...items) {
    console.log("Sandwich Summary");
    if (items.length === 0) {
        console.log("No items specified for the Sandwich");
    }
    else {
        console.log("Items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy Your Sandwich :");
    }
    console.log("\n");
}
// Calling the function with different numbers of arguments
order_sandwich("Bread", "Cheese", "Tomato", "Lettuce");
order_sandwich("Chicken", "Mayonnaise", "Pickles");
order_sandwich(); // No items specified
export {};
