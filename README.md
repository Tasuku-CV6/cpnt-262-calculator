# Command-line Calculator

This is a simple command-line calculator built with JavaScript. It supports four basic arithmetic operations: addition, subtraction, multiplication, and division.

## How to Use:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the following command with your numbers and operator: Example: (node calculator.js 2 + 2)

   ```bash
   node calculator.js <number1> <operator> <number2>
   ```

## Challenges that I ran into:

- One challenge I faced while working on the "Build a Calculator" assignment was figuring out where to begin and what to focus on. I didn't have a strong grasp of JavaScript, particularly when it came to coding functions with objects and arrays. However, as I researched how functions work, I gained a better understanding. I also found that reading through my code, breaking it down, and saying it out loud helped me grasp the concepts much more clearly.

- Another challenge I encountered was writing code to validate the command-line arguments, ensuring they were valid numbers and a supported operator. I wasn’t sure where to start and struggled to grasp how to check if a string wasn’t a number and if the operator was valid within my object and array. After some time, I turned to documentation for help and found several useful resources, such as CoreUI, W3Schools, and the MDN JavaScript documentation. Through these resources, I discovered methods to address my issue, like using the isNaN function to check if operand1 and operand2 were numbers. I also learned about the parseFloat function, which converts strings into floating-point numbers.

## Explanation of how "process.argv" and "ParseFloat" functions work:

process.argv.length:

- Is a property in Node.js that returns the length of the argument vector (argv), which is an array that contains the command-line arguments passed when running a Node.js script. For example in my instacne, it would return a value of 5 as it has 5 argv from 0-4

- process.argv is an array that holds all the command-line arguments passed when you run your Node.js script.

- process.argv[0] is the path to the Node.js executable (e.g., /usr/bin/node).
  process.argv[1] is the path to your JavaScript file (e.g., /path/to/calculator.js).

- process.argv[2], process.argv[3], process.argv[4], and so on, are the arguments you pass to your script when you run it.

ParseFloat():

- parseFloat() is used to convert the value of process.argv[2] and process.argv[4] (which is a string) into a floating-point number. This is important because the command-line arguments are always strings by default.
