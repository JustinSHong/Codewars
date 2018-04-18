// Description:
// If you are calculating complex things or execute time-consuming API calls,
// you sometimes want to cache the results. In this case we want you to create a function wrapper,
// which takes a function and caches its results depending on the arguments, that were applied to the function.

// input: a function that calculates complex things or executes time-consuming API calls
// cache should store the functions results and should only store unique arguments
// if function arguments are repeated, return the cached results instead
// repeated args should cause cache to return stored results for those args
