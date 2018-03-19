// Description:
// Write a function, persistence, that takes in a positive parameter num and 
// returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function toDigits(num) {
  let result = [];
  
    // convert num into a str
  let str = String(num);
  
  // store digits in result
  for (let digits of str) {
    result.push(digits);
  }
   //outptut: an array with digits of num
  return result.map((d) => parseInt(d, 10));
}

function persistence(num) {
  
  let vals = toDigits(num); 
  let product = 1;
  let persistence = 0;
  
  if (vals.length === 1) {
    return 0;
  }  

  while (vals.length !== 1) {
    product = vals.reduce((a, b) => a * b);
    vals = toDigits(product);
    persistence++;
  }
  // output: number of times you must multiply the digits in num until you reach a single digit
  return persistence;  
}


// test cases
persistence(39); //3
persistence(4); //0
persistence(25); //2
persistence(999); //4