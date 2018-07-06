// Description
// Create a method is_uppercase() to see whether the string is ALL CAPS.
// For simplicity, you will not be tested on the ability to handle corner cases 
// (e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all) 
// an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters. 
// Therefore, according to this definition, strings with no alphabetical characters should return True.

// input: a string that may or may not have uppercase letters
// initiate a pointer to point to source
// loop over source
// output: boolean
  // true - input has an uppercase char
  // false - input does not have any uppercase chars

bool is_uppercase(const char *source) {
  char *ptr;
  int sourceLen;
  
  sourceLen = strlen(source);
  ptr = source;
  
  // printf("source is %s\n", source);
  // printf("source length is %d\n", sourceLen);
  
  for(int i = 0; i < sourceLen; i++) {
    // printf("char %c\n",*ptr);

    if (ptr < 64 && *ptr != 32) { // ignore corner cases
      return false;
    }
    
    if (!isupper(*ptr) && *ptr != ' ') {
      return false;
    }
    ++ptr;
  }
  return true;
};

// Test Cases
// is_uppercase("c");
// is_uppercase("C"); 
// is_uppercase("hello I AM DONALD");
// is_uppercase("HELLO I AM DONALD"); 
// is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ");
// is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ"); 