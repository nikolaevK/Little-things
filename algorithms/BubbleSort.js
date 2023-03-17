// Best case O(n)
// When data is nearly sorted then Bubble and Insertion algorithms perform quicker than the others

function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // swap allows for optimization in case array is almost sorted
    // if there was no swap, it would break out of the loop and return sorted array
    let swap = true;

    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swap = false;
      }
    }
    if (swap) break;
  }
  return array;
  //test
}
