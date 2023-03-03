// FIFO First in First Out

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    let poppedElement = this.start;
    if (!this.start) return null;
    if (this.size === 1) {
      this.start = null;
      this.end = null;
    } else {
      this.start = poppedElement.next;
      // removes the pointer from dequeued element
      poppedElement.next = null;
    }
    this.size -= 1;
    return poppedElement.value;
  }
}
