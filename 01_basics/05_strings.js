const name = "madhav"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('madhav-hc-com')  // declaring the string

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   madhav    "
console.log(newStringOne); //    madhav       with gap
console.log(newStringOne.trim()); // madhav    without gap

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))

console.log(gameName.split('-'));