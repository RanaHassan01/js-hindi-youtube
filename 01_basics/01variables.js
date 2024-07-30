const accountId = 13324
let accountEmail = "12rana@gmail.com"
var accountPassword = "hellorana"
accountCity="Delhi"

//accountId = 2987 // not allowed
console.log(accountId);
accountEmail = "rana87@gmail.com"
accountPassword = "rana"
accountCity = "New Delhi"
console.table([accountId, accountEmail, accountPassword, accountCity])
/*
prefer not to use "var"  because of issue in block scope and functional scope
*/