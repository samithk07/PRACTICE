// example for sort()
// this is to used to sort the string value arrange it in alpabetically
// let fruits=["apple","mango","cherry"];
// fruits.sort()
// console.log(fruits)

// TO SORT NUMBER WE USE (a,b)=>a-b)
// let num=["1","45","56","345","32","78"]
// num.sort((a,b)=>a-b)
// console.log(num)

// EXAMPLE FOR Reverse()
//  this is used to revers the array 
// let fruits=["apple","mango","cherry"]
// fruits.reverse()
// console.log(fruits)

// EXAMPLE FOR tosort()
// this is used to sort the array by giving the orginal and sorted arry together
// let fruits=[1,5,4,23,45,24,345]
// let result=fruits.toSorted((a,b)=>a-b)
// console.log(fruits)
// console.log(result)


// EXAMPLE FOR toReversed()

// this is returns a new number array without changing the origin
// let fruits=["apple","mango","cherry","bananaa"]
// let result=fruits.toReversed()
// console.log(fruits,result)


// THIS IS THE EASY WAY TO FINT THE MINIMUM NUMBER FORM THE ARRAY
// let numbers = [1, 4, 2, 32, 35, 566, 68, 3455];
// let min = Math.min(...numbers);
// console.log(min); 
  

// THIS IS FOR OBJET SORTING 
// code is for sorting the age 

// let object=[
//     {name:"samith",age:"22"},
//     {name:"irfad",age:"12"},
//     {name:"adil",age:"52"},
//     {name:"ashfak",age:"29"},
//     {name:"adnan",age:"92"},
//     {name:"thasmeer",age:"82"},
//     {name:"maharoof",age:"62"},
// ]
// let sortTheName=object.sort((a,b)=>a.age-b.age);
// console.log(sortTheName)


// let object=[
//     {name:"samith",age:"22"},
//     {name:"irfad",age:"12"},
//     {name:"adil",age:"52"},
//     {name:"ashfak",age:"29"},
//     {name:"adnan",age:"92"},
//     {name:"thasmeer",age:"82"},
//     {name:"maharoof",age:"62"},

   
// ]
//  let SortByName=object.sort((a,b)=>a.name.localeCompare((b.name)))
//  console.log(SortByName) 

//   EXAMPLE FOR MAP
// this code is to multiplie the every number one bey one
//  let number=[1,32,545,112,43,55,]
//  let result=number.map(number=>number*2 )
//  console.log(result)

// EXAMPLE OF filter()
// this is code is used to get all small number than 10

// let arr=[43,5,1,23,4,64,8,578,65]
//  let newarr = arr.filter((a)=>{
//     return a<10
// })
// console.log(newarr)

// THIS FOR THE REDUCE METHODE 
// this code is used to add all the number and return single value
// reduse only return single value
// let num=[1,2,3,4,]
// let newNum=num.reduce((a,b)=>{
//     return a+b
// })
// console.log(newNum)

// ARRAY forEach()
 
// let num=[2,4,6,8,9,10]
// num.forEach(function(number){
// console.log(number)
// })

// const fruits=["apple","banana","cherry","mango"]
// fruits.forEach(function(fruits){
//     console.log("this is "+fruits)
// })

// let fruits=["apple","mango","banana"]
// delete fruits[1]
// console.log(fruits)

// let fruits=[1,2,3,4,5]
// fruits.copyWithin(0,3)
// console.log(fruits)

// let num=[1,[2,3,[4,5],6]]
// console.log(num.flat(2))


// function myname(name){
//     console.log("my name is " + (name))
// }
// myname("samith")

                                                        // DAY -2

// this is Anonymous Function

// let word=function(){
//     console.log("hai there")
// }
// word()

//  let sum=function(a,b){
// return a+b
//  }
//  console.log(sum(10,5))



//  function outer(){
//     let name=["samith"]

//     function inner(){
//         console.log("hello"+name)
//     }
//     inner()
//  }
//  outer()

// function factorial(n){
//     if(n===1)return 1
//     return n*factorial (n-1)

// }
// console.log(factorial(5))

function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  let name = "Ram";
  callback(name); // calling the function passed as argument
}

processUserInput(greet);

//helloooo
