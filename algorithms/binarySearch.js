function binarySearch(arr, x, lowerB = 0, upperB) {
  if (lowerB > upperB) return;

  const middleValue = Math.floor((lowerB + upperB) / 2);

  if (x === arr[middleValue]) {
    return middleValue;
  } else if (x > arr[middleValue]) {
    return binarySearch(arr, x, middleValue + 1, arr.length - 1);
  } else {
    return binarySearch(arr, x, lowerB, middleValue - 1);
  }
}

function findValue(arr, searchValue) {
  if (!Array.isArray(arr)) return;

  const length = arr.length - 1;

  return binarySearch(arr, searchValue, 0, length);
}
