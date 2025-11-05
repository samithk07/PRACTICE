
// temporal dead Zone

// ⚙️ How It Works:
// Memory is allocated for all variables (even let and const) when the scope is created.
// But unlike var, they are not initialized with undefined immediately.
// The variable stays in the TDZ from the start of the block until the line of initialization.
// Once initialized, it can be accessed normally.
// 🧩 Key Points:
// Variables declared with let and const are hoisted but remain uninitialized until execution reaches their line.
// Accessing them before initialization results in a ReferenceError (not undefined).
// The TDZ ensures safer code by preventing use of variables before they are ready.


// console.log(b)//undefined(its not in tdz)
// console.log(a)//ReferenceError: Cannot access 'a' before initialization
// let a=10
// var b=100

// let a;
// a=10
// console.log(a)

// const b;
//  b=1000
//  console.log(b)

// ********************************************************************************************************************************************************

// ⚙️ Exception Handling in JavaScript
// Definition:
// Exception handling is a way to manage runtime errors in your code — preventing the program from crashing when something goes wrong.
// 🧠 Key Concepts:
// Exception:
// An error that occurs during code execution (e.g., invalid input, undefined variable, failed API call).
// Throwing an Exception:
// When JavaScript encounters an error, it “throws” an exception — which can be caught and handled using special code blocks.
// Handling an Exception:
// You can use try...catch...finally to gracefully handle errors and keep your program running.
// 🧩 Syntax:
// // 
// try {
//   // Code that may cause an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // (Optional) Code that runs no matter what
// }

// main example



// Write a JavaScript program using try...catch...finally that simulates an ATM PIN verification system.
// Requirements:
// 1.Store a correct PIN in a variable (e.g., 1234).
// 2.Compare it with a user-entered PIN.
// 3.If the PIN is incorrect, throw an error saying "Incorrect PIN! Access Denied."
// 4.If the PIN is correct, print "Access Granted! Welcome to your account."
// 5.In the last block, print "Thank you for using our ATM."


// let setedpin=4321

// try{
//     let userpin=4321//hhere is the user pin should enter
//     if(setedpin!==userpin){
//         throw new Error("Incorrect PIN! Accecc Denied ");
        
//     }
    
//     console.log("Access Granted! Welcome to your Account")

// }
// catch (error){
// console.log(error.message);

// }
// finally{
//     console.log("thank for visiting the bank ");
    
// }




// let name = "John";  // outer variable

// function greet() {
//   let name = "Alice";  // inner variable (shadows outer one)
//   console.log(name);   // Output: Alice
// }

// greet();
// console.log(name);     // Output: John

//  let  b=100
//  {
//     var a=10
//     let b=20
//     const c=30
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b)

// What is “shadowing”?

// Shadowing means declaring a variable with the same name as another variable in an outer scope.
// The inner variable “hides” (or shadows) the outer one.

// ✅ Example of legal shadowing:

// let a = 10;

// function test() {
//   let a = 20; // ✅ legal shadowing
//   console.log(a); // 20
// }
// test();
// console.log(a); // 10


// 🚫 Illegal shadowing example:

// Illegal shadowing happens when you try 
// to shadow a variable declared with let or const using var in the same or inner scope.

// let a = 10;

// {
//   var a = 20; // ❌ Illegal shadowing
//   console.log(a);
// }


