class SimpleGraph {
    constructor() {
        this._graph = new Map();
    }
    addVertex(key) {
        if (typeof key === 'string')
            this._graph.set(key, new Set());
        else
            key.forEach(key => this._graph.set(key, new Set()));
        return true;
    }
    removeVertex(key) {
        this._graph.get(key).forEach(adjacent => this.removeEdge(adjacent, key));
        this._graph.delete(key);
        return true;
    }
    addEdge(from, to, directed = true) {
        if (from === to)
            throw new Error('From and to cannot be the same.');
        this._graph.get(from).add(to);
        if (!directed)
            this._graph.get(to).add(from);
        return true;
    }
    removeEdge(from, to) {
        this._graph.get(from).delete(to);
        return true;
    }
    connected(start, end) {
        if (!this._graph.has(start))
            throw new Error(`Graph does not contain '${start}'.`);
        if (!this._graph.has(end))
            throw new Error(`Graph does not contain '${end}'.`);
        if (start === end)
            throw new Error(`'start' and 'end' cannot be the same.`);
        const queue = [];
        const visited = [];
        const search = (vertex) => {
            const currentVertex = this._graph.get(vertex);
            if (currentVertex.has(end))
                return true;
            else {
                visited.push(vertex);
                currentVertex.forEach((edge) => !visited.includes(edge) && queue.push(edge));
                if (queue.length)
                    return search(queue.shift());
            }
            return false;
        };
        return search(start);
    }
}
module.exports = SimpleGraph;
