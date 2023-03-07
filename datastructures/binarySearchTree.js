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

  // Breadth First Search => => => Searches Horizontally
  // For every level of tree, traverse horizontally until there is no nodes on same level
  // By using a queue, create an order in which the nodes will be pushed to final array
  BFS() {
    let queue = []; // using a queue FIFO // it can be implemented as linked list to improve performance
    let visited = [];
    let node;

    queue.push(this.root);

    while (queue.length > 0) {
      node = queue.shift();
      visited.push(node);

      if (node.left) queue.push(node.left); // First in First Out
      if (node.right) queue.push(node.right);

      return visited;
    }
  }

  // Depth First Search
  // Down first. Vertical
  // For every node, fully traverse the left and then right of that node
  // PreOrder
  DFSPreOrder() {
    let visited = [];
    let current = this.root;

    // helper function
    const traverse = (node) => {
      visited.push(node.value);

      if (node.left) traverse(node.left); // Visiting the whole left side before the right side
      if (node.right) traverse(node.right); // visiting the right side
    };
    traverse(current);
    return visited;
  }

  // For any node, visit its children before the actual node
  // Explore the left children then the right children then add the Root
  DFSPostOrder() {
    let visited = [];
    let current = this.root;

    // helper function
    const traverse = (node) => {
      if (node.left) traverse(node.left); // Visiting the whole left side before the right side
      if (node.right) traverse(node.right); // visiting the right side
      // All the children of the node from left to right will be added first, then the node itself
      visited.push(node.value);
    };
    traverse(current);
    return visited;
  }
}
