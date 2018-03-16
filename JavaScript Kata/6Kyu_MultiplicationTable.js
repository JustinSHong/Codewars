// Create a function that accepts dimensions, of Rows x Columns, as parameters 
// in order to create a multiplication table sized according to the given dimensions. 
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

function multiplicationTable(row,col){
  let table = [];

  // iterate from 1 to row
  for (let i = 1; i <= row; i++) {
    let r = [];
    // iterate from 1 to col
    for (let j = 1; j <= col; j++) {
      // multiple i with j to form a row
      r.push(i * j);
    }
    table.push(r);
  }
  // output: an array of arrays
  return table;
}

// test cases
multiplicationTable(2,2); // [[1,2],[2,4]]
multiplicationTable(3,3); // [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable(3,4); // [[1,2,3,4],[2,4,6,8],[3,6,9,12]]
multiplicationTable(4,4); // [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]
multiplicationTable(2,5); // [[1,2,3,4,5],[2,4,6,8,10]]

