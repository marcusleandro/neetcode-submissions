/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        
        let rootClone = new Node(node.val);
        const visited = new Map([[node, rootClone]]);
        const queue = [node];

        while(queue.length > 0) {
            const current = queue.shift();
            const currentClone = visited.get(current);

            for(let neighbor of current.neighbors) {
                if(!visited.has(neighbor)) {
                    const neighborClone = new Node(neighbor.val);                
                    visited.set(neighbor, neighborClone);
                    queue.push(neighbor);
                }
                
                currentClone.neighbors.push( visited.get(neighbor) );
            }
        }

        return rootClone;
    }    
}
