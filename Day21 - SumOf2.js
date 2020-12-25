function sumOfTwo(nums1, nums2, value) {
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            if (num1 + num2 == value) {
                return true;
            }
        }
    }

    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
