// Your goal in this kata is to implement an difference function, which subtracts one list from another.
// It should remove all values from list a, which are present in list b.
// If a value is present in b, all of its occurrences must be removed from the other:

function array_diff(a, b) {
  var result = [];
  
  for (var i = 0; i < a.length; i++) {
    if(a[i] !== b[0]) {
      result.push(a[i])
    }
  }
  return result;
}

array_diff([], [4,5], []); // []
array_diff([3,4], [3], [4]); // [4]
array_diff([1,8,2], [], [1,8,2]); // [1,8,2]