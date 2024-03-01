let Name:string = "aliyan"
let uppercaseName:string = Name.toUpperCase()
let lowercaseName:string = Name.toLowerCase()
let titlecaseName:string = Name.replace(/\b\w/g, (char) => char.toUpperCase())
console.log(uppercaseName);
console.log(lowercaseName);
console.log(titlecaseName);
