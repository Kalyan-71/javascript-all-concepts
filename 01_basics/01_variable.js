const id = 7841
let email ="kalyan@google.com"
var password = "232323"

// it store in memory but bad practice
city = "hyderabad" 

let userState; // undefined

// id = 1234   // not allowed it is "const"

email = "xyz@email.com"
password = "565656"
city = "bengaluru"

console.log(id);

// prining using table for multiple variables


console.table([id , email , password ,city ,userState])

/*
var => not used due to scope    scope (means { })

Prefer not to use var
because of issue in the block scope and functional scope
*/