// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

var num1 = 21
var num2 = 15
var num3 = num1 + num2
const addThemUp = (num1, num2) => {
  return num3
}

Describe(addThemUp, () => {
  test("Takes two numbers as an argument and returns their sum", () => {
    expect (addThemUp(num1, num2)).toEqual(num3)
  })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

// var num1 = 21
// var num2 = 15
// var num3 = num1 + num2
// const addThemUp = (num1, num2) => {
//   return num3
// }

console.log(num3)

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.





// --------------------2b) See the test fail. THEN write the code to make the test pass.
