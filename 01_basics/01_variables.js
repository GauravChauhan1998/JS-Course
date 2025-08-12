const accountId = 213675;
let accountEmail = "gaurav@google.com"
var accountPassword = "12345"
accountCity = "Delhi"        //it is not a good practice, but we can define variable like this
let accountState;   //it will assigned a vale 'undefined'

// accountId = 65823;  //we cannot re-assign value to a const variable.

// we should not use var beacuse of issue in block scope and functional scope.

accountEmail = "gd@gd.com"
accountPassword = "43627"
accountCity = "Jaipur"
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])