// MaxBinaryHeap, a parent node is always larger than its children
// MinBinaryHeap, a parent node is always smaller than its children

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }

  insert(value) {
    this.values.push(value);

    const bubbleUp = () => {
      // the index of the value will be last in the array
      let n = this.values.length - 1;
      let parentIndex = Math.floor((n - 1) / 2);

      while (this.values[parentIndex] < this.values[n]) {
        // If larger, swap the child (value) with its node
        this.swap(n, parentIndex);
        // assign the index of the value to index of the node
        n = parentIndex;
        // find the new index (parent) of new child or the node
        // repeat until there are no smaller value parents
        parentIndex = Math.floor((n - 1) / 2);
      }
    };

    bubbleUp();
  }

  extractMax() {
    const max = this.values[0];

    // assign last element to the root
    this.values[0] = this.values[this.values.length - 1];

    let parentIndex = 0;

    let swapped = 1;

    while (swapped !== null) {
      let leftChildIdx = parentIndex * 2 + 1;
      let rightChildIdx = parentIndex * 2 + 2;
      // swap with the largest child
      let maxIndex = Math.max(
        this.values[leftChildIdx],
        this.values[rightChildIdx]
      );
      if (
        maxIndex === this.values[leftChildIdx] &&
        this.values[parentIndex] < this.values[leftChildIdx]
      ) {
        this.swap(parentIndex, leftChildIdx);
        parentIndex = leftChildIdx;
      } else if (
        maxIndex === this.values[rightChildIdx] &&
        this.values[parentIndex] < this.values[rightChildIdx]
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

    return max;
  }
}
