// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Implement the method stray which accepts such array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// Examples:
// [1, 1, 2] => 2
// [17, 17, 3, 17, 17, 17, 17] => 3

function stray(numbers) {
  // the unique num will have one index
  for (let num of numbers) {
    if (numbers.indexOf(num) === numbers.lastIndexOf(num)) {
      return num;
    }
  }
}

// test cases
stray([1, 1, 2]) // 2
stray([17, 17, 3, 17, 17, 17, 17]) // 3
stray([8, 1, 1, 1, 1, 1, 1]) // 8
stray([1, 1, 1, 1, 1, 1, 0]) // 0
stray([0, 0, 0, 7, 0, 0, 0]) // 7
stray([-21, -21, -21, -21, -6, -21, -21]) // -6