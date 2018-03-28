// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, 
// including any within inner-level arrays.

function deepCount(a) {
	// base case: a.length is 0

	// recursive case: a.length is no 0
	// go one leve deeper in a
}



// test cases
deepCount([]); // 0
deepCount([1, 2, 3]); // 3
deepCount(["x", "y", ["z"]]); // 4
deepCount([1, 2, [3, 4, [5]]]); // 7
deepCount([[[[[[[[[]]]]]]]]]); // 8