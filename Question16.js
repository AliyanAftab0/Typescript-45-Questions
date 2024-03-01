const guests = ["Rashid", "Nadeem", "Aftab"];
// Function to generate invitation messages
function generateinvitationmessages(guest) {
    return `Dear ${guest}, you are invited to dinner.`;
}
// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guests.unshift("Rashid");
// Add a new guest to the beginning of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Nadeem");
// Use push() to add a new guest to the end of the array
guests.push("Aftab");
// Print a new set of invitation messages
for (const guest of guests) {
    const invitationmessage = generateinvitationmessages(guest);
    console.log(invitationmessage);
}
export {};
