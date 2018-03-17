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

function XO(str) {
  // turn str into an arr of chars
  str = str.toLowerCase().split('');
  let xCount = 0;
  let oCount = 0;

  str.forEach(function(char) {
    if (char === "x") {
    xCount++;
  } else if (char === "o") {
    oCount++;
  }
  });
  // output: boolean
  return xCount === oCount;
}

function XO(str) {
  // using regex find all matches of X and Os in str
    // matches are in array form
  let xMatch = str.match(/x/gi);
  let oMatch = str.match(/o/gi);

  // output: boolean from comparing length of matches
    // no matches produces an empty string which evals to null!
  return ( xMatch && xMatch.length) === (oMatch && oMatch.length);
}

// test cases
XO('xo'); // true
XO('XO'); // true
XO('xo0'); // true
XO('xxxoo'); // false
XO("xxOo"); // true
XO(''); // true
XO('xxxxxoooxooo'); // true
XO("xxxm"); // false
XO("ooom"); // false
XO("Oo"); // false
XO('abcdefghijklmnopqrstuvwxyz'); // true