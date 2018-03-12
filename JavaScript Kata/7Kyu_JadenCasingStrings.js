// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter.
// When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized
// in the same way he originally typed them.

function JadenCase(str) {
  // convert str into an array of words
  var split = str.split(' ');

  return split.map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
};

// test cases
JadenCase("how can mirrors be real if our eyes aren't real");
// returns "How Can Mirrors Be Real If Our Eyes Aren't Real"

JadenCase("here's the deal for every time out you give me, you'll give me 15 dollars for therapy when i get older.");
// "Here's The Deal For Every Time Out You Give Me, You'll Give Me 15 Dollars For Therapy When I Get Older."

JadenCase("all the rules in this world were made by someone no smarter than you. so make your own.");
// "All The Rules In This World Were Made By Someone No Smarter Than You. So Make Your Own."

