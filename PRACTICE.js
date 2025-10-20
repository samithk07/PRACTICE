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

// function greet(name) {
//   console.log("Hello, " + name);
// }

// function processUserInput(callback) {
//   let name = "Ram";
//   callback(name); // calling the function passed as argument
// }

// processUserInput(greet);

  //  Spread Array
// let arr1=[1,2,3,4, 5]
// let arr2=[6,7,8,9,10]
// let arr3=[...arr1,...arr2]
// console.log(arr3)


        // IIFE
// (function(){
//   console.log("this is IIFE")
// })()


                                                                                    // IIFE EXAMPLE
 
// (function(){
//   let counter=10;
//   function increment(){
//     counter++
//     console.log("Counter :",counter)

//   }
//   increment()
//   increment()
// })  ()    //Counter : 11
//          // Counter : 12
// IF WE PUT OUTSIDE THE IIFE A CONSOLE IT WILL SHOW THAT NOT DIFINED
// BECAUSE THE IIFE SHOULD CALL INSIDE THE FUNCTION
// console.log(counter)

                                                                                   //  rest parameter

// function word(...name){
// console.log(name);
 
// }      
// word("samith","kiran","ram");

// DAY 2
  
// JS Object

// // 1.OBJECT LITERAL
// // objet literal is the simplest way to create a Object

// let car={
//   brand:"tesla",
//   model:"model 7"

// }
// // this is the simplest way to create object{}

// 2.USING THE newKEY 
// IN JS BUILT-IN OBJECT() CONSTROCTOR TO CREATE A NEW OBJECT
// YOU CAN CREATE AN EMPTY OBJECT AND ADD PROPERTICS LATTER

// let student =new Object()
// student.name="samith"
// student.age=21
// student.class="bca"
// console.log(student)


//  let student ={
// firstname:"abdul",
// lastname:"adil",
// age:78,
// fullname:function(){
//   return this.firstname+this.lastname
// }  
// }
// console.log(student.fullname())

                                                                                    // OBJET MEETHOD


// 





                                                                                     // THIS

// 1.THIS IN Object

// let student={
//   name:"Samith",
//   wellcome:function(){
//     console.log("hello" + this.name)
//   }
// }
// student.wellcome()

// 2.THIS IN FUNCTION
// IN NORMAL Function
// function show() {
//   console.log(this);
// }

// show();

// IN STRICT 
// "use strict";

// function show() {
//   console.log(this);
// }

// show();//undifined

// 3.THIS IN CONSTRUCTOR FUNCTION

// function student(name,age){
//   this.name=name,
//   this.age=age,
//   this.greet=function(){
//     console.log("hello,my name is "+ this.name)
//   }
// }
// let student1=new student("samith",21)
// let student2=new student("pooja",19)
 
// student1.greet()
// student2.greet()

// 4.THIS IN ARROW FUNCTION

// const student = {
//   name: "Samith",
//   showName: function() {
//     const arrow = () => {
//       console.log("My name is " + this.name);
//     };
//     arrow();
//   }
// };

// student.showName(); // My name is Samith

//                                                                                  Array Destructuring

//  let num=[10,20,30,40,]
//  let [a,b,c,d]=num
//  console.log(a)//10
//  console.log(d)//20

// 1.Skip Items

// let num=[10,20,30,40]
// let [a,,b]=num
// console.log(a)
// console.log(b)

// 2.Default Values

// const fruits = ["apple"];
// const [f1, f2 = "banana"] = fruits;

// console.log(f1); // apple
// console.log(f2); // banana (default value used)
 
// 3.Swap Variables Easily
      
//  let  x=10;
//  let y=20;
// [x,y]=[y,x]
// console.log(x)

// 4.Destructure Nested Array

// let num=[10,20,[30,40]]
// let [a,b,[c,d]]=num
// console.log(d)

//                                                                            // Object destructuring

// let person={
//   name:"samith",
//   age:22
// }                                                                           
// let{name,age}=person
// console.log (name)


//                                                                     HOISTING
  
//1. VAR HOISTING
// console.log(a);
// var a=10
// becase the var is hoisted on the top of the var so the it will be undifined

// 2. IN  LET AND CONST 
 
// console.log(a)
// let a=10

// let and const are also hoisted,
// but they go into a Temporal Dead Zone (TDZ) from the start of the scope until their declaration line. 
// You can’t access them before they are declared.

// 3.FUNCTION DECLARATION HOISTING

// sayhello()
// function sayhello(){
  // console.log("hello")
// }
// Function declarations are fully hoisted with their body.
// JavaScript knows the whole function before executing code.

 // 4. Function Expression Hoisting

// greet(); // TypeError: greet is not a function
// var greet = function() {
//  console.log("Hi!");
// };

// here the the geert is not the function
// the function expression is not fully hoisteed
// it hoist only the variable part (var greet) is hoisted not the function itself 

// 4-1.If you use let or const instead:
 
// greet(); //  ReferenceError
// let greet = function() {
  // console.log("Hello!");
// };









                                                                      // DAY-3
                     
// PURE FUNCTION
// the pure function return the same output from same input 
// function num(a,b){

//   return a+b
// }
// console.log(num(5,10))
// console.log(num(5,10))

// IMPURE FUNCTION

// an impure function  can produce diffrent output from same input
let num=0;
function add(value){
  num+=value
  return num

}
console.log(add(5))
console.log(add(5))