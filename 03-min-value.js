/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

// Your code here
let minValue = function (nums) {
    let min = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min)
            min = nums[i]



        }
        return min || null
    }


console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
