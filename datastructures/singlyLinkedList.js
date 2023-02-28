// No indices, each element is a node and reference the next node
// Head is beginning and tail is end
// Each node connected to only next node except last node
// No random access, needs to be traversed
// Effective insertion and deletion

//Insertion O(1), deletion O(1)/O(N), Searching O(N), Access O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode; // assigning current node pointer (.next) from null to newNode reference
    this.tail = newNode; // assigning new tail value to a new node
    // keep track of added nodes
    this.length += 1;

    return this;
  }

  // Removes last element in the linked list
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let temp = current;

    while (current.next) {
      // temp is second to last element to keep track of new last node in list
      temp = current;
      current = current.next;
    }
    this.tail = temp;
    // assign reference of last node to null to make it a tail
    this.tail.next = null;
    // keep track of removed nodes
    this.length -= 1;

    // Checks if last node was removed from the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // returns popped element
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    // Assign new head to next node
    this.head = this.head.next;

    this.length -= 1;

    // removes the tail when last node is removed
    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length += 1;

    return this;
  }

  get(index) {
    if (this.length <= index || index < 0) return null;

    let value = this.head;
    for (let i = 0; i < index; i++) {
      value = value.next;
    }
    return value;
  }

  set(value, position) {
    let foundNode = this.get(position);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(value, position) {
    if (this.length < position || position < 0) return false;
    if (position === this.length) return !!this.push(value); // return true
    if (position === 0) return !!this.unshift(value); // return true

    let previousNode = this.get(position - 1);

    let newNode = new Node(value);
    if (previousNode) {
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length += 1;
      return true;
    }
    return false;
  }

  remove(position) {
    if (this.length <= position || position < 0) return null;
    if (this.length - 1 === position) return this.pop(); // O(n) because second to last index need to be known
    if (position === 0) return this.shift();

    let previousNode = this.get(position - 1);
    let nodeToBeRemoved = this.get(position);

    previousNode.next = nodeToBeRemoved.next;
    this.length -= 1;

    return nodeToBeRemoved;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;

      previous = node;
      node = next;
    }
    return this;
  }
}
