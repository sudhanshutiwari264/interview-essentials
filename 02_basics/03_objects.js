// singleton 

// agr constructrs se bnta hai toh singleton bnta hai 

// object literals 
// key value pair hota hai 

const mySym = Symbol("key1")

const JsUser = {
    name: "sudhanshu",
    "full name": "Sudhanshu Tiwari",
    [mySym]: "mykey1",
    age:20,
    location: "jaipur",
    email: "sudhanshu@google.com",
    isLoggedIn: false,
    lastLogginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "Sudha@gmail.com"
// locking the values 
// Object.freeze(JsUser)
JsUser.email = "hehe@new.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())