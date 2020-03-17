/**
 * Classic implementation of bubble sort algorithm.
 * 
 * @param {Array} arr
 * the array to be sorted
 */
function bubbleSort(arr) {
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/**
 * Optimized implementation of bubble sort algorithm,
 * where if no swaps happen in a check, the sorting stops,
 * because the array is already sorted
 * 
 * @param {Array} arr
 * the array to be sorted
 */
function optimizedBubbleSort(arr) {
  let arrayLength = arr.length;
  let elementsDidNotSwap;
  for (let i = 0; i < arrayLength - 1; i++) {
    elementsDidNotSwap = true;
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        elementsDidNotSwap = false;
      }
    }
    if (elementsDidNotSwap) break;
  }
  return arr;
}
