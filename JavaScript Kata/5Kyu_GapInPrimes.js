// The prime numbers are not regularly spaced.
//  For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4.
//   Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

// A prime gap of length n is a run of n-1 consecutive composite numbers between two successive prime

// We will write a function gap with parameters:

// g (integer >= 2) which indicates the gap we are looking for

// m (integer > 2) which gives the start of the search (m inclusive)

// n (integer >= m) which gives the end of the search (n inclusive)


// test cases
gap(2,100,110) // [101, 103]
gap(4,100,110) // [103, 107]
gap(6,100,110) // null
gap(8,300,400) // [359, 367]
gap(10,300,400) // [337, 347]