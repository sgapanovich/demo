export type CalculatorAction = 'add' | 'subtract' | 'multiply' | 'divide';

export function myCalculator(a: number, b: number, action: CalculatorAction): number {
  switch (action) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Division by zero is not allowed');
      return a / b;
    default:
      throw new Error(`Unknown action: "${action}". Supported actions: add, subtract, multiply, divide`);
  }
}
