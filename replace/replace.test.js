import replace from './replace.function';

const prefixSuffix = {
    prefix: "prefix",
    suffix: "suffix"
};

const testCases = [
    {
        for: 'Replace "An" with "The"',
        expect: 'The apple',
        string: 'An apple',
        replace: 'An',
        with: 'The',
        prefixSuffix: prefixSuffix.prefix
    }, {
        for: 'Replace "apple" with "apricot"',
        expect: 'An apricot',
        string: 'An apple',
        replace: 'apple',
        with: 'apricot',
        prefixSuffix: prefixSuffix.suffix
    }
];

testCases.forEach(testCase => {
    test(testCase.for, () => {
        expect(replace(testCase.string, testCase.replace, testCase.with, testCase.prefixSuffix)).toBe(testCase.expect);
    });
});