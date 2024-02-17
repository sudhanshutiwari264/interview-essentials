const name = "sudhanshu"
const repoCount = 50

// console.log(name + repoCount + " Value"); //outdate hai 

// use back ticks 

console.log(`Hello my name is ${name} and my repo is 
${repoCount}`); 

/*
String interpolation in JavaScript is a way to embed expressions 
within string literals. This lets developers create dynamic strings 
that can be updated based on the values of variables or the 
results of expressions.
To use string interpolation, you can use the ` ${expression}` syntax.
The expression can be any valid JavaScript expression, 
such as a variable name, a function call, or a mathematical operation.
*/

const gameName = new String("sudhanshu")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("s"));

const newString = gameName.substring(-2,4)
console.log(newString); 

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = "   sudhanshu  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudhanhsu.com/sudhanshu%20tiwari"

console.log(url.replace("%20",'-'));

console.log(url.includes("sudhanshu"));

console.log(url.split("/"));