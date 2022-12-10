function permutationInStr(string, x) {
  if (string.length == 1) return 0;

  let j = 0;
  // length of a search string
  const n = x.length;

  for (let i = 0; i <= string.length - n; i++) {
    // Creates a block of chars, length of string x
    const block = string.slice(i, i + n);
    // Sends the block with search string for evaluation
    // If block includes same chars as value we searching for
    // no matter the order, thats one permutation of the value in a string
    if (compare(block, x, n)) {
      j++;
    }
  }
  return j;
}

function compare(str, x, n) {
  let j = 0;
  // Checks if every value of a block is inside a search string
  for (let i = 0; i < str.length; i++) {
    // if characters in the block are not unique then method .includes doesn't work
    // block: "irr", search string: "ira"
    // method .includes will return true two times for "r"
    if (x.includes(str[i])) {
      j++;
    }
  }
  // if length is same as match value then permutation matched
  if (j == n) {
    return true;
  } else {
    return false;
  }
}

// console.log(permutationInStr("abcabcdkjgjkfdgabckabcjsfkabc", "abc"));
