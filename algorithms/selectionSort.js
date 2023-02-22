// Similar to bubble sort but instead of pushing max values to the end of the array
// This algorithm tracks min value and swaps it with beginning value in the array
// Per one iteration single min value is found and moved to the beginning of the array
// Best case O(n^2)
// Better than bubble sort only when need to minimize memory usage by decreasing amounts of swaps
function selectionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    // O(n^2) because it keeps looking for min value
    for (let j = 0 + i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    // swap only if i and index of min value are different to avoid extra steps
    if (i !== arr.indexOf(min)) {
      arr[arr.indexOf(min)] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}
