// Description:
// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
// Each book has a code c of 3, 4, 5 or more capitals letters. 
// The 1st letter of a code is the capital letter of the book category. 
// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) 
// which indicates the quantity of books of this code in stock.

function stockList(listOfArt, listOfCat){
  // input: listOfArt a stock list of books
    // first letter is the category
    // number refers to num of a specific book
  // input: listOfCat
    // array of letters that specify book types
  
  // will hold the output
  let result = "";
  // holds total number of books for a category
  let count = {};
  
  // iterate over category list
  for (let cat of listOfCat) {
    // iterate over stock list
    count[cat] = 0;
    for (let book of listOfArt) {
      // count book for a category
      if (cat === book[0]) {
        count[cat] += parseInt(book.slice(-3), 10);
      }
    }
  }
  console.log(count);
  let total = 0;
  // iterate over count obj and form output
  for (let prop in count) {
    result += `(${prop} : ${count[prop]}) - `;
    total += count[prop];
  }
  // output: string of form "(A : 0) - (B : 114) - (C : 70)"
  return total === 0 ? '' : result.slice(0, -3);
}

// test cases
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
stockList(b, c); 
// "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
stockList(b, c);
// "(A : 200) - (B : 1140)"

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
stockList(b, c);
// "(A : 0) - (B : 114) - (C : 70) - (W : 0)"

b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
c = ["B", "R", "D", "X"]
stockList(b, c);
// "(B : 364) - (R : 225) - (D : 60) - (X : 0)"

b = []
c = ["B", "R", "D", "X"]
stockList(b, c);
// ""

b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
c = []
stockList(b, c);
// ""

b = ["ROXANNE 102", "RHODODE 123", "BKWRKAA 125", "BTSQZFG 239", "DRTYMKH 060"]
c = ["U", "V", "R"]
stockList(b, c);
// "(U : 0) - (V : 0) - (R : 225)"
