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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const orderedNodes = this.getArrayOrder(root);
        return orderedNodes[k - 1];
    }

    getArrayOrder(root) {
        if(!root) return [];
        
        const result = [];

        if(root.left) {
            result.push(...this.getArrayOrder(root.left));
        }
        
        result.push(root.val);

        if(root.right) {
            result.push(...this.getArrayOrder(root.right));
        }

        return result;
    }
}
