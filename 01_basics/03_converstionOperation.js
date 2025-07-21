// let score = "33"
// let score = "33abc" //if wrong input 
// let score = null

let score = undefined

console.log(typeof score)
console.log(typeof(score)) 

let valueInNumber = Number(score) 
console.log(typeof valueInNumber) //number
console.log(valueInNumber) //NaN not a number //null-> 0

/**converts to
 "33" => 33
 "33abc" => NaN
 true =>1 ; false=>0
 null=>0
 */

//  let isLoggedIn = 1  //true
//  let isLoggedIn = "" // false
 let isLoggedIn = "kalyan" //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


//******* Operations******** *//

// 2+2  2-2 2*2 2/2 2%2 (2**2 -> power)
// str1 + str2

console.log("1" + 2) //12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") //32

console.log(true) //true
console.log(+true) //1 
// console.log(true+)//error
console.log(+"")//0

/**
 let num1 , num2 , num3
num1 = num2 = num3 = 2+2 // correct but bad readability

 */
