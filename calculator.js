// Operators (Array)
const operators = [`+`, `-`, `*`, `/`];

// Operators to corresponding functions (Object)
const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

// Arithmetic Functions
// Explanation: Takes the 2 arguments a & b and uses the "return" statmement to return the resualt of whatever the operation is.

function add(a, b) {
  return a + b;
}
// Outcome: 2 + 2 = 4

function subtract(a, b) {
  return a - b;
}
// Outcome: 3 - 2 = 1

function multiply(a, b) {
  return a * b;
}
// Outcome: 2 * 2 = 4

function divide(a, b) {
  if (b === 0) {
    // We write "===" because it checks if 2 operands are equal, for example if b is equaled to 0.
    throw new Error("Cannot divide by zero"); // "Throw new Error" is basically used to write out a Error message.
  }
  return a / b;
}
// Outcome: 4 / 2 = 2
// Error Outcome: 4 / 0 = "Cannot divide by zero"

// Command-Line Arguments
function runCalculator() {
  if (process.argv.length !== 5) {
    console.log(`node calculator.js <number1> <operator> <number2>`);
    return;
  }

  const operand1 = parseFloat(process.argv[2]);
  const operator = process.argv[3];
  const operand2 = parseFloat(process.argv[4]);

  // Validates that operands are numbers and not letters
  if (isNaN(operand1) || isNaN(operand2)) {
    console.log("Operands 1 & 2 must be valid numbers.");
    return;
  }

  // Validates weather or not the operator is "+, -, *, and /"
  if (!operators.includes(operator)) {
    // Includes() is a method that checks weather a specific element exists in the array
    console.log("Valid operators inculde +, -, *, /");
    return;
  }

  // Perform the calculation
  try {
    const result = operations[operator](operand1, operand2);
    console.log(`${operand1} ${operator} ${operand2} = ${result}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Excute/run the calculator
runCalculator();
