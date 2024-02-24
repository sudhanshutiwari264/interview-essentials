// for of 
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const elem of arr) {
    // console.log(elem);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(greet);
}

// Maps 

const map = new Map()

map.set("IN","India")
map.set("USA","UNited Staes Of America")
map.set("Fr","france")
map.set("IN","India")


// console.log(map);

for (const [key,value] of map) {
    // console.log(key,`:- ${value}`);
}

const myobj = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key,value] of myobj) {
//     console.log(key,`:- ${value}`);
// }
// for (const key in map) {
//     console.log(map);
// }