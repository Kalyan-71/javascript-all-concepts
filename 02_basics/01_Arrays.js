//arrays  - resizable ,different datatypes, copy by reference , deep copy

const arr1 = [1,2,3, 4 ,5, 9]
const arr2 = new Array(1,4,7,8,9)

// console.log(arr2)

//arrays method

// arr2.push(-1)
// arr2.push(-6)
// arr2.pop()

// arr2.unshift(99)//add front
// arr2.shift()//  remove front


// console.log(arr2)
// console.log(arr2.includes(-1))
// console.log(arr2.indexOf(8))

// const arr3 = arr2.join()//converts to string
// console.log(arr2);
// console.log(arr3);


///slice  splice

console.log(" A",arr2)

const arr3 = arr2.slice(1,4)

console.log(arr3);
console.log("B",arr2);


const arr4 = arr2.splice(1,4) //*original array changes
console.log("C",arr2);
console.log(arr4);
