// var c = 300 
let a = 300
if(true){
    let a = 2
    const b = 20
    c = 30
    // console.log("INNER: ",a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sudhanshu"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username = "sudhanshu"
    if(username === "sudhanshu"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// +++++++++++++++++ intresting +++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}

// expression bolte hai neeche wale ko 

// addtwo(5) yeh wala error hai initial global execution ki wajhe se 
// hoisiting hai 

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5));


const person = "Sudhanshu";

function girlfriend() {
    return true;
}

// Oops! Let's keep girlfriend out of scope for Sudhanshu
delete person.girlfriend;

console.log(person + "'s relationship status: " + (girlfriend() ? "In a relationship" : "Single"));
