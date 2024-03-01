// Initial guest list
const originalGuestList: string[] = ["Aftab", "Mehtab", "Anwar"];

// Function to send dinner invitations
function sendInvitation(guest: string): string {
    return `Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your company.\nSincerely, [Aliyan]`;
}

// Display the initial invitations
console.log("Initial Invitations:");
originalGuestList.forEach((guest) => {
    const invitationMessage = sendInvitation(guest);
    console.log(invitationMessage);
    console.log("---------------------");
});

// Simulate a guest not being able to make it

const UnableToAttendent: string = "Anwar"
console.log(`\nUnfortunately, ${UnableToAttendent} can't make it to the dinner.\n`)

// Replace the guest who can't make it with a new guest

const NewGuest = "Muneer"
const indexOfUnableToAttend = originalGuestList.indexOf(UnableToAttendent);originalGuestList[indexOfUnableToAttend] = NewGuest

// Display the updated invitations

console.log("\nUpdated Invitations:");
originalGuestList.forEach((guest) => {
    const invitationMessage = sendInvitation(guest)
    console.log(invitationMessage);
    console.log("---------------------");
});