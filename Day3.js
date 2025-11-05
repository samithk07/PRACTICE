
// STACK OVERFLOW

// function outer() {
//     outer()
// }

// outer()
// ******************************************************************************************************************************************************

//UNDER FLOW

// let stack = [];

// // Trying to remove an element when the stack is empty
// function popElement() {
//   if (stack.length === 0) {
//     console.log("⚠️ Stack Underflow: No elements to remove!");
//   } else {
//     stack.pop();
//   }
// }

// popElement(); // Trying to pop from an empty stack



// ************************************************************************************************************************************************************************

//CLASS

// In JavaScript, a class is a blueprint for creating objects with specific properties and methods.
// It was introduced in ES6 (ECMAScript 2015) and provides a cleaner, more readable syntax for working with constructor functions and prototypes.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {//IN CLASS WE NO NEED TO ADD FUNCTION KEYWORD
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const person1 = new Person("John", 25);
// person1.greet(); // Output: Hello, my name is John and I'm 25 years old.


// CONSTRUCTOR IN OBJECT

// class user{
//     constructor(name,age,city){
//         this.name=name
//         this.age=age
//         this.city=city
//     }
// //     person(){
// //         console.log(`my name is ${this.name} my age is ${this.age} iam from ${this.city}`)
// //     }
// }
// let person1=new user("samith",25,"kasaragode")
// console.log(person1);

// // person1.person()

// **************************************************************************************************************************************************************************************

// extands

// The extends keyword is used in class inheritance.
// It allows one class (child/subclass) to inherit properties and methods from another class (parent/superclass).
// In simple words:
// extends means "this class is a child of another class".


// 🧠 Why use extends?
// Because it helps reuse code — the child class can use (or override)
//  everything the parent class already has, instead of rewriting it.



// class user{
//     constructor(name,age,city){
// this.name=name
// this.age=age
// this.city=city

//     }
//     details(){
//         console.log(` User Details is:Name ${this.name} Age: ${this.age} place ${this.city}`)

//     }
// }
// class user1 extends user{

//     wellcome(){
//         console.log(`Wellcome ${this.name}`)
//     }

// } 

// let person=new user1("samith",21,"uppala")
// person.details()
// person.wellcome()


// ******************************************************************************************************************************************************************************************************


// SUPER
// The super() keyword is used inside a child class to call the constructor or methods of its parent class.
// It’s required when the child class has its own constructor and wants to reuse or extend the parent’s properties.


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Admin extends User {
//   constructor(name, age, role) {
//     super(name, age); //  calls parent constructor
//     this.role = role; // now we can use 'this'
//   }

//   showDetails() {
//     console.log(`${this.name} Age: ${this.age} is an ${this.role}`);
//   }
// }

// const a1 = new Admin("Samith", 21, "Admin");
// a1.showDetails();
// ****************************************************************************************************************************************************************************************

// copy
// 🧩 What is a Copy?
// When you copy an object or an array in JavaScript, there are two main types:


// 1.Shallow Copy → Copies only one level (outer layer).

// A shallow copy copies only the top-level properties of an object.
// If the object has nested objects, it copies only the reference (not the actual nested value).

// let user={
//     name:"Smaith",
//     address:{
//             city:"uppala"
//         },

//        fullname:{ firstname:"kiran",lastname:"kumar"}
//     }
//     let shallowcopy={...user}
    
    
//     shallowcopy.name="manglore"
//     shallowcopy.fullname.firstname="anu"
    
//     console.log(user);
//     console.log(shallowcopy)
    
    // 2.Deep Copy → Copies all levels (nested objects/arrays too).
    
//     let person={
//         name:"Samith",
        
//         city:{place:"uppala"},
//         age : 22
//     }
    
//     let deepcopy=JSON.parse(JSON.stringify(person))//there are two way to deepcopy the objet
//     // let deepcopy=structuredClone(person)

// person.city.place="kasaragode"
// console.log(person);
// console.log(deepcopy);

// ********************************************************************************************************************************************************************************************************

// INSTSNCE
// Instance methods are functions defined inside a class that can be used by each object (instance) created from that class.
// class person{
//     constructor(name,age,place){
//         this.name=name
//         this.age=age
//         this.place=place


//     }
//     //this is the instance method
//     user(){
//         console.log(`I am ${this.name} am ${this.age} years old from ${this.place}`)
//     }
// }
//creating a instace of person  
// let user1=new person ("samith",21,"Uppala")
// let user2=new person ("Kiran",22,"Kumbala")

// user1.user()
// user2.user()

// ***************************************************************************************************************************************************************************************
// memoization code 👇


// function memo () {
//     let cache={}

//     return function(n){
//         if (cache[n]){
//             console.log("from Cache");
//          return cache[n]   
//         }
//         else{
//             console.log("Calculating......")
//             let result=n+11
//             cache[n]=result
//             return result
//         }
//     }
// }
// let add=memo()
// // console.log(add(5));
// // console.time()
// // console.log(add(5));
// // console.timeEnd()
// // console.time()
// // console.log(add(5));
// // console.timeEnd()
// console.log(add(5))
// console.log(add(5))
// console.log(add(5))









 