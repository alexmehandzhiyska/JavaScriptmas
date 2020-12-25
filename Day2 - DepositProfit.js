function depositProfit(deposit, rate, threshold) {
    let year = 0;
    while (deposit < threshold) {
        year++;
        deposit *= rate / 100 + 1;
    }

    return year;
}
