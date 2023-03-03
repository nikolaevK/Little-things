// SLIDING WINDOW PATTERN

// 0(N^2)

function maxSubarraySum(arr, n) {
  if (arr.length < 0) return null;
  let max = 0;

  for (let i = 0; i <= arr.length - n; i++) {
    // Slice creates a subarray window of length n and reduce sums it
    let currentSum = arr.slice(i, n + i).reduce((a, b) => a + b, 0);

    if (max < currentSum) {
      max = currentSum;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 3], 4));

// O(n) solution

function maxSubarraySum(arr, n) {
  if (arr.length < 0) return null;

  let tempSum = 0;
  let max = tempSum;

  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  for (let i = n; i < arr.length; i++) {
    // moving along the array and subtracting the start element of the window and adding next
    // then comparing old window vs new window
    tempSum = tempSum - arr[i - n] + arr[i];

    if (max < tempSum) {
      max = tempSum;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 10], 4));
