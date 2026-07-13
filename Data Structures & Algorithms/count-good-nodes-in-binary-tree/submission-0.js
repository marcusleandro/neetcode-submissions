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
    constructor() {
        this.previousValues = [];
    }

    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let result = 0;
        result += this.previousValues.some(val => val > root.val) ? 0 : 1;

        this.previousValues.push(root.val);

        if(root.left) {
            result += this.goodNodes(root.left);
            this.previousValues.pop();
        }
        if(root.right) {
            result += this.goodNodes(root.right);
            this.previousValues.pop();
        }

        return result;
    }    
}
