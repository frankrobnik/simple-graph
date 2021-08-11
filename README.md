# simple-graph
simple graph implementation to check if two vertecies are connected.

- directed graph: edges are directed, node 'A' can have an edge to 'B', but not necessarily the other way around.
- cyclic: the graph can have cycles, wich means you could get the same node more than once.
- no loops: a node can not point to itself
- no multi edges: there can always only be one edge in each direction between nodes 
- storage: the graph data will be stored in an Map, edges will be stored in an Set
- Breath first search (BFS): search will use a queue

## functions
- addVertex(...keys) you can add multiple vertecies
- removeVertex(...keys) you can remove multiple vertecies
- addEdge(from, to, undirected?) add an edge. Optional undirected flag can create a second edge the other way around.
- removeEdge(from, to, undirected?) remove an edge. Optional undirected flag will remove the edge in both ways.
- isConnected (start, end) returns true if 'start' is connected to 'end'