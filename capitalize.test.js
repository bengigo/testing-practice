const capitalize = require('./capitalize');

test('capitalize the first letter of the given string', () => {
    expect(capitalize('testing')).toBe('Testing');
})