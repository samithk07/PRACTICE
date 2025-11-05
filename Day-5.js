//  Promises and handling Promise-based m{
// ethods


// function checknumber(value){
//     return new Promise((resolve,reject)=>{
//         if (typeof value==="number" && !isNaN(value)){
//             resolve( value  +  " its a valid number" )
//         }
//         else{
//             reject ( value  +  " Its not a valid number" )
//         }
//     })
// }

// checknumber(42)
// .then((a)=>console.log(a))
// .catch((a)=>console.log(a))

// checknumber("Hello")
// .then((a)=>console.log(a))
// .catch((a)=>console.log(a))



//  function checknumber(value) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         if(typeof value==="number" && !isNaN(value)){
//             resolve("Its a Number " +value)

//         }
//         else{
//             reject("Its not a Number")
//         }
//     },2000)
//     })

// }
// async function validateNumber(input){
//     try{
//         console.log("checking....")
//         let result=await checknumber(input)
//         console.log(result);
        

//     }
//     catch(error){
// console.log(error)
//     }

// }
// validateNumber(23)
// validateNumber("Hello")
// validateNumber(NaN)


// // Function that returns a Promise
// function checkNumber(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {  // simulate async work (like API call)
//       if (typeof value === 'number' && !isNaN(value)) {
//         resolve("✅ It is a number!");
//       } else {
//         reject("❌ Not a number!");
//       }
//     }, 1000);
//   });
// }

// // Async function to use await
// async function validateNumber(input) {
//   try {
//     console.log("Checking...");
//     const result = await checkNumber(input); // waits for the promise
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ✅ Try with different inputs
// validateNumber(25);      // Output: ✅ It is a number!
// validateNumber("hello"); // Output: ❌ Not a number!
// validateNumber(NaN);     // Output: ❌ Not a number!




// function checknumber(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          if(typeof value==="number"&& !isNaN(value)){
//             resolve(value+ " is  a Number ")
//          }else{
//             reject(value+ " is not a Number")
//          }
//         },2000)
    
//     })
// }

// async function CheckValidNumber(input) {
//     try{
//         console.log("waiting.....")
//         let result=await checknumber(input)
//         console.log(result)
//     }
//     catch(error){
//        console.log(error)
//     }
// }
// CheckValidNumber(23)

