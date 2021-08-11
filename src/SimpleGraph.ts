class SimpleGraph {
  private _graph: Map<string, Set<string>>;
  
  constructor () {
    this._graph = new Map();  
  }

  addVertex (...keys:Array<string>):boolean {
    keys.forEach((key:string) => this._graph.set(key, new Set()));
    return true;
  }

  removeVertex (...keys:Array<string>):boolean {
    keys.forEach((vertex:string) => {
      this._graph.get(vertex).forEach(edge => this.removeEdge(edge, vertex) );
      this._graph.delete(vertex);
    });
    return true;
  }

  addEdge (from:string, to:string, undirected:boolean = false):boolean {
    if(from === to) throw new Error('From and to cannot be the same.');
    this._graph.get(from).add(to);
    if (undirected) this._graph.get(to).add(from);
    return true;
  }
  
  removeEdge (from:string, to:string, undirected:boolean = false):boolean {
    this._graph.get(from).delete(to);
    if (undirected) this._graph.get(to).delete(from);
    return true;
  }

  isConnected (start:string, end:string):boolean {
    if(!this._graph.has(start)) throw new Error(`Graph does not contain '${start}'.`);
    if(!this._graph.has(end)) throw new Error(`Graph does not contain '${end}'.`);
    if(start === end) throw new Error(`'start' and 'end' cannot be the same.`);
    
    const queue:Array<string> = [];
    const visited:Array<string> = [];

    const search = (vertex:string):boolean => {
      const currentVertex = this._graph.get(vertex);
      
      if (currentVertex.has(end)) return true;
      else {
        visited.push(vertex);
        currentVertex.forEach((edge:string) => !visited.includes(edge) && queue.push(edge));
        if (queue.length) return search(queue.shift());
      }
      return false;
    }

    return search(start);
  }

}


module.exports = SimpleGraph;