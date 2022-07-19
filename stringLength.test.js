const stringLength = require('./stringLength');

test('return the length of the string', () => {
    expect(stringLength('hello')).toBe(5);
});

test('return error if string is not 1 to 10 characters long', () => {
    expect(() => {
        stringLength('very long string');
    }).toThrow();
})

