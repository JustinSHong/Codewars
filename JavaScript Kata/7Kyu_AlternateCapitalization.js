// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
// The input will be a lowercase string with no spaces.

// input: a lowercase string with 0 spaces
// iterate over the string
// at an even idx, capitalize a char and send it to result[0]
// at an odd idx, capitalize a char and send it to result[1]
// output: an array with 2 elements
// first el has chars at even indices capitalized
// second el has chars at odd indices capitalized

function capitalize(s) {
	let result = ["", ""];

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 0) {
			result[0] += s[i].toUpperCase();
			result[1] += s[i];
		} else {
			result[0] += s[i];
			result[1] += s[i].toUpperCase(0);
		}
	}
	console.log("s", s);
	return result;
}

// test cases
capitalize("abcdef"); //['AbCdEf', 'aBcDeF']
capitalize("codewars"); //['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra"); //['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors"); //['CoDeWaRrIoRs', 'cOdEwArRiOrS']
capitalize("indexinglessons"); //['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']
capitalize("codingisafunactivity"); //['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']
