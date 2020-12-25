function alphabetSubsequence(str) {
    for (const char of str) {
        if (str.indexOf(char) !== str.lastIndexOf(char)) {
            return false;
        }
    }

    let sortedStr = str
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');

    return str == sortedStr ? true : false;
}

console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('cdce'));
