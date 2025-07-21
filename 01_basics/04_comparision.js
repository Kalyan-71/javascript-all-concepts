// 2>1 2>=1 2<1 2<=1 2==1 2!=1

//but problem ocurs when different data type comparision

/*
console.log("2" > 1) // true
console.log("02" > 1) //true

== works differenly then > , >= , < ...
console.log(null > 0) //false  Number(null)->0
console.log(null == 0) // false
console.log(null >= 0) //true  
*/


//=== strict check
// checks for type and value
// console.log("2"===2) //false



/**
 * summary data type
*/
/*
* //primitive or call by value
const id1 = Symbol('123')
const id2 = Symbol('123')

//both are different
console.log(id1 === id2)//false


const bigNum = 67867696867667n;//bigint n at end
*/

/*
 //non primitive or reference type (array ,objects,functions)

 const heroes = ["superman" , "chotabeem" ];
 let obj ={
    name:kalyan,
    age : 20
 }

 const myFunction = function(){
    console.log("hello world");
 }

 console.log(typeof myFunction) // function  
 // precisely(object function)
 */