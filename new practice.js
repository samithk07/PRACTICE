// let wordsort=["B","A","C","J","R","G","S"]
// let newsort=wordsort.sort()
// console.log(newsort)


// // sort the Number
// let num=[9,5,6,7,3,2,87]
// let sortnum=num.sort((a,b)=>a-b)

// // console.log(sortnum);

// let num=[3,4,2,1,6,7]
// let num2=num.sort((a,b)=>a-b).reverse()
// console.log(num2);


// let object=[{name:"samith",age:34},
// {name:"adil",age:28},
// {name:"kiran",age:23},
// {name:"bob",age:18},
// {name:"irfad",age:10},
// ]



// let newObject=object.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(newObject)

// let numsort=object.sort((a,b)=>a.age-b.age)
// console.log(numsort)
// comparintg function


// Task:
// You are given a list of students,
//  where each student has a name and an array of marks in multiple subjects.
// Write a JavaScript program to:
// Loop through each student.
// Calculate the total marks and average marks for each student.
// Print each student’s name and their average marks.
// Based on the average marks, print the grade:
//  Average ≥ 80 → "🏆 Excellent"
// Average ≥ 50 and < 80 → "👍 Pass"
// // Average < 50 → "❌ Fail"


// let object=[
// {name:"samith",marks:[39,80,90,45,62]},
// {name:"adil",marks:[89,10,59,56,21,]},
// {name:"kiran",marks:[67,85,34,89,33]},
// {name:"bob",marks:[97,54,23,54,65]},
// {name:"shahid",marks:[87,56,34,53,78,]},
// {name:"ashfak",marks:[34,67,23,89,45]}
// ]

// let sortName=object.sort((a,b)=>a.name.localeCompare((b.name)))
// console.log(sortName)

//  object.forEach(a=>{a.marks.sort((a,b)=>a-b)})
//  console.log(object)


// Array
// let num=["apple","orenge",["mango","bluebery"],"banana"]
// let first=num[0]
// let second=num[1]
// let third=num[2]

// let [a,b,[x,y],d]=num

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

object 
let object={
name:"samith",
age:25,
city:"kasaragod"
}
let {name,age}=object
console.log(name)

let toLower = s => s.toLowerCase()
console.log(toLower("Hello")) 
console.log(toLower("here")) 
console.log(toLower("LOVLEY"))






