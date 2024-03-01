// Define an array of Pakistani poetry objects
const pakistaniPoetry = [
    { title: "Kulliyat-e-Iqbal", poet: "Allama Iqbal", publicationYear: 1924 },
    { title: "Shikwa", poet: "Allama Iqbal", publicationYear: 1909 },
    { title: "Bang-e-Dra", poet: "Allama Iqbal", publicationYear: 1924 },
    { title: "Nayaft", poet: "Ahmed Faraz", publicationYear: 1976 },
    { title: "Kulliyat-e-Faiz", poet: "Faiz Ahmed Faiz", publicationYear: 1965 },
];
// Print information about each piece of Pakistani poetry
pakistaniPoetry.forEach((poetry) => {
    console.log(`Title: ${poetry.title}, Poet: ${poetry.poet}, Year: ${poetry.publicationYear}`);
});
export {};
