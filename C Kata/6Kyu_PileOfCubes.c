// Description:
// Your task is to construct a building which will be a pile of n cubes. 
// The cube at the bottom will have a volume of n^3, 
// the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m 
// and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1

// m is the total volume of the building
// find n number of cubes in the building
// return - 1 if no such n exists

// m is the total volume of the building
// find n number of cubes in the building
// return - 1 if no such n exists

long long findNb(long long m)
{
  printf("input: %lld\n", m);
  // initialize volume to hold volume of n cubes
  long double volume = 0;
  // initialize n - counter for cubes
  int n = 0;
  // loop to m
  while (volume <= m) {   
    // check: volume is larger than m
    if (volume >= m) {
      break;
    }
    // increment n
    n++;
    // increment volume
    // printf("i : %d\n", i);
    // printf("cube: %f\n", pow(i, 3));
    volume += powl(n, 3);
  }
  printf("volume: %LF\n", volume);
  printf("n: %d\n", n);
  // check if volume is equal to m
  return (m == volume) ? n : -1;
}