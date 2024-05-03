//  Primitive
// JS is dynamically typed language
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "madhav",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // symbol
// console.log(typeof myFunction); function
// console.log(typeof bigNumber); undefined
// console.log(typeof outsideTemp); object
// https://262.ecma-international.org/5.1/#sec-11.4.3