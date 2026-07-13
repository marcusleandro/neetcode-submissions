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
        this.values = [];
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        const inOrderArray = this.inOrderArray(root);

        if(inOrderArray.length < 2) return true;

        for(let i = 1; i < inOrderArray.length; i++) {
            if(inOrderArray[i] <= inOrderArray[i - 1]) {
                return false;
            }
        }
        return true;
    }

    inOrderArray(root) {
        if(root === null) return [];

        const result = [];

        result.push(...this.inOrderArray(root.left), root.val, ...this.inOrderArray(root.right));

        return result;
    }


}
