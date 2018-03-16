// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been and now they want to show Charlie their entire collection.
// However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. 
// He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number.
// Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?


// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2]
// since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr,n){
  let result = [];
  // initialize object count to hold number of els present
  let count = {};
  // count els in arr
    // add counts to the object
  for (let el of arr) {
    // if an el is not in obj add it with count 1
    if (!count.hasOwnProperty(el)) {
      count[el] = 1;
    }
    // if el is present add 1 and check if it is <= n
    else {
      count[el]++;
    }
  }
  
  for (let i = 0; i < arr.length; i++) {
      // delete extra copies of els in arr
      while (count[arr[i]] > n) {
        arr.splice(arr.lastIndexOf(arr[i]), 1);
        count[arr[i]]--;
      }
      result.push(arr[i]);
  }
  return result;
}

deleteNth([20,37,20,21], 1); // [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3); // [1, 1, 3, 3, 7, 2, 2, 2]
deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3); // [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
deleteNth([1,1,1,1,1], 5); // [1,1,1,1,1] 
deleteNth([], 5); // []