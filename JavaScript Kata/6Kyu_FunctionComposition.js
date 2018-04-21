// Description:
// Function composition is a mathematical operation that mainly presents itself
// in lambda calculus and computability. In simple mathematical notation:

// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )

// Your task is to create a compose function to carry out this task,
// which will be passed two functions or lambdas.
// Remember that the resulting composed function may be passed multiple arguments!

// compose(f , g)(x)
// => f( g( x ) )

function compose(f, g) {
	let args = [...arguments];
	return (...input) => {
		let result = g.apply(this, input);
		return f.call(this, result);
	};
}

// test cases
// add1 = function(a){return a + 1}
// min1 = function(a){return a - 1}
// div2 = function(a){return a / 2}
// add15 = function(a){return a + 15}
// id = function(a){return a}
// addall5 = function(a,b,c,d,e){return a+b+c+d+e}

compose(add1, id)(0); // 1
compose(add1, div2)(2); // 2
compose(add1, addall5)(1, 2, 3, 4, 5); // 16
compose(add15, id)(0); // 15
compose(id, add15)(0); // 15
