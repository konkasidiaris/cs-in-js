/**
 * Implementation of selection sort
 * Selection sort works by finding the minimum element
 * and then inserting it the next position of the sorted elements.
 *
 * @param {Array} arr
 * the array to be sorted
 */
function selectionSort(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[minIndex] > arr[j]) {
        //find the index with the lowest value in the unsorted part
        //of the array 
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

/**
 * Selection sort is an unstable sorting. This means that when two elements
 * of the array have the same value, the first may be pushed to a position
 * greater than the second. This is not the desired order. We overcome this by
 * placing the minimum element in its position without swapping and pushing
 * every other element one step forward.
 *
 * @param {Array} arr
 * the array to be sorted
 */
function stableSelectionSort(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength - 1; i++) {
    let minIndex = i;
    // find the minimum element from arr[i] to arr[n-1]
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    // move minimum element at current i
    let key = arr[minIndex];
    while (minIndex > i) {
      // push every element one step forward
      arr[minIndex] = arr[minIndex - 1];
      minIndex--;
    }
    arr[i] = key;
  }
  return arr;
}
