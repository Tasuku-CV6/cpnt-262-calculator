# Command-line Calculator

This is a simple command-line calculator built with JavaScript. It supports four basic arithmetic operations: addition, subtraction, multiplication, and division.

## How to Use:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the following command with your numbers and operator: (node calculator.js 2 + 2)

   ```bash
   node calculator.js <number1> <operator> <number2>
   ```

## Explation of how it works:

process.argv.length

- process.argv is an array that holds all the command-line arguments passed when you run your Node.js script.

- process.argv[0] is the path to the Node.js executable (e.g., /usr/bin/node).
  process.argv[1] is the path to your JavaScript file (e.g., /path/to/calculator.js).

- process.argv[2], process.argv[3], process.argv[4], and so on, are the arguments you pass to your script when you run it.
