function adjacentElementsProduct(nums) {
    let products = [];

    for (let i = 0; i + 1 < nums.length; i++) {
        const product = nums[i] * nums[i + 1];
        products.push(product);
    }

    return Math.max(...products);
}
