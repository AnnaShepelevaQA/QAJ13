class Calculator {
    calculate(num1, num2, operation) {
        switch (operation) {
            case '+':
                return this.add(num1, num2);
            case '-':
                return this.subtract(num1, num2);
            case '*':
                return this.multiply(num1, num2);
            case '/':
                return this.divide(num1, num2);
            case '**':
                return this.power(num1, num2);
            case '%':
                return this.modulo(num1, num2);
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
    power(num1, num2) {
        return Math.pow(num1, num2);
    }

    // Остаток от деления
    modulo(num1, num2) {
        return num1 % num2;
    }
}