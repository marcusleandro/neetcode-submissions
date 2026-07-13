class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = this.buildGraph(n, edges);
        const visited = new Set();
        let count = 0;

        for(let node = 0; node < n; node++) {
            if(this.explore(graph, node, visited)) {
                count++;
            }
        }

        return count;
    }

    explore(graph, node, visited) {
        if(visited.has(node)) return false;
        visited.add(node);

        for(let neighbor of graph[node]) {
            this.explore(graph, neighbor, visited);
        }

        return true;
    }

    buildGraph(n, edges) {
        const graph = {};
        for(let i = 0; i < n; i++) {
            graph[i] = [];
        }
        for(let [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    }
}
