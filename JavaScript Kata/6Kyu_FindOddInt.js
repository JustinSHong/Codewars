// Description:
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
  // a is an array of integers
  // iterate over a
  for (let num of a) {
    // count how many times a num appears in the array a
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === num) {
        count++;
      }
    }
    // output: an integer that appears an odd number of times
    if (count % 2 !== 0) {
      return num;
    }
  }
}

doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); // 5
doTest([1,1,2,-2,5,2,4,4,-1,-2,5]); // -1
doTest([20,1,1,2,2,3,3,5,5,4,20,4,5]); // 5
doTest([10]); // 10
doTest([1,1,1,1,1,1,10,1,1,1,1]); // 10
doTest([5,4,3,2,1,5,4,3,2,10,10]); // 1