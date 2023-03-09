// Built with binary heap, however can be implemented with different ways
// Insertion and removal time complexity O(log n)
// Searching is O(n)

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    if (this.values.length === 0) return this.values.push(newNode);

    this.values.push(newNode);

    const bubbleUp = () => {
      // the index of the value will be last in the array
      let n = this.values.length - 1;
      let parentIndex = Math.round((n - 1) / 2);

      while (this.values[parentIndex].priority > this.values[n].priority) {
        // If larger, swap the child (value) with its node
        this.swap(n, parentIndex);
        // assign the index of the value to index of the node
        n = parentIndex;
        // find the new index (parent) of new child or the node
        // repeat until there are no smaller value parents
        parentIndex = Math.round((n - 1) / 2);
      }
    };

    bubbleUp();
  }

  dequeue() {
    const maxPriority = this.values[0];

    // assign last element to the root
    this.values[0] = this.values[this.values.length - 1];

    let parentIndex = 0;

    let swapped = 1;

    while (
      swapped !== null &&
      parentIndex * 2 + 1 < this.values.length &&
      parentIndex * 2 + 2 < this.values.length
    ) {
      let leftChildIdx = parentIndex * 2 + 1;
      let rightChildIdx = parentIndex * 2 + 2;
      // swap with the largest child
      let minIndex = Math.min(
        this.values[leftChildIdx].priority,
        this.values[rightChildIdx].priority
      );
      if (
        minIndex === this.values[leftChildIdx].priority &&
        this.values[parentIndex].priority > this.values[leftChildIdx].priority
      ) {
        this.swap(parentIndex, leftChildIdx);
        parentIndex = leftChildIdx;
      } else if (
        minIndex === this.values[rightChildIdx].priority &&
        this.values[parentIndex].priority > this.values[rightChildIdx].priority
      ) {
        this.swap(parentIndex, rightChildIdx);
        parentIndex = rightChildIdx;
      } else {
        swapped = null;
      }
    }
    // removes last element in the heap
    // it was bubbled down from top and assigned new place
    this.values.pop();

    return maxPriority;
  }
}
