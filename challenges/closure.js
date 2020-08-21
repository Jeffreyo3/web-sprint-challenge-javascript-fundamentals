// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// `external` is a global variable, so it is accessable by all code in the global scope.
// `internal` belongs to `myFunction()` so everything inside `myFunction()` has access to the internal variable, including the `nestedFunction()` function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(number) {
  sum = 0
  counter = number
  for(let i = number; i>0; i--) {
    sum = sum + i
  }
  return sum
}

console.log(`Summation of 4 should be 10: ${summation(4)}`)
console.log(`Summation of 4 should be 15: ${summation(5)}`)