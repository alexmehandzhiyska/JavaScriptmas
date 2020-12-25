function avoidObstacles(numbers) {
    numbers.sort((a, b) => a - b);

    for (let i = 2; i < numbers[numbers.length - 2]; i++) {
        if (numbers.every((num) => num % i != 0)) {
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
