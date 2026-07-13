/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        const result = [];
        const levels = this.getArrayLevel(root);
        
        for(let level of levels) {
            const item = level.pop();
            result.push(item);
        }

        return result;
    }

    getArrayLevel(root) {
        if(root === null) return [];

        const result = [];
        const queue = [[root, 0]];

        while(queue.length > 0) {
            const [current, level] = queue.shift();
            
            if(!result[level])  
                result[level] = [];

            result[level].push(current.val);

            if(current.left)    
                queue.push([current.left, level + 1]);
            if(current.right)    
                queue.push([current.right, level + 1]);
        }

        // for(let level of result) {
        //     console.log(`level: ${level}`);
        // }

        return result;
    }
}
