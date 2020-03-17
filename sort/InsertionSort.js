/**
 * Implementation of insertion sort algorithm to sort an array.
 * 
 * @param {Array} arr
 * the array to be sorted
 */
function insertionSort(arr) {
  let arrayLength = arr.length;
  for (let i = 1; i < arrayLength; i++) {
    let key = arr[i];
    let j = i;
    /*
    The while block underneath is the 'heart' of the insertion algorithm.
    This is where each unsorted element is compared to each sorted element
    and take its place moving everything else one position ahead if it is 
    smaller!
    */
    while (key < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = key;
  }
  return arr;
}
