// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); true
// console.log("02" > 1); true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
//comparisons convert null to a number , treating it as 0 
// that's why null>0 is false and null>=0 is true

console.log(undefined == 0);  // false 
console.log(undefined > 0);   // flase
console.log(undefined < 0);   // false

// === 
// strict checking
// no conversion
console.log("2" === 2);