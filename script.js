/* Code derived and slightly edited from https://www.geeksforgeeks.org/html-calculator/ */

// Function to display value
function displayAnswer(val) {
  document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function solveEquation() {
  let x = document.getElementById("result").value;
  let y = eval(x); // Built-in javascript funtion that calculates a result from a string
  document.getElementById("result").value = y;
}

//function that clear the display
function clearText() {
  document.getElementById("result").value = ""; // Mistake: Value given should be ""
}
