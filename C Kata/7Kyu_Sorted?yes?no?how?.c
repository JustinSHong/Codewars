// Description:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

char* isSortedAndHow(int* array, int arrayLength)
{
  int current = array[0];
  int next = array[1];

  // if the first 2 values are equal return no
  if (current == next) {
    return "no";
  }
    
  int ascending = next > current;
  
  for (int i = 2; i < arrayLength; i++) {
    if (ascending && array[i] < current) {
    	// first 2 ints are ascending and the next one is not in ascending order
      return "no";
    }
    if (!ascending && array[i] > current) {
    	// first 2 ints are not ascending and the next one is in ascending order
      return "no";
    }
    current = array[i];
  }
  return ascending ? "yes, ascending" : "yes, descending";
}

// Test Cases:
// int array1[] = {1,2};
// isSortedAndHow(array1, 2);

// int array2[] = {15, 7, 3, -8};
// isSortedAndHow(array1, 4);

// int array3[] = {4, 2, 30};
// isSortedAndHow(array1, 3);