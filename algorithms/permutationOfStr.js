// Permutation of a string
function findPermutationsOf(string) {
  if (!(string.length > 1)) {
    return [string[0]];
  }

  const permutationsArr = [];

  for (let i = 0; i < string.length; i++) {
    // Isolates one character and adds to every combination using recursion
    const char = string[i];
    // Removes char from the permutation string
    const permutation = string.slice(0, i) + string.slice(i + 1, string.length);
    // result returns array of possible combinations without a char
    const result = findPermutationsOf(permutation);

    for (let i = 0; i < result.length; i++) {
      // Loops through the result array and adds first char to every value
      permutationsArr.push(char + result[i]);
    }
  }

  return [...new Set(permutationsArr)]; // Set creates unique values
}

// alternative solution to [...new Set(permutationsArr)]
function checkForDuplicates(array) {
  const noDuplicateArr = [];

  for (let i = 0; i < array.length; i++) {
    if (noDuplicateArr.includes(array[i])) continue;
    noDuplicateArr.push(array[i]);
  }

  return noDuplicateArr;
}
