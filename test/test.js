var should = require('chai').should();

const SimpleGraph = require('../js/SimpleGraph.js');

describe('Circular detector', function () {

  let graph;
  
  beforeEach(function () {
    graph = new SimpleGraph();
    graph.addVertex('A', 'B', 'C', 'D', 'E');
    graph.addVertex('X');
    graph.addEdge('A','B');
    graph.addEdge('A','D');
    graph.addEdge('B','C');
    graph.addEdge('C','D');
    graph.addEdge('C','E');
    graph.addEdge('D','E');
  });

  // missing Tests:
  // addVertex
  // removeVertex
  // addEdge
  // addEdge undirected
  // removeEdge
  // removeEdge undirected

  it('should check if two nodes are connected or not.', function() {
    graph.isConnected('A','B').should.be.true;
    graph.isConnected('A','C').should.be.true;
    graph.isConnected('B','X').should.be.false;
    graph.addEdge('E','X');
    graph.isConnected('B','X').should.be.true;
  });
 

});