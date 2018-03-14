// Write a function that will return the count of distinct case-insensitive alphabetic characters
 // and numeric digits that occur more than once in the input string.
  // The input string can be assumed to contain only alphabets and numeric digits.

function duplicateCount(text){
  // remove case from text
  text = text.toLowerCase();
  // initialize an empty object duplicates
    // holds count of unique strings in text
  let duplicates = {};
  // text can not be empty
  if (text.length === 0) {
    return 0;
  }
  // iterate over text and count duplicates
    // add unique elements and their count to obj
  for (char of text) {
      if (!duplicates.hasOwnProperty(char)) {
        duplicates[char] = 1;
      } else {
        duplicates[char]++;
      }
  }
  // check
  // console.log(text);
  // console.log(duplicates);
  let count = 0;
  for (let char in duplicates) {
    if (duplicates[char] > 1) {
      count++;
    }
  }
  // output: number of unique char/nums that have copies
  return count;
}

duplicateCount(""); // no elements in an empty str
// 0
duplicateCount("abcde"); // one copy of each char
// 0
duplicateCount("aabbcde"); // 'a' and 'b' have 2 copies
// 2
duplicateCount("aabBcde"); // 'a' and 'b' have 2 copies
// 2 
duplicateCount("Indivisibility"); // 'i' has 6 copies
// 1
duplicateCount("Indivisibilities"); // 'i' has 6 copies and 's' has 2 copies
// 2