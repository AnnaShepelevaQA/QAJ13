import { expect } from 'chai';
import { Calculator } from '../../src/calculator';
//простая проверка на работоспособность
describe('Calculator', () => {
  let calc: Calculator;

  before(() => {
    calc = new Calculator();
  });

  // Тест 1: Сложение
  it('should correctly add two numbers', () => {
    expect(calc.add(1, 2)).to.equal(3);
  });

  // Тест 2: Вычитание
  it('should correctly subtract two numbers', () => {
    expect(calc.subtract(5, 3)).to.equal(2);
  });
});