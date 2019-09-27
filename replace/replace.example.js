const replace = require('./replace.function');

const strings = [
    {
        string: 'An apple',
        replace: 'An',
        to: 'The',
        prefixSuffix: 'prefix'
    }, {
        string: 'An apple',
        replace: 'apple',
        to: 'apricot',
        prefixSuffix: 'suffix'
    }
];

strings.forEach(string => {
    console.log('Input: ' + string.string, ' | Output: ' + replace(string.string, string.replace, string.to, string.prefixSuffix));
});