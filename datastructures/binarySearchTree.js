// Sorted data or sortable data
// Only for Binary Search Trees // Sorted
// Insertion O(log n) average and best case
// Searching O(log n) average and best case

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      // checks for duplicates and doesn't allow duplicates
      if (value === current.value) return undefined;
      if (value < current.value) {
        // checks if current node has a left child and assigns newNode if it doesn't
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // if there is a left child, assigns new currentRoot and compare values again
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let currentRoot = this.root;

    while (true) {
      // if tree doesn't contain a value it returns false
      if (currentRoot === null || value === undefined) return false;
      if (value <= currentRoot.value) {
        if (currentRoot.value === value) {
          return true && currentRoot;
        }
        currentRoot = currentRoot.left;
      } else if (value >= currentRoot.value) {
        if (currentRoot.value === value) {
          return true;
        }
        currentRoot = currentRoot.right;
      }
    }
  }
}
