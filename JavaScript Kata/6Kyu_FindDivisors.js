// Create a function divisors that takes an integer and returns an array
// with all of the integer's divisors(except for 1 and the number itself).
// If the number is prime return the string '(integer) is prime' 

function divisors(num) {
  var result = [];

  var i = 2;
  while (i < num) {
    if (num % i === 0) {
      result.push(i);
    }
    i++;
  }

  if (result.length === 0) {
    return num + ' is prime';
  }
  return result;
};

// test cases
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"