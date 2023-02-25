// Radix Sort
// Works on lists of numbers
// doesn't do comparisons
// O(nk)

function radixSort(array) {
  if (array.length <= 0) return array;

  let n = mostDigits(array);

  for (let i = 0; i < n; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);
      buckets[digit].push(array[j]);
    }
    array = [].concat(...buckets);
  }
  return array;
}

// Helper functions
function getDigit(number, position) {
  if (typeof number === "string" || isNaN(number)) return;
  // Based ten numbers
  // absolute for negative numbers
  // floor for getting a remainder
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

function getDigitCount(num) {
  return num.toString().length;
}

function mostDigits(array) {
  let max = 0;

  for (let num of array) {
    max = Math.max(max, getDigitCount(num));
  }
  return max;
}
