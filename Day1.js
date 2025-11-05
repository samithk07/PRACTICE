

// // What is Synchronous?

// // Definition:
// // Synchronous means tasks run one after another, in sequence.
// // Each task waits for the previous one to finish before it starts.

// // Example (in JavaScript):

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
//// here the synchronous works the the second task wait for the first task to be executed

// Used when:
// Tasks are simple and don’t depend on external resources (like APIs or files).
// You want predictable, step-by-step execution.




// 2. What is Asynchronous?

// Definition:
// Asynchronous means tasks can run independently — they don’t wait for each other to finish.
// The program keeps running while waiting for slow operations (like API calls, timers, or file reading).

// Example (in JavaScript):
// console.log("Task 1");

// setTimeout(() => {
//   console.log("Task 2 (after 2 seconds)");
// }, 2000);

// console.log("Task 3");

// "use strict"
// a=10
// b=20
// c=a+b
// console.log(c);














