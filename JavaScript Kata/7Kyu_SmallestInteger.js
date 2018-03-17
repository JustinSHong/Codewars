// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function  findSmallestInt(args) {
    var current = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < current) {
        current = args[i]
      }
    }
    return current;
}		

function findSmallestInt(args) {

	// use Math.min to return the smallest num
	// use ... to indicate args is an iterable
	return Math.min(...args);
}

findSmallestInt([34, 15, 88, 2]); // 2
findSmallestInt([34, -345, -1, 100]); // -345

