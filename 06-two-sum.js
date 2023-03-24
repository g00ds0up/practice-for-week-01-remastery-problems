/*
Write a function `twoSum(arr, target)` that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the `target` value. You can assume that input
array contains only unique numbers.
*/

// Your code here
let twoSum = function(arr, target) {
    // loop through arr
    for (let i = 0; i < arr.length; i++) {
        // identify i
        let num1 = arr[i];
        // loop through arr again adding to i
            for (let j = i + 1; j < arr.length; j++) {
            let num2 = arr[j];
            // if statement to find if array has chosen number
            if(num1 + num2 === target) {
                return true;
            }
             }
        }
        // if not true the return false
        return false;
    };

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
