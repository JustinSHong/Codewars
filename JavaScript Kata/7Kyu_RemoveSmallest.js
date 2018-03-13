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

// test cases
removeSmallest([1,2,3,4,5]); // [2,3,4,5]
removeSmallest([5,3,2,1,4]); // [5,3,2,4]
removeSmallest([2,2,1,2,1]); // [2,2,2,1]