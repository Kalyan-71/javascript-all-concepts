// starts from (jan 1 1970 utc) in ms 

/*
let myDate = new Date();
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)
*/

/*
let newDate = new Date(2023 , 0 ,23)
console.log(newDate.toDateString())

let date = new Date("2023-01-12")//any format yyyy-mm-dd
console.log(date.toLocaleDateString())
*/

let date = new Date("2023-01-12")
let timestamp = Date.now()
// console.log(timestamp)
// console.log(date.getTime())

console.log(Math.floor(Date.now()/1000))//convert to sec
//getMonth() getDay() getTime() ... etc

//date customisation

date.toLocaleDateString('default',{
    weekend:"long"
})