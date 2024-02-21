const user = {
    username: "Sudhanshu",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sudhanshu"
//     console.log(this);
// }

// chai()

// const chai = function (){
//     let username = "sudhanshu"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "sudhanshu"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// implicit return
// const addTwo = (num1, num2) => num1+num2

// const addTwo = (num1, num2) => (num1+num2) // react mai bohot uise ayega

// agr {} mai wrap kara toh return keyword likhna padega
// and agr () mai kara toh nhi likhna padega

// agr obj return karna hai
const addTwo = (num1, num2) => ({username:"hitesh"})
console.log(addTwo(4,5))

const myArray = [1,2,3,4,5,6]

myArray.forEach((i)=>(console.log(i)))
