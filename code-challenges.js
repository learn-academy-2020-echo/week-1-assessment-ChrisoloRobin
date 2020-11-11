// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212
//
// //Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point.
// if(temp1 < temp3) {
//   console.log(`${temp1} is below boiling point`)
// } else if(temp2 > temp3) {
//   console.log(`${temp2} is above boiling point`)
// } else {
//   console.log(`${temp3} is above boiling point`);
// }



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]
//
// for(let i=0; i<myNumbers1.length; i++){
//   console.log(myNumbers1[i] * 5)
// }


//
// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]
//
// var myNumbers2 = [8, -7, 0, 6, 2]
//
// const multiplier = myNumbers2.map(value => {
//     return value * 5
// })
//
// console.log(multiplier)
//
//
//
// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"
//
var stringWithVowels1 = ["HeyThereLearnStudent"]
var stringWithVowels2 = "ILoveJavaScript"
// var vowels = ['aeiou']
//
// const vowel = (noVowels) => {
//   let pullVowel = stringWithVowels1.split("")
//   let filtered = pullVowel.filter(value => {
//     return stringWithVowels1.indexOf(vowels)  >= 0// !="a" //&& !="e" && !="i" && !="o" && !="u"
//   })
// }
// console.log(stringWithVowels1)
//
stringWithVowels1 = stringWithVowels1.map(function (string) {
    return string.replace(/[aeiou]/g, '');
});

console.log(stringWithVowels1);







// // --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// // Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"
//
// var notAString1 = true
// var notAString2 = 42
//
//
//
//
//
// // --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// // Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]
//
var toonimals = [ { name: "Itchy", animal: "mouse" },
{ name: "Stimpy", animal: "cat" },
{ name: "Daffy", animal: "duck" },
{ name: "Scratchy", animal: "cat" },
{ name: "Ren", animal: "dog" },
{ name: "Felix", animal: "cat" }]

const onlyCats = (array) => {
  return array.filter(toonCats => {
    return toonCats.animal === "cat"
  })
}
console.log(onlyCats(toonimals))
//
// // --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// // Expected output: "Itchy" "Daffy" "Ren"

const notCats = (array) => {
  return array.filter(noCats => {
    return noCats.animal != "cat"
  })
}
console.log(onlyCats(toonimals))
