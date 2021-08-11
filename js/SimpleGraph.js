class SimpleGraph {
    constructor() {
        this._graph = new Map();
    }
    addVertex(...keys) {
        keys.forEach((key) => this._graph.set(key, new Set()));
        return true;
    }
    removeVertex(...keys) {
        keys.forEach((vertex) => {
            this._graph.get(vertex).forEach(edge => this.removeEdge(edge, vertex));
            this._graph.delete(vertex);
        });
        return true;
    }
    addEdge(from, to, undirected = false) {
        if (from === to)
            throw new Error('From and to cannot be the same.');
        this._graph.get(from).add(to);
        if (undirected)
            this._graph.get(to).add(from);
        return true;
    }
    removeEdge(from, to, undirected = false) {
        this._graph.get(from).delete(to);
        if (undirected)
            this._graph.get(to).delete(from);
        return true;
    }
    isConnected(start, end) {
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
