/*
Write a function `twoDimensionalSum(arr)` that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

// Your code here

let twoDimensionalSum = function(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        let other = arr[i]
        for (let h = 0; h < other.length; h++) {
            sum += other[h]
        }
    } return sum;

};


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
