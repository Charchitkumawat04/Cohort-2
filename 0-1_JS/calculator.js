class Calculator {
  constructor() { this.result = 0; }
  add(num) { this.result += num; }
  subtract(num) { this.result -= num; }
  multiply(num) { this.result *= num; }
  divide(num) { if (num === 0) throw new Error("Division by zero"); this.result /= num; }
  clear() { this.result = 0; }
  getResult() { return this.result; }
  calculate(expression) {
    const sanitized = expression.replace(/\s+/g, '');
    if (!/^[\d()+\-*/.]+$/.test(sanitized)) throw new Error("Invalid expression");
    try {
      this.result = eval(sanitized);
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
}

const calculator = new Calculator();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 22
