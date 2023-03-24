/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

// Your code here
let reverseString = function (str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let word = str[i];
        reverse += word;
    }
    return reverse
};


console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
