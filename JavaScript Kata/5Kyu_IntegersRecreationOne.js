// Description:

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n 
// whose sum of squared divisors is itself a square. 42 is such a number.

// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. 
// These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
// The sum of the squared divisors is 2500 which is 50 * 50, a square!

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string,
// each subarray having two elements, first the number whose squared divisors is a square 
// and then the sum of the squared divisors.


function listSquared(m, n) {
    // holds numbers from m to n
    let num = [];
    // holds divisors of all nums from m to n
    let divisors= [];
    // holds the squares of divisors
    let squared = [];
    // holds sum of squared divisors an integer from m to n
    let squareSum = 0;

    let result = [];
    // find divisors of a num between m and n inclusive
    for (let i = m; i <= n; i++) {
      num.push(i);
      
      for (let j = 1; j <= i; j++) {
          //divisor: a number that divides an integer exactly
          if (i % j === 0) {
            divisors.push(j);
          }
      }
      // square the divisors
      squared = divisors.map(function(d) {
        return Math.pow(d, 2);
      });
      // sum squares of divisors
      squareSum = squared.reduce(function(a,b) {
        return a + b;
      });
      divisors = [];
      squared = [];
      // test if the sum is a perfect square
      if (Math.sqrt(squareSum) % 1 === 0) {
        result.push([i, squareSum]);
      }
//   console.log("num: " + num);
//   console.log("divisors: " + divisors);
//   console.log("squared: " + squared);
//   console.log("squareSum: " + squareSum);
//   console.log("result: " + result);
    }
    // output: [[number, sum of squared divisors of number ],...]
      // array of arrays
    return result;
}

listSquared(1, 250) // [[1, 1], [42, 2500], [246, 84100]]
listSquared(42, 250) // [[42, 2500], [246, 84100]]
listSquared(250, 500) // [[287, 84100]]
listSquared(300, 600) // []
listSquared(600, 1500) // [[728, 722500], [1434, 2856100]]
listSquared(1500, 1800) // [[1673, 2856100]]
listSquared(1800, 2000) // [[1880, 4884100]]
listSquared(2000, 2200) // []
listSquared(2200, 5000) // [[4264, 24304900]]
listSquared(5000, 10000) // [[6237, 45024100], [9799, 96079204], [9855, 113635600]]
