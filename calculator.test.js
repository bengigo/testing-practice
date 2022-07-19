const Calculator = require('./Calculator');

describe('add two numbers correctly', () => {
    test('add 1 to 46', () => {
        expect(Calculator.add(1, 46)).toBe(47);
    })

    test('add 4 to 45', () => {
        expect(Calculator.add(4, 45)).toBe(49);
    })

    test('add 9 to 4000', () => {
        expect(Calculator.add(9, 4000)).toBe(4009);
    })
    
    test('add 1 to 1', () => {
        expect(Calculator.add(1, 1)).toBe(2);
    })
});

describe('subsract two numbers correctly', () => {
    test('substract 45 from 4', () => {
        expect(Calculator.substract(4, 45)).toBe(-41);
    })

    test('substract 4 from 12', () => {
        expect(Calculator.substract(12, 4)).toBe(8);
    })

    test('substract 58 from 6', () => {
        expect(Calculator.substract(6, 58)).toBe(-52);
    })

    test('substract 1 from 1', () => {
        expect(Calculator.substract(1, 1)).toBe(0);
    })
})

describe('divide a number to a given number', () => {
    test('dive 10 to 2', () => {
        expect(Calculator.divide(10, 2)).toBe(5);
    })

    test('divide 68 to 1', () => {
        expect(Calculator.divide(68, 1)).toBe(68);
    })

    test('dive 8 to 4', () => {
        expect(Calculator.divide(8, 4)).toBe(2);
    })

    test('divide 7000 to 7', () => {
        expect(Calculator.divide(7000, 7)).toBe(1000);
    })
})

describe('multiply two numbers', () => {
    test('multiply 5 with 2', () => {
        expect(Calculator.multiply(5, 2)).toBe(10);
    })

    test('multiply 15 with 2', () => {
        expect(Calculator.multiply(15, 2)).toBe(30);
    })

    test('multiply 0 with 2', () => {
        expect(Calculator.multiply(0, 2)).toBe(0);
    })

    test('multiply 8 with 8', () => {
        expect(Calculator.multiply(8, 8)).toBe(64);
    })
})