// Two pointers, one points to the next and another to previous
// Faster pop, or iteration from the end due to additional previous pointer
// It takes more memory than Singly Linked List

// Insertion and Removal O(1) constant time, Removal always constant
// Searching and Access O(N), however searching is optimized but still O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
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
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      // Remove the next from last node
      this.tail.next = null;
      // To clear the pointer from removed element
      removedNode.previous = null;
    }

    this.length -= 1;

    return removedNode;
  }

  shift() {
    if (!this.head) return undefined;

    let deletedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = deletedNode.next;
      this.head.previous = null;
      // removing the next from deleted node
      deletedNode.next = null;
    }

    this.length -= 1;

    return deletedNode;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (this.length <= index || index < 0) return null;

    let midValue = this.length / 2;

    // looking from the end of the LinkedList
    if (midValue <= index) {
      let currentNode = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.previous;
      }
      return currentNode;
      // looking from the start of the LinkedList
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  set(value, index) {
    let foundNode = this.get(index);

    if (foundNode != null) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (this.length < index || index < 0) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value); // !! or double bang to return true

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1); // find a node before the index at which value should be inserted

    newNode.next = beforeNode.next; // newNode points to the Node after it
    beforeNode.next.previous = newNode; // the node after the inserted node, points to inserted node
    newNode.previous = beforeNode; // newly inserted node points to the Node before it
    beforeNode.next = newNode; // the node before the inserted node, points to inserted node

    this.length += 1;
    return this;
  }

  remove(index) {
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let itemToBeRemoved = this.get(index);

    if (itemToBeRemoved != null) {
      // the node before the itemToBeRemoved is pointed to the node after itemToBeRemoved
      itemToBeRemoved.previous.next = itemToBeRemoved.next;
      // the node after itemToBeRemoved previous pointer is assigned to the node before itemToBeRemoved
      itemToBeRemoved.next.previous = itemToBeRemoved.previous;

      // removes pointers from deleted node
      itemToBeRemoved.next = null;
      itemToBeRemoved.previous = null;
      this.length -= 1;
      return itemToBeRemoved;
    }
    return false;
  }
}
