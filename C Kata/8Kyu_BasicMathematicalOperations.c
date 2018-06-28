// Description:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

int basic_op(char op, int value1, int value2) {
  printf("op %c\n", op);
  printf("value1 %d\n", value1);
  printf("value2 %d\n", value2);
  
  int result;
  
  switch(op) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      break;
  }
  printf("result %d\n", result);
  return result;
}

// TestCases
basicOp('+', 4, 7);		// Output: 11
basicOp('-', 15, 18); // Output: -3
basicOp('*', 5, 5);   // Output: 25
basicOp('/', 49, 7);  // Output: 7

