// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number} {
    // Create an empty album object
    let album: {artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Add tracks to the album if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    // Return the album object
    return album;

}

// Creating three albums with different information
let album1 = make_album("Artist1", "Album1", 10)
let album2 = make_album("Artist2", "Album2")
let album3 = make_album("Artist3", "Album3",5)

// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);