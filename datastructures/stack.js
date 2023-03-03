// Collection of data
// LIFO => Last item added, goes out first
// Pushing and popping is O(1) constant time
// Pushing to the front of the Linked List
// Popping from the front of the Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this;
  }

  pop() {
    if (!this.first) return null;

    // IF one element in the list, remove this.last from the stack
    if (this.first === this.last) {
      this.last = null;
    }

    let poppedElement = this.first;
    this.first = poppedElement.next;
    poppedElement.next = null;
    this.size -= 1;

    return poppedElement;
  }
}
