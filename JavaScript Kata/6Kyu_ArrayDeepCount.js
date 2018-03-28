// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, 
// including any within inner-level arrays.

function deepCount(a) {
	let count = 0;

	function recur() {
		// base case: a.length is 0
		if (a.length === 0) {
			return count;
		}
		// recursive case: a.length is no 0, a is an arr
		// iterate over a
		for (let el of a) {
			if (typeof el !== 'object') {
				// only count non-objects in each top level arr
				count++;
			}
			// call recur on array objects
			else {
				recur(el);
			}
		}
	}	
	// output number of els in each top level arr
	return recur();
}

// test cases
deepCount([]); // 0
deepCount([1, 2, 3]); // 3
deepCount(["x", "y", ["z"]]); // 4
deepCount([1, 2, [3, 4, [5]]]); // 7
deepCount([[[[[[[[[]]]]]]]]]); // 8