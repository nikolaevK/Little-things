// Vertex => Node
// Edge => connection
// Undirected Graph => two way connection, no assigned direction
// Directed Graph => direction assigned to the edge
// Unweighted Graph => Edge has no value
// Weighted Graph => Edge has a value

// ADJACENCY MATRIX => using a matrix
// add and remove vertex O(n^2) because you have to add a column and a row
// add and remove edge O(1)
// Query O(1)
// storage O(n^2)

// ADJACENCY LIST => using hash table to store vertices and edges
// add Vertex and Edge O(1)
// Less space than adjacency matrix

// Undirected Graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    // assigning the length because Adjacency List is mutable and will decrease inside the loop
    let length = this.adjacencyList[vertex].length;
    if (length > 0) {
      // removes all elements from the Adjacency List and removes itself from those vertices
      for (let i = 0; i < length; i++) {
        this.removeEdge(vertex, this.adjacencyList[vertex][0]);
      }
    }
    // deletes the Vertex
    delete this.adjacencyList[vertex];
  }
}
