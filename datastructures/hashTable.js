//Insert O(1), deletion O(1), access O(1)
// Depends on the hash function
// Needs to distribute evenly
// Needs to be fast
// Separate chaining => storing in a nested array
// Linear probing => looking forward for an empty slot

class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME_NUM = 31; // less collisions

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) return undefined;

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) return this.table[index][i][1];
    }
  }

  delete(key) {
    let index = this._hash(key);
    if (!this.table[index]) return undefined;

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key)
        return (this.table[index] = undefined);
    }
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          keysArray.push(this.table[i][j][0]);
        }
      }
    }
    return [...new Set(keysArray)];
  }

  values() {
    let valuesArray = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          valuesArray.push(this.table[i][j][1]);
        }
      }
    }
    return [...new Set(valuesArray)];
  }
}
