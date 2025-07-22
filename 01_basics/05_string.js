const name = "kalyan"
const count = 20

// console.log(name + count + " Value")//old way

//string interpolation
// console.log(`hello my name is ${name} and age is ${count}`)

///try in browser console
let gameName = new String('   8-ball-pool  ') // object 
//string functions
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
////substring , slice , trim , replace , split
const str = gameName.slice(-4 , 8)
console.log(str)

console.log(gameName.toString())
console.log(gameName.trim())

const url = "https://kalyan.com/kalyan%20kumar"
console.log(url.replace('%20' , '-'))