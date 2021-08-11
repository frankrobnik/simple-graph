var should = require('chai').should();

const SimpleGraph = require('../js/SimpleGraph.js');

describe('Circular detector', function () {

  let graph;
  
  beforeEach(function () {
    graph = new SimpleGraph();
    graph.addVertex(['A', 'B', 'C', 'D', 'E']);
    graph.addVertex('X');
    graph.addEdge('A','B');
    graph.addEdge('A','D');
    graph.addEdge('B','C');
    graph.addEdge('C','D');
    graph.addEdge('D','E');
  });

  it('should check if two nodes are connected or not.', function() {
    graph.connected('A','B').should.be.true;
    graph.connected('A','C').should.be.true;
    graph.connected('B','X').should.be.false;
  });
 
});