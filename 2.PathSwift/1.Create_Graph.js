function createGraph(V, E) {
  let adjacency_list = [];

  for (let i = 0; i < V; i++) {
    adjacency_list.push([]);
  }

  // un-directed graph : u->v , v->u (3,4,7)->(u,v,w)
  for (let i = 0; i < E.length; i++) {
    adjacency_list[E[i][0] - 1].push([E[i][1] - 1, E[i][2]]);
    adjacency_list[E[i][1] - 1].push([E[i][0] - 1, E[i][2]]);
  }

  return adjacency_list;
}

const V = 5;
const Edges = [
  [1, 2, 3],
  [5, 2, 1],
  [5, 2, 2],
  [3, 4, 3],
  [4, 2, 1],
];

const Graph = createGraph(V, Edges);
console.log(Graph);
