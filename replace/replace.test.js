const replace = require('./replace.function');

const testCases = [
    {
        for: 'Replace "An" with "The"',
        expect: 'The apple',
        string: 'An apple',
        replace: 'An',
        to: 'The'
    }, {
        for: 'Replace "apple" with "apricot"',
        expect: 'An apricot',
        string: 'An apple',
        replace: 'apple',
        to: 'apricot'
    }
];

testCases.forEach(testCase => {
    test(testCase.for, () => {
        expect(replace(testCase.string, testCase.replace, testCase.to))
        .toBe(testCase.expect);
    });
});