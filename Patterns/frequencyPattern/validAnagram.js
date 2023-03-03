// FREQUENCY PATTERN
// Same amount of same letters in two different words
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let char1 of str1) {
    // when obj initializing => (obj1 initially == undefined) || 0 => 0 + 1
    obj1[char1] = (obj1[char1] || 0) + 1;
  }

  for (let char2 of str2) {
    obj2[char2] = (obj2[char2] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("qwerty", "qeywrt"));
