function sumOddFibonacciNumbers(num) {
    let firstNum = 0;
    let previousNum = 0;
    let currentNum = 1;
    let sum = 0;

    while (currentNum <= num) {
        if (currentNum % 2 != 0) {
            sum += currentNum;
        }

        firstNum = previousNum;
        previousNum = currentNum;
        currentNum = firstNum + previousNum;
    }
    return sum;
}
