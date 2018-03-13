// Given two arrays a and b write a function that checks whether the two arrays have the "same" elements.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
  
  // array1 and array2 can not be false
  if (array1 && array2) {
  	// sort arrays from smallest to largest
    array1.sort((a,b) => a - b);
    array2.sort((a,b) => a - b);  
    for (let i = 0; i < array1.length; i++) {
      // el from a is the square of el from b
      if (Math.pow(array1[i], 2) !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  // all tests are passed
  return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2); // true

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2;) // false

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2); // false

a1 = [];
a2 = [];
comp(a1, a2); // true

a1 = [];
a2 = null;
comp(a1, a2); // false

a1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008];
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19];
comp(a1, a2); // false

a1 = [10000000, 100000000];
a2 = [10000000 * 10000000, 100000000 * 100000000];
comp(a1, a2); // true

a1 = [10000001, 100000000];
a2 = [10000000 * 10000000, 100000000 * 100000000];
comp(a1, a2;) // false

a1 = [2, 2, 3];
a2 = [4, 9, 9];
comp(a1, a2); // false
