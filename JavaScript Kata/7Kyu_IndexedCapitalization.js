// Description:
// Given a string and an array of integers representing indices,
// capitalize all letters at the given indices.

// For example:
//     capitalize("abcdef",[1,2,5]) = "aBCdeF"
//     capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// test cases
capitalize("abcdef", [1, 2, 5]); // 'aBCdeF'
capitalize("abcdef", [1, 2, 5, 100]); // 'aBCdeF'
capitalize("codewars", [1, 3, 5, 50]); // 'cOdEwArs'
capitalize("abracadabra", [2, 6, 9, 10]); // 'abRacaDabRA'
capitalize("codewarriors", [5]); // 'codewArriors'
capitalize("indexinglessons", [0]); // 'Indexinglessons'
