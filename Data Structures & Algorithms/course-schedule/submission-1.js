class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const graph = this.buildGraph(numCourses, prerequisites);
        const visited = new Map();
        for(let i = 0; i < numCourses; i++) {
            if(this.hasCicle(graph, i, new Map())) {
                return false;
            }
        }
        return true;
    }

    buildGraph(numCourses, prerequisites) {
        const graph = {};
        for(let i = 0; i < numCourses; i++) {
            graph[i] = [];
        }
        for(let [a, b] of prerequisites) {
            graph[a].push(b);
        }
        return graph;
    }

    hasCicle(graph, root, visited) {
        if(visited.get(root) === 1) {
            return true;
        }
        visited.set(root, 1);

        for(let neighbor of graph[root]) {
            if(this.hasCicle(graph, neighbor, visited)) {
                return true;
            }
        }

        visited.set(root, 2);

        return false;
    }
}
