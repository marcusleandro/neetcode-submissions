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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];

        const result = [];
        const queue = [[root, 0]];

        while(queue.length > 0) {
            const [current, level] = queue.shift();
            //console.log(`current=${current.val}, level=${level}`);

            if(!result[level]) {
                result[level] = [];
            }
            const levelArr = result[level];

            levelArr.push(current.val);

            if(current.left) queue.push([current.left, level + 1]);
            if(current.right) queue.push([current.right, level + 1]);
        }

        return result;
    }
}
