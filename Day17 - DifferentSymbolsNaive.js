function differentSymbolsNaive(str) {
    let mySet = new Set();
    for (const char of str) {
        mySet.add(char);
    }
    return mySet.size;
}

console.log(differentSymbolsNaive('cabca'));
