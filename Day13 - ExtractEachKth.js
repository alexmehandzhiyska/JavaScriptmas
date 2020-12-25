function extractEachKth(nums, index) {
    nums = nums.filter((el, i) => (i + 1) % index !== 0);
    return nums;
}
