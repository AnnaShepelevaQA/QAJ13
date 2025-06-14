export class Calculator {
  calculate(num1: number, num2: number, operation: string): number {
    switch (operation) {
      case 'add': return num1 + num2;
      case 'subtract': return num1 - num2;
      case 'multiply': return num1 * num2;
      case 'divide': return num1 / num2;
      default: throw new Error(`Unknown operation: ${operation}`);
    }
  }
}