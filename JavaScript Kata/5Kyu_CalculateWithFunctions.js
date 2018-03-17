// Description:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// Requirements:
// 1. There must be a function for each number from 0 ("zero") to 9 ("nine")
// 2. There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// 3. Each calculation consist of exactly one operation and two numbers
// 4. The most outer function represents the left operand, the most inner function represents the right operand

// operands
function zero(f) {
  if (typeof f === "function") {
    return f(0);
  } else {
    return 0;
  }
}

function one(f) {
  if (typeof f === "function") {
    return f(1);
  } else {
    return 1;
  }
}

function two(f) {
  if (typeof f === "function") {
    return f(2);
  } else {
    return 2;
  } 
}

function three(f) {
  if (typeof f === "function") {
    return f(3);
  } else {
    return 3;
  }
}

function four(f) {
  if (typeof f === "function") {
    return f(4);
  } else {
    return 4;
  }
}

function five(f) {
  if (typeof f === "function") {
    return f(5);
  } else {
    return 5;
  }
}

function six(f) {
  if (typeof f === "function") {
    return f(6);
  } else {
    return 6;
  } 
}

function seven(f) {
  if (typeof f === "function") {
    return f(7);
  } else {
    return 7;
  }
}

function eight(f) {
  if (typeof f === "function") {
    return f(8);
  } else {
    return 8;
  }
}

function nine(f) {
  if (typeof f === "function") {
    return f(9);
  } else {  
    return 9;
  }
}

// Mathematical Operators
	// when writing currying functions, the order of your arguments matters
function plus(a) {return (b) => a + b;}
function minus(a) {return (b) => b - a;}
function times(a) {return (b) => a * b;}
function dividedBy(a) {return (b) => b / a;}

// test cases
seven(times(five())); // 35
four(plus(nine())); // 13
eight(minus(three())); // 5
six(dividedBy(two())); // 3
