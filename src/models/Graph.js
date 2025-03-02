class Graph {
  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(name, func) {
    this.nodes[name] = func;
    console.log("name, func ==> ", name, func);
  }

  addEdge(fromNode, toNode) {
    if (!this.edges[fromNode]) {
      this.edges[fromNode] = [];
    }
    this.edges[fromNode].push(toNode);
    console.log("fromNode, toNode ==> ", fromNode, toNode);
  }

  getNextNode(currentNode, data) {
    const edge = this.edges[currentNode];
    if (!edge) {
      return null;
    }
    if (typeof edge[0] === "function") {
      return edge[0](data);
    }
    console.log("currentNode, data ==> ", currentNode, data);
    console.log("edge[0] ==> ", edge[0]);
    return edge[0];
  }
}

export default Graph;