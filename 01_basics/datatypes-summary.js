// Primitive 

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

// const bigNumber = 342545658415213345686n


// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman","naagraj","doga"] ;
let myObj = {
    name : "Suhdanshu",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof heros);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)(by Reference)(origional value mai change hoga)

let myYoutubeName = "sudhanshutiwaridotcom"

let anotherName = myYoutubeName

anotherName = "mera channel"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sudhanshu@google.com"

console.log(userOne.email)
console.log(userTwo.email);

