// Description:
// If we alternate the vowels and consonants in the string "have",
// we get the following list, arranged alphabetically: ['ahev', 'aveh', 'ehav', 'evah', 'vahe', 'veha'].
// These are the only possibilities in which vowels and consonants are alternated.
// The first element, ahev, is alphabetically lowest.

// Given a string:
//   alternate the vowels and consonants and return the lexicographically lowest element in the list
//   If any two or more vowels or consonants must follow each other, return "failed"
//   if the number of vowels and consonants are equal, the first letter of the result must be a vowel.

// Examples:
// 	solve("codewars") = "failed".
// 	However you alternate vowels and consonants, two consonants must follow each other
// 	solve("oruder") = "edorur"
// 	solve("orudere") = "ederoru".
// 	This is the only option that allows you to alternate vowels & consonants.

// Vowels will be any of "aeiou". Input will be a lowercase string, no spaces.

// Lexicographically minimal string rotation - problem of finding the rotation of a string
// with the lowest lexicographical order of all possible rotations
// Lexicographical Order - ) is a generalization of the way words are
// alphabetically ordered based on the alphabetical order of their component letters

// input: lowercase string with vowels and consonants
// define a set of vowels
// separate consonants and vowels and store them in arrays
// order the consonants and vowels from lowest unicode value to the highest
// alternate vowels and consonants from lowest unicode to the highest
// output: string with the lowest lexicographically string rotation

function solve(s) {
	let result = "";
	let regex = /[aeiou]/;
	let consonants = s
		.split("")
		.filter(char => {
			return !regex.test(char);
		})
		.sort((a, b) => {
			return a.charCodeAt(0) - b.charCodeAt(0);
		});
	let vowels = s
		.split("")
		.filter(char => {
			return regex.test(char);
		})
		.sort((a, b) => {
			return a.charCodeAt(0) - b.charCodeAt(0);
		});
	if (consonants.length > vowels.length) {
		for (let i = 0; i < consonants.length; i++) {
			if (!vowels[i]) {
				result += consonants[consonants.length - 1];
				break;
			}
			result += consonants[i];
			result += vowels[i];
		}
	} else {
		for (let i = 0; i < vowels.length; i++) {
			if (!consonants[i]) {
				result += vowels[vowels.length - 1];
				break;
			}
			result += vowels[i];
			result += consonants[i];
		}
	}
	if (result.length !== s.length) {
		return "failed";
	} else {
		return result;
	}
}

// test cases
solve("java"); // 'ajav'
solve("oruder"); // 'edorur'
solve("zodiac"); // 'acidoz'
solve("apple"); // 'lapep'
solve("acidity"); // 'caditiy'
solve("codewars"); // 'failed'
solve("orudere"); // 'ederoru'
