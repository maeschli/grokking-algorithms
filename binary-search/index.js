// Binary search algorithm
//
// Binary search only works when your list is in sorted order. For example,
// the names in a phone book are sorted in alphabetical order, so you can
// use binary search to look for a name.

function binary_search(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high)/2);
    let guess = list[mid];

    if (guess === item)
      return mid;

    if (guess > item)
      high = mid - 1;
    else
      low = mid + 1;
  }

  return null;
}

// Examples:

binary_search([1, 2, 3, 4], 3); //returns index = 2
binary_search([1, 3, 5, 7], 9); //returns null