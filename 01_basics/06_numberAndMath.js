/*
const score = 234
console.log(score);

const num = new Number(123)  //better way
console.log(num);
console.log(num.toString());
console.log(num.toFixed(2));


const num2 = 234.94994
console.log(num2.toPrecision(6))

const hundereds = 10000000
console.log(hundereds.toLocaleString('en-IN')) //for , seperate
*/


/************MATH**************/
// console.log(Math) // try in browser

//abs() round() floor() ceil() min(1,2,3,6,5) max(1,2,3)


console.log(Math.random())
console.log((Math.random()*10)+1) // to avoid 0.03->0.3


//for range of numbers
const min = 10
const max = 20

const rangeNum = Math.floor(Math.random() * (max-min+1)) +min

console.log(rangeNum)