// Description:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// too slow with large arrays
// function findUniq(arr) {
//   // iterate over arr
//   // a unique num should only have one index  
//   for (let num of arr) {
//     if (arr.indexOf(num) === arr.lastIndexOf(num)) {
//       return num;
//     }
//   }
// }

// this is much faster when passed large arrays
function findUniq(arr) {
  // sort arr from least to greatest
  // unique num should be at either end of arr
  arr.sort((a,b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

// Generates large arrays 
function generateTestArr(answer, mass, length) {
  let arr = [];
  // Generate random integer in [0, length)
  let answerIndex = Math.floor(Math.random() * length);
  
  // Fill the array with mass and answer
  for (let i = 0; i < length; i++) {
    // Answer will be on answerIndex
    arr.push(i === answerIndex ? answer : mass);
  }
  
  return arr;
}

// test cases
findUniq([ 1, 1, 1, 2, 1, 1 ]; // 2
findUniq([ 0, 0, 0.55, 0, 0 ]; // 0.55

// Basic tests (shuffled)
findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]; // 3
findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ]; // 4
findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ]; // 5
findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]; // 6
// The last item
findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]; // 7
findUniq([ 3, 3, 2, 3, 3, 3, 3, 3 ]; // 2
findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ]; // 1
// The first item
findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]; // 0
// Large Arrays
generateTestArr(-1, 1, 1000); // -1
generateTestArr(0.0000001, 0.0010001, 1000); // 0.0000001
generateTestArr(42, 24, 10000000); // 42
generateTestArr(-Infinity, Infinity, 1000); // -Infinity