// Your job is to write a function which increments a string, to create a new string. 
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the new string.

function incrementString (strng) {
  // use regex to find numbers in str, if any
  let regex1 = /\d/;
  let regex2 = /[1-9]/;
  // loop through str and check for nums
  let chars = strng.split('').filter((char) => {
    return regex1.test(char);
  });
  // check if any nums were found, if not add 1 to strng
  if (chars.length === 0) {
    return strng + `${1}`;
  } 
  // nums were found, iterate the num in strng
  else {
    // convert digits in char to a whole num
    num = parseInt(chars.join(''), 10);
    // increment num by 1
    num++;
  }
  // output: original string with numbers added to the end
  // store non-number chars in result
  let result = strng.slice(0, strng.indexOf(chars[0]));
  let num;
  result += num.toString();
  return result;
}

// test cases
incrementString("foobar000"); // "foobar001")
incrementString("foo"); // "foo1")
incrementString("foobar001"); // "foobar002")
incrementString("foobar99"); // "foobar100")
incrementString("foobar099"); // "foobar100")
incrementString(""); // "1")