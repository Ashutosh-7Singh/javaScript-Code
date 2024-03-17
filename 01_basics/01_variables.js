const accountId = 144554
let accountEmail = "ahu@google.com"
var accountPassword = "1234"
accountCity = "Muzaffarpur"


// accountId = 2 // not Allowed
accountEmail="adfc.com"
accountPassword = "98765"
accountCity ="paris" // here in js  we can store variable with giving any varibale only bye assingning 


let accountState;
console.log(accountId);
/* 

Prefer not to use var
beacuse of issue in block scope and functional  scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

