function arrayPreviousLess(nums) {
    let newArr = [];

    for (const index in nums) {
        const num = nums[index];
        const previous = nums.slice(0, index);
        let min = -1;

        for (const prevNum of previous) {
            if (prevNum < num) {
                min = prevNum;
            }
        }
        newArr.push(min);
    }
    return newArr;
}
