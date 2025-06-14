import { expect } from 'chai';
import { Calculator } from './calculator.js';
//простая проверка на работоспособность
describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers', () => {
    expect(calculator.calculate(2, 3, 'add')).to.equal(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.calculate(5, 3, 'subtract')).to.equal(2);
  });
});