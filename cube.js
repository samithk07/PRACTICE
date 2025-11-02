//  1.create an array with some random numbers.
// 2. make it cube (2^3 or 4^3,etc)
// 3. return a new array that contains even number count, odd number cound, sum of both

let num=[5,6,7,8,9]
let cube=num.map(a=>a*a*a)
console.log(cube)


// even number length
let evenNum=cube.filter(a=>a%2===0).length
console.log("Even Number inside the Array is: "  + evenNum)

// odd num length
let oddNum = cube.filter(num =>num%2!==0).length
console.log("Odd Number inside the Array is: "  + oddNum)

// sum of even num
let even=cube.filter(a=>a%2===0)
let odd = cube.filter(num =>num%2!==0)

let sum=even.reduce((a,b)=>a+b)
let oddSum=odd.reduce((a,b)=>a+b)
let sumofboth=sum+oddSum
let result=[" even: "+evenNum," odd: "+oddNum," sum even: "+sum,"sum odd:"+oddSum]
console.log(result)

 



// let sum2=even.reduce((a,b)=>a+b)
// // console.log( "total sum of even number: "+sum2);

// let sum3=odd.reduce((a,b)=>a+b)
// // console.log( "total sum of odd number: "+sum3);

// let evenresult=["total sum of odd number: "+sum2]
// let oddresult=["total sum of even number: "+sum3]
// console.log(evenresult)
// console.log(oddresult)
