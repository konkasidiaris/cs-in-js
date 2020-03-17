/**
 * This is the implementation of the merge sort algorithm
 *
 * @param {Array} arr
 * the array to be sorted
 */
function mergeSort(arr) {
  //checks if the array is of length 1
  if (arr.length == 1) return arr;
  else {
    let arrLength = arr.length;
    let midValue = Math.floor((arrLength - 1) / 2);
    let arrLeft = [];
    let arrRight = [];
    //splits the array into left and right part
    for (let i = 0; i <= midValue; i++) arrLeft[i] = arr[i];
    for (let i = midValue + 1; i < arrLength; i++)
      arrRight[i - midValue - 1] = arr[i];
    //recursive call of the method to the left and right arrays
    arrLeft = mergeSort(arrLeft);
    arrRight = mergeSort(arrRight);
    return _merge(arrLeft, arrRight);
  }
}

/**
 * As the name suggests, it merges two sorted arrays into one sorted.
 *
 * @param {Array} arrLeft
 * the left sorted array
 * @param {Array} arrRight
 * the right sorted array
 */
function _merge(arrLeft, arrRight) {
  let mergedArray = [];
  let leftArrLength = arrLeft.length;
  let rightArrLength = arrRight.length;
  let leftIndex = 0;
  let rightIndex = 0;
  let k = 0;

  //this is the part where the actual sort and merging happens
  while (leftIndex < leftArrLength && rightIndex < rightArrLength) {
    if (arrLeft[leftIndex] >= arrRight[rightIndex]) {
      mergedArray[k] = arrRight[rightIndex];
      rightIndex++;
    } else {
      mergedArray[k] = arrLeft[leftIndex];
      leftIndex++;
    }
    k++;
  }

  //if there are leftovers of the left array, they are appended to the end
  //of the merged array
  while (leftIndex < leftArrLength) {
    mergedArray[k] = arrLeft[leftIndex];
    k++;
    leftIndex++;
  }

  //same as above but for the right array
  while (rightIndex < rightArrLength) {
    mergedArray[k] = arrRight[rightIndex];
    k++;
    rightIndex++;
  }
  return mergedArray;
}
