Description:
Given a positive number n > 1 find the prime factor decomposition of n. 
The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.
Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


// test cases
primeFactors(7775460); 
// "(2**2)(3**3)(5)(7)(11**2)(17)"
primeFactors(7919); 
// "(7919)"
primeFactors(17*17*93*677); 
// "(3)(17**2)(31)(677)"
primeFactors(933555431); 
// "(7537)(123863)"
primeFactors(342217392); 
// "(2**4)(3)(11)(43)(15073)"
primeFactors(35791357); 
// "(7)(5113051)"
primeFactors(782611830); 
// "(2)(3**2)(5)(7**2)(11)(13)(17)(73)"
primeFactors(775878912); 
// "(2**8)(3**4)(17)(31)(71)"