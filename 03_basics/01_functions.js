function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("A");    
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2); 
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}


const result = addTwoNumbers(1, 5)

// console.log(`Result ${result}`);

function loginUserMessage(username = "sudhanshu"){
    if(!username){
        console.log("Please Enter a username");
        return 
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Sudha"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000,));

const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArr = [200, 300,400,500]

function returnSecondValue(getArr) {
    return getArr[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 300,400,500]));
