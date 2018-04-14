// Description:
// Given a string and an array of integers representing indices,
// capitalize all letters at the given indices.

// For example:
//     capitalize("abcdef",[1,2,5]) = "aBCdeF"
//     capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.

// input: a string, array of integers that represent indices
// split string into an array of chars
// iterate over array of integers
// for each arr element, capitalize a char in the given string
// output: string with chars capitalized at integer indices in the input array

function capitalize(s, arr) {
	let splitStr = s.split("");
	for (let idx of arr) {
		if (!s[idx]) {
			continue;
		}
		splitStr[idx] = s[idx].toUpperCase();
	}
	return splitStr.join("");
}

// test cases
capitalize("abcdef", [1, 2, 5]); // 'aBCdeF'
capitalize("abcdef", [1, 2, 5, 100]); // 'aBCdeF'
capitalize("codewars", [1, 3, 5, 50]); // 'cOdEwArs'
capitalize("abracadabra", [2, 6, 9, 10]); // 'abRacaDabRA'
capitalize("codewarriors", [5]); // 'codewArriors'
capitalize("indexinglessons", [0]); // 'Indexinglessons'
