function arrayMaximalAdjacentDifference(nums) {
    let differences = [];
    for (let i = 0; i < nums.length - 1; i++) {
        differences.push(Math.abs(nums[i] - nums[i + 1]));
    }
    return Math.max(...differences);
}
