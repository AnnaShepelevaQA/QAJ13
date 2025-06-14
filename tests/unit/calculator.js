export class Calculator {
    calculate(num1, num2, operation) {
        switch (operation) {
            case 'add':
                return this.add(num1, num2);
            case 'subtract':
                return this.subtract(num1, num2);
            case 'multiply':
                return this.multiply(num1, num2);
            case 'divide':
                return this.divide(num1, num2);
            case 'power':
                return this.power(num1, num2);
            case 'modulo':
                return this.modulo(num1, num2);
            default:
                throw new Error(`Неизвестная операция: ${operation}`);
        }
    }
    // Сложение
    add(num1, num2) {
        return num1 + num2;
    }
    // Вычитание
    subtract(num1, num2) {
        return num1 - num2;
    }
    // Умножение
    multiply(num1, num2) {
        return num1 * num2;
    }
    // Деление
    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error('Деление на ноль невозможно');
        }
        return num1 / num2;
    }
    // Возведение в степень
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
    // Остаток от деления
    modulo(num1, num2) {
        return num1 % num2;
    }
}
