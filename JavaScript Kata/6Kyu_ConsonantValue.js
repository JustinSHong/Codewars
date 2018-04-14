// Description:
// A consonant is any letter of the alphabet except a, e, i ,o, u.
// The consonant substrings in the word "zodiacs" are z, d, cs.
// Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22
// because z = 26,d = 4,cs=3+19=22.
// The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces,
// return the highest value of consonant substrings.

// input: string with vowels and consonants
// split s by vowels, leaving behind consonants or strings of consonants
// output: the largest value of all consonants or consonant substrings

function solve(s) {
	let vowels = /[aeiou]/g;
	let consonants = s
		.toLowerCase()
		.split(vowels)
		.filter(char => {
			return char;
		});
	let values = [];
	for (let c of consonants) {
		if (c.length === 1) {
			values.push(c.charCodeAt(0) - "a".charCodeAt(0) + 1);
		} else {
			// substrings: iterate over the chars
			let temp = 0;
			for (let char of c) {
				temp += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
			}
			values.push(temp);
		}
	}
	return Math.max(...values);
}

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
