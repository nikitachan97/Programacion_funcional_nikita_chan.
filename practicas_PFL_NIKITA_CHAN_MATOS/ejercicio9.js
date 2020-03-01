function sum(nums) {
    if (nums.length === 0) {
    return 0;
    } else {
        const [first, ...rest] = nums;
        return first + sum(rest);
    }
}
console.log("la suma es de: " + sum([1,7,9,11]));