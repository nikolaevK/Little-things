// MULTIPLE POINTER PATTERN
// Find the first two numbers which when added are equal to 0
// sorted array
// O(n) only if sorted

function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    }
    if (sum < 0) {
      leftPointer += 1;
    } else {
      rightPointer -= 1;
    }
  }
}

// console.log(sumZero([-5, -3, -2, -1, 0, 1, 3, 4]));
