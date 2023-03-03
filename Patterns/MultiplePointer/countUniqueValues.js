function countUniqueValues(array) {
  let counter = 1;
  let tempValue = array[0];

  for (let i = 0; i < array.length; i++) {
    if (tempValue !== array[i]) {
      counter += 1;
    }
    tempValue = array[i];
  }

  return counter;
}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));

// Other Version

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[j] !== arr[i]) {
      j += 1;
      // assign first pointer to the new different value
      arr[j] = arr[i];
    }
  }
  return j + 1;
}
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// 2;
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
// 4;
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
