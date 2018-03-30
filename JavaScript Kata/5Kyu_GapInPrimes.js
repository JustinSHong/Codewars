// The prime numbers are not regularly spaced.
//  For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4.
//   Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive prime

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)

function findPrimes(num, minimum) {
	// holds all integers from 2 to num
	let integers = [];
	// marks integers as prime or composite
		// true means an integer is a prime
		// false means an integer is a composite
	let sieve = [];
	let sum = 0;

	// mark all integers from 2 to num as true initially
	for (let i = 2; i <= num; i++) {
		integers.push(i);
		sieve.push(Boolean(i));
    }
	
  // mark all composites as false
	for (let j = 0; j <= integers.length; j++) {
		if (sieve[j]) {
			for (let k = Math.pow(integers[j], 2); k <= num; k += integers[j]) {
				sieve[integers.indexOf(k)] = false;
			}
		}
	}
	
	// filter out primes that are greater than or equal to m
	return integers.filter((num) => {
		return sieve[integers.indexOf(num)] && num >= minimum;
	});
}

function gap(g, m, n) {
  // find the prime numbers from m to n inclusive
  let primes = findPrimes(n, m);
  console.log(g);
  console.log(primes);
  // iterate over the array of primes
    // find a prime pair by adding g to each prime
    // a pair is completed when a sum of g and a prime is found in primes arr
  for (let prime of primes) {
    let index = primes.indexOf(prime);
    if (primes.includes(prime + g)) {
      return [prime, primes[primes.indexOf(prime + g)]];
    }
  }
  // output: false case where no prime pair between m and n have a gap g
  return null;
}

// test cases
gap(2,100,110) // [101, 103]
gap(4,100,110) // [103, 107]
gap(6,100,110) // null
gap(8,300,400) // [359, 367]
gap(10,300,400) // [337, 347]