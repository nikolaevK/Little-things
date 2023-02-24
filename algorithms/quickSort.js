// Best and Average O(n log n)
// Worst O(n^2) when array is sorted after the pivot point
// These only works with pivot point arr[0]
function quickSort(arr) {
  if (arr.length <= 2) return arr;
  // pivot mutates the array and returns index of the pivot value
  let index = pivot(arr);

  // creates new left and right array not including the value of the pivot
  let left = quickSort(arr.slice(0, index));
  let right = quickSort(arr.slice(index + 1, arr.length));

  return left.concat(arr[index]).concat(right);
}

function pivot(arr) {
  let pivot = 2;
  let counter = 2;

  for (let i = 0; i < arr.length - counter; i++) {
    if (arr[i] < arr[pivot]) {
      counter += 1;

      let temp = arr[i];
      arr[i] = arr[counter];
      arr[counter] = temp;
    }
  }
  if (counter >= 1) {
    temp = arr[pivot];
    arr[pivot] = arr[counter];
    arr[counter] = temp;
  }
  return counter;
}

// Second version
function quickSort2(array, left = 0, right = array.length) {
  if (left < right) {
    let index = pivot2(array, left, right);
    // leftSide
    quickSort2(array, left, index - 1);
    // rightSide
    quickSort2(array, index + 1, right);
  }
  return array;
}

function pivot2(array, start = 0, end = array.length) {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = array[start];
  let counter = start;

  // on the fist iteration, array[end] doesn't exist
  // but it does on the next recursion
  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      counter += 1;

      swap(array, i, counter);
    }
  }

  swap(array, start, counter);

  // index of the pivot element
  return counter;
}
