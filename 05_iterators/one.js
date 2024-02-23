// for 
// for (let i = 0; i <= 10; i++) {
//     // const element = i;
//     if(element == 5){
//         console.log("5 is best : )");
//     }
//     console.log("--->>",element);
// }

// console.log(element);

// for(let i = 0; i <= 10; i++ ){
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`${i} X ${j} = ${i*j}`)
//     }
// }

let myArr = ["Shaktiman","Spiderman","Perman"]

for (let ind = 0; ind < myArr.length; ind++) {
    const element = myArr[ind];
    // console.log(element)
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Yay 5 detected`);
//         break
//     }
//     console.log(`Value of i is ${index}`);    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Yay 5 detected`);
        continue
    }
    console.log(`Value of i is ${index}`);    
}