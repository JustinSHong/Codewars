// Description:

// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages 
// on candybar-shaped feature phones with 3x4 numeric keypads.

// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" 
// and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). 
// A character is "locked in" once the user presses a different key or pauses for a short period of time 
// (thus, no extra button presses are required beyond what is needed for each letter individually). 
// The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. 
// Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters 
// (but you should allow your module to accept input in either for convenience).

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

function presses(phrase) {
  // initialize an object entry
    // where props are numbers on a keypad
    // values are an array holding chars for a certain keypad
   let entry = {
     "1": ["1"],
     "2": ["A", "B", "C", "2"],
     "3": ["D", "E", "F", "3"],
     "4": ["G", "H", "I", "4"],
     "5": ["J", "K", "L", "5"],
     "6": ["M", "N", "O", "6"],
     "7": ["P", "Q", "R", "S", "7"],
     "8": ["T", "U", "V", "8"],
     "9": ["W", "X", "Y", "Z", "9"],
     "0": [" ", "0"],
     "*": ["*"],
     "#": ["#"]
   }
   // initialize a counter
   let count = 0;
   // iterate over phrase
   console.log(phrase);
  for (let i = 0; i < phrase.length; i++) {
    for (let prop in entry) {
      // for every char, find the keypad it belongs to
      if (entry[prop].includes(phrase[i].toUpperCase())) {
     // add the index of the char in the keypad's array value to counter
        count += entry[prop].indexOf(phrase[i].toUpperCase()) + 1;
      }
    }
  console.log("char: " + phrase[i]);
   console.log("count: " + count);
  }
  // output: number of button presses
  return count;
}

// test cases

// simple example
presses("LOL"); // 9
// phrases with spaces 
presses("HOW R U"); // 13
// phrases with numbers
presses("WHERE DO U WANT 2 MEET L8R"); // 47
// input with lowercase
presses("lol"); // 9
// phrases with 0
presses("0"); // 2
presses("ZER0"); // 11
// phrases with 1
presses("1"); // 1
presses("IS NE1 OUT THERE"); // 31