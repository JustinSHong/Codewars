// Given an array of integers, remove the smallest value. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  // initialize to first number;
  let lowest = numbers[0];
  
  // iterate over numbers arr
  for (let num of numbers) {
      // compare lowest to each num
        // if a num is smaller than lowest, lowest becomes that num
      if (lowest > num) {
        lowest = num;
      }
  }
  // remove the smallest num or its first copy
  numbers.splice(numbers.indexOf(lowest), 1);
  return numbers;
}

function removeSmallest(numbers) {
  // find smallest num
  let s = Math.min(...numbers);
  // remove the smallest num
  numbers.splice(numbers.indexOf(s), 1);
  // output: the original arr without smallest number
    // or its first copy
  return numbers;
}

function removeSmallest(numbers) {
  // find first occurrence of smallest num
  let s = Math.min(...numbers);
  // find the index of smallest num or its first copy
    // pass other nums that do not have this index
  return numbers.filter(function(num, index) {
    // output: a new arr without smallest num or its first copy
    return index !== numbers.indexOf(s);
  });
}

// test cases
removeSmallest([1,2,3,4,5]); // [2,3,4,5]
removeSmallest([5,3,2,1,4]); // [5,3,2,4]
removeSmallest([2,2,1,2,1]); // [2,2,2,1]