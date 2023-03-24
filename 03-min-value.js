/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

// Your code here
let removeLastVowel = function(word) {
    let vowel = 'aeiou' 
    for (i = word.length - 1; i >= 0; i--) {
        let letter = word[i];
        if (vowel.includes(letter)) {
            return word.slice(0, i) + word.slice (i + 1)
        }
    } return word
};






console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
