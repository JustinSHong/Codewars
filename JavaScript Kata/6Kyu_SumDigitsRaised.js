// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata.
// What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive)
// and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  // holds all nums that are equal to its digits raised to the consecutive power
  let result = [];
  // convert integers from a to b into strings
  for (let i = a; i <= b; i++) {
    i = i.toString();
    let sum = 0;
    // iterate over strings
    for (let j = 0; j < i.length; j++) {
      // convert each digit to a number 
      // take digit to the j + 1 power
      // add the result to sum
      sum += Math.pow(parseInt(i[j], 10), j  + 1); 
    }
    if (sum === parseInt(i, 10)) {
      result.push(sum);
    }
  }
  return result;
}

// test cases
sumDigPow(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(10, 100); //  [89]
sumDigPow(90, 100); // []
sumDigPow(90, 150); // [135]
sumDigPow(50, 150); // [89, 135]
sumDigPow(10, 150); // [89, 135]