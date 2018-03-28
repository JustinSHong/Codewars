// Your job is to write a function which increments a string, to create a new string. 
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the new string.





// test cases
incrementString("foobar000"); // "foobar001")
incrementString("foo"); // "foo1")
incrementString("foobar001"); // "foobar002")
incrementString("foobar99"); // "foobar100")
incrementString("foobar099"); // "foobar100")
incrementString(""); // "1")