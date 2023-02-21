function binarySearch(arr, x, lowerB = 0, upperB) {
  if (lowerB > upperB) return -1;

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

// Other variation of bubble search
function binarySearch(arr, val) {
  // because it takes min value, subtracting .5 from any number will give by one less
  let midPoint = Math.floor(arr.length - 1 / 2);

  if (val === arr[midPoint]) return midPoint;

  if (val < arr[midPoint]) return binarySearch(arr.slice(0, midPoint), val);
  if (val > arr[midPoint])
    return binarySearch(arr.slice(midPoint + 1, arr.length), val);

  return -1;
}
