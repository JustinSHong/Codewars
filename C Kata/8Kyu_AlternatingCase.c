//  Description:
// Define String.prototype.toAlternatingCase 
// (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; 
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// input: a string pointer
// loop over each char in the input string
  // char is lower - convert to upper
  // char is upper - convert to lower
// output: string with alternate casing

char *to_alternating_case(const char *s) {
  printf("input string: %s\n", s);
  printf("input size: %d\n", strlen(s));
  
  int size;
  int i;
  size = strlen(s);
  
  char temp[size];
  temp[size] = '\0';
  strcpy(temp, s);
  
  for (i = 0; i < size; i++) {
    if (islower(s[i])) {
      // current char is lower case letter
      temp[i] = toupper(s[i]);
    } else { 
      // current char is upper case letter
      temp[i] = tolower(s[i]);
    }
    printf("temp: %c\n", temp[i]);
  }
  char *result[size];
  strcpy(result, temp);
  printf("result: %s\n", result);
  return temp;
}

//Test Cases:
to_alternating_case("hello world"); // => "HELLO WORLD"
to_alternating_case("HELLO WORLD"); // => "hello world"
to_alternating_case("hello WORLD"); // => "HELLO world"
to_alternating_case("HeLLo WoRLD"); // => "hEllO wOrld"
to_alternating_case("12345"); // => "12345" (Non-alphabetical characters are unaffected)
to_alternating_case("1a2b3c4d5e"); // => "1A2B3C4D5E"
to_alternating_case("String.prototype.toAlternatingCase"); // => "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
