// Description:
// A consonant is any letter of the alphabet except a, e, i ,o, u.
// The consonant substrings in the word "zodiacs" are z, d, cs.
// Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22
// because z = 26,d = 4,cs=3+19=22.
// The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings.

// test cases
solve("zodiac");
// 26
solve("chruschtschov");
// 80
solve("khrushchev");
// 38
solve("strength");
// 57
solve("catchphrase");
// 73
solve("twelfthstreet");
// 103
solve("mischtschenkoana");
// 80
