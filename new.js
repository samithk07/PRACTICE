

// // 1.Reverse the order of all fruits.
// // 2.a.length// Find the index of "Banana".
// let fruits=["Apple","Banana","Papaya","Kiwi","jackfruit"]
// // console.log(fruits.indexOf("Banana"))
// // console.log(fruits.toReversed())

// // Check if all fruit names have more than 3 letters.
// // let allFruits=fruits.every(a=>a.length>3)
// // console.log(allFruits)

// // Get the first fruit that has more than 6 letters.
// // Check if any fruit name contains the letter "y".
// // let fruit=fruits.some((a=>a.includes("y")))
// // console.log(fruit)


// // let firstLongFruit = fruits.find(fruit => fruit.length > 6);
// // console.log(firstLongFruit);

// // Sort the fruits in alphabetical order.
// // let sortit=fruits.sort()
// // console.log(sortit)

// // Flatten a nested array of fruits (e.g. [["Apple", "Banana"], ["Mango"]]).
// // let nestedArray=["Apple",["cherry"],["kiwi","banana",]]
// // let newarr=nestedArray.flat(2)
// // console.log(newarr)

// // Count how many fruits have the letter "a".
// // let count=fruits.filter((a=>a.includes("a")))
// //console.log("fruits that only a in it: " + count)

// // Create a new array that repeats the fruits twice.
// // let copy=[...fruits,...fruits]
// // console.log(copy);



// // Copy only a portion of the array without changing the original.
// let copyPortion=fruits.slice(1,4)
// console.log(copyPortion)




// call
// write a programe to display a preson full name

let person={
    show:function(city){
        console.log(this.name+" lives in "+ city)

    }
}
let user={name:"samith"}
person.show.call(user,"kozikode")

