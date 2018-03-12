// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
//  Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Note: keep the original order of the names in the output.


function friend(friends) {
  let result = []; // holds all my friends' names

  for (let person of friends) {
    if (person.length === 4) {
    	// my friends have 4 letter names
    	result.push(person);
    }
  }
  return result;
}

function friend(friends) {
	
	return friends.filter(function(person) {
    	return person.length === 4;
    });
}

friend(["Ryan", "Kieran", "Mark"]); // ["Ryan", "Mark"]
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]); // ["Ryan"]
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]); // ["Jimm", "Cari", "aret"]
friend(["Love", "Your", "Face", "1"]); //  ["Love", "Your", "Face"]
friend(["Hell", "Is", "a", "badd", "word"]); // ["Hell", "badd", "word"]
friend(["Issa", "Issac", "Issacs", "ISISS"]); // ["Issa"]
friend(["Robot", "Your", "MOMOMOMO"]); // ["Your"]
friend(["Hello", "I", "AM", "Sanjay", "Gupt"]); // ["Gupt"]
friend(["This", "IS", "enough", "TEst", "CaSe"]); //  ["This", "TEst", "CaSe"]
friend([]); // []