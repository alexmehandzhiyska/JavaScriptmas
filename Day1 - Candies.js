function candies(children, candy) {
    return Math.floor(candy / children) * children;
}

console.log(candies(3, 10));
