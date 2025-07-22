//can create by lieral or constructer

//singleton if created by constructor  (single reference)  ie.. (object.create)

///object iterals


//symbol how to add to object
const mySym = Symbol("key1")

const user = { //keys and values
    
    name : "kalyan",
    [mySym] : " myKey1", //syntax for symbol toAddIn obj
    "full name" : "kumar",
    age:20,
    email:"kalyan@google.com"
}

/*
//accesing
console.log(user.email)
console.log(user["email"])
console.log(user["full name"]) //cannot use .operator
console.log(user[mySym]) // acess by []

//to change
user.email = "kalyan@bing.com"

Object.freeze(user) //cannot change now
user.email = "kalyan@xyz.com"
console.log(user)

*/

//adding element
user.greeting = function(){
    console.log("hello greetings")
}
console.log(user.greeting()) //call function
console.log(user.greeting)//function reference