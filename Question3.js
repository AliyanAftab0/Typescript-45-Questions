let Name = "aliyan";
let uppercaseName = Name.toUpperCase();
let lowercaseName = Name.toLowerCase();
let titlecaseName = Name.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(uppercaseName);
console.log(lowercaseName);
console.log(titlecaseName);
export {};
