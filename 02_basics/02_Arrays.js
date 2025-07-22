const arr1 = [1,2,3]
const arr2 = ["hello " ,"morning" ,"evening"]

// arr1.push(arr2) //[1,2,3, ["hello","morning","evening"]]
// console.log(arr1)
// console.log(arr1[3][0])

/*
// merging1
const mergearr = arr1.concat(arr2)
//[ 1, 2, 3, 'hello ', 'morning', 'evening' ]
console.log(mergearr)
*/

/*
const arr3 = ['a','b','v']
const mergearr = [...arr1 , ...arr2 ,...arr3]
console.log(mergearr)

*/

const newarr = [1,2,[4,5,3],3,4,[6,7,[3,4,5,[4,5,0],3]]]
const flatarr = newarr.flat(Infinity)//pass depth

console.log(newarr)
console.log(flatarr)


///other case
console.log(Array.isArray("kalyan"))
console.log(Array.from("kalyan"))
console.log(Array.from({name:"kalyan"}))

let a=100
let b= 200
let c=300

console.log(Array.of(a,b,c)) // any type to array