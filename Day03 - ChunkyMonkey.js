function chunkyMonkey(values, size) {
    let result = [];

    for (let i = 0; i < values.length; i += size) {
        result.push(values.slice(i, i + size));
    }

    return result;
}

console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
