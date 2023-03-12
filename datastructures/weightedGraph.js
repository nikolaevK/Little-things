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
    // it was bubbled down from top and assigned to a new place
    this.values.pop();

    return maxPriority;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // Dijkstra's Algorithm
  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = [];
    let smallest;

    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === end) {
        // done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // neighbor is an index of a neighbor
          let nextNode = this.adjacencyList[smallest][neighbor]; // getting actual value, an object
          // adding weight of previous nodes to a new neighbor
          let newDistance = distances[smallest] + nextNode.weight;

          // checking if the new distance to that node is smaller than the current distance
          // which is saved in distances[of that node]
          if (newDistance < distances[nextNode.node]) {
            // updating new smallest distance to neighbor
            distances[nextNode.node] = newDistance;
            // updating previous - how we we got to neighbor
            previous[nextNode.node] = smallest;
            // Enqueue the node with new priority
            nodes.enqueue(nextNode.node, newDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
