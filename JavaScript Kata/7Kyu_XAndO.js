// Check to see if a string has the same amount of 'x's and 'o's.
//  The method must return a boolean and be case insensitive.
//   The string can contain any char.

function XO(str) {
  // keep track of Xs and Os
  let xCount = 0;
  let oCount = 0;

  // iterate over str and count Xs and Os
  for (char of str.toLowerCase()) {
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }
  return xCount == oCount;
}

// test cases
XO('xo') // true
XO('XO') // true
XO('xo0'), // true
XO('xxxoo') // false
XO("xxOo") // true
XO('') // true
XO('xxxxxoooxooo') // true
XO("xxxm") // false
XO("ooom") // false
XO("Oo") // false
XO('abcdefghijklmnopqrstuvwxyz') // true