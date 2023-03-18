// Similar to bubble sort but instead of pushing max values to the end of the array
// This algorithm tracks min value and swaps it with beginning value in the array
// Per one iteration single min value is found and moved to the beginning of the array
// Best case O(n^2)
// Better than bubble sort only when need to minimize memory usage by decreasing amounts of swaps
function selectionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // O(n^2) because it keeps looking for min value
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    // swap only if i and index of min value are different to avoid extra steps
    if (i !== min) {
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
