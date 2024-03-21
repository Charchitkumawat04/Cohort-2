class Calculator {
    constructor() {
      this.result = 0; // Initial result
    }
  
    // Method to add a number to the result
    add(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: not a number');
      }
      this.result += num;
    }
  
    // Method to subtract a number from the result
    subtract(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: not a number');
      }
      this.result -= num;
    }
  
    // Method to multiply a number with the result
    multiply(num) {
      if (isNaN(num)) {
        throw new Error('Invalid input: not a number');
      }
      this.result *= num;
    }
  
    // Method to divide the result by a number
    divide(num) {
      if (isNaN(num) || num === 0) {
        throw new Error('Invalid input: not a valid number or division by zero');
      }
      this.result /= num;
    }
  
    // Method to reset the result to 0
    clear() {
      this.result = 0;
    }
  
    // Method to get the current value of the result
    getResult() {
      return this.result;
    }
  
    // Method to calculate an expression
    calculate(expression) {
      // Clean expression: remove spaces
      const cleanedExpression = expression.replace(/\s+/g, '');
  
      // Extract numbers and operators
      const numbers = cleanedExpression.split(/[\+\-\*\/\(\)]/).filter(num => num !== '');
      const operators = cleanedExpression.split('').filter(char => '+-*/'.includes(char));
  
      // Check for non-numerical characters in numbers
      if (numbers.some(num => isNaN(num))) {
        throw new Error('Invalid input: non-numerical characters detected');
      }
  
      // Initialize temporary result with the first number
      let tempResult = parseFloat(numbers[0]);
  
      // Iterate through operators and perform operations
      for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNum = parseFloat(numbers[i + 1]);
  
        switch (operator) {
          case '+':
            tempResult += nextNum;
            break;
          case '-':
            tempResult -= nextNum;
            break;
          case '*':
            tempResult *= nextNum;
            break;
          case '/':
            tempResult /= nextNum;
            break;
          default:
            throw new Error('Invalid operator');
        }
      }
  
      // Set the final result
      this.result = tempResult;
    }
  }
    
// Create a new instance of Calculator
const calc = new Calculator();

// Perform arithmetic operations
calc.add(5);
calc.subtract(3);
calc.multiply(4);
calc.divide(2);

console.log("Result:", calc.getResult()); // Output: 10

// Calculate expression
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log("Result of expression:", calc.getResult()); // Output: 17