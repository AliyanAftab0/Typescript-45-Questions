let users: string[] = ["Aliyan", "Haris", "Farhan", "Moiz", "Abdul Rehman"];
// Check if the list of users is not empty
if (users.length > 0) {
    // If the list is not empty, perform the existing logic
    users.forEach((user, index) => {
        console.log(`User ${index + 1}: ${user}`);
    });
} else {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}

// Remove all usernames from the array
users = [];

// Check if the list of users is not empty after removal
if (users.length > 0) {
    users.forEach((user, index) => {
        console.log(`User ${index + 1}: ${user}`);
    });
} else {
    console.log("We need to find some users!");
}
