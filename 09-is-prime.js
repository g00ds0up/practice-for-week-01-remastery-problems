/*
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

// Your code here
let isPrime = function (number) {
    // if number is less than 2 its not prime
      if (number < 2) {
      return false
      }
    let num2 = 2
    // if number divided by 2 equils 0 is not prime
    while (number > num2) {
    if (number % num2 === 0) {
    return false
    }
      num2++
    }
    return true
  };

  
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
