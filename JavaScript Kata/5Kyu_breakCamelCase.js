// Description:
// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let result = "";
    // input: str with camelCase
    // identify capital cased letters with regex
    let regex=/[A-Z]/g;
   
    for (let i = 0; i < string.length; i++) {
      // find capital letters
      if(string[i].match(regex)) {
        // add a space before capitals
        result += " ";
      }
      result += string[i];
    }
    // output str with space to break camelCase
    return result;

Test.expect(solution('camelCasing') == 'camel Casing', 'Unexpected result')
Test.expect(solution('camelCasingTest') == 'camel Casing Test', 'Unexpected result')