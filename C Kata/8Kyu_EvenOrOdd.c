// Description: 
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const char * even_or_odd(int number) {
  // even if number / 2 is 0
  if (number % 2 == 0) {
    return "Even";
  }
  // odd if number / 2 is 1
  return "Odd";
};

// Test Cases
even_or_odd(90); // "Even"	
even_or_odd(-80); // "Even"
even_or_odd(113); // "Odd"
even_or_odd(9); // "Odd"
even_or_odd(102); // "Even"
even_or_odd(-94); // "Even"
even_or_odd(101); // "Odd"
even_or_odd(-101); // "Odd"
even_or_odd(16); // "Even"
even_or_odd(-27); // "Odd"
even_or_odd(13); // "Odd"