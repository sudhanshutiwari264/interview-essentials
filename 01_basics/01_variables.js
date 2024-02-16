const accountId = 144553
let accountEmail = "sudhanshutiwari264@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //esa bhi hosakta hai

let accountState;
// accountId = 2 // not allowed
accountEmail = "hc@email.com"
accountPassword = "21212121"
accountCity = "banglore"

console.log(accountId);

/*
Prefer not to use var
because of issue in scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])