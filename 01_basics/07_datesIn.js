// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date("2024-01-22")
console.log(myCreatedDate.toLocaleString());

const newDate = new Date()

newDate.toLocaleString('default',{
    weekday:'long'
})
