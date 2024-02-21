// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})();
// global pollution se bachne k liye use hota hai
// (function ki defination)(call krna)
// semi colon lagana hai so that pata lage
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("sudhanshu")


