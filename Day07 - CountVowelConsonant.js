function countVowelConsonant(str) {
    const sum = str.split('').reduce((accumulator, currentValue) => {
        return /[aeiou]/.test(currentValue) ? accumulator + 1 : accumulator + 2;
    }, 0);
    return sum;
}

console.log(countVowelConsonant('abcde'));
//8
