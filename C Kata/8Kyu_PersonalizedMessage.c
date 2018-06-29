// Description:
// Create a function that gives a personalized greeting. 
// This function takes two parameters: name and owner.

// Use conditionals to return the proper message: 
// case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

const char* greet(const char *name, const char *owner) {
  // name = owner
  if (strcmp(name, owner) == 0) {
    return "Hello boss";
  }
  // name != owner
  else {
    return "Hello guest";
  }
}