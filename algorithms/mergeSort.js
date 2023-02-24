// O(n log n)

function mergeSort(arr) {
  // check length to stop recursion and to return sorted array
  if (arr.length <= 1) {
    return arr;
  }

  const splitIndex = Math.floor(arr.length / 2);

  // .slice does not include the splitIndex / (end value)
  const leftSide = mergeSort(arr.slice(0, splitIndex));
  // .slice includes the splitIndex / (start value)
  const rightSide = mergeSort(arr.slice(splitIndex));

  return merge(leftSide, rightSide);
}

function merge(leftSide, rightSide) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < rightSide.length || j < leftSide.length) {
    const rightValue = rightSide[i];
    const leftValue = leftSide[j];

    // >= would mean that array is empty or iterated through
    // all left to do is to push all the values from the other array
    if (i >= rightSide.length) {
      merged.push(leftValue);
      j++;
    } else if (j >= leftSide.length) {
      merged.push(rightValue);
      i++;
    } else if (rightValue < leftValue) {
      merged.push(rightValue);
      i++;
    } else {
      merged.push(leftValue);
      j++;
    }
  }

  return merged;
}
