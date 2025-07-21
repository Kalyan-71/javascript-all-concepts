//Stack (primitive) , Heap (non primitive)

//whenever primitive  used stack (copy) is used
//whenever non primitive  used heap (reference) is used

let name1 = "kalyan"
let name2 = name1  //copy
name2 = "xyz"
console.log(name2)
console.log(name1)

let user1 ={
    email:"one@google.com",
    upi:"abc@upi",
}

let user2 = user1 //reference

user2.email = "kalyan@google.com"

console.log(user2.email)
console.log(user1.email)
