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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null) return true;

        const hLeft = this.getHeight(root.left);
        const hRight = this.getHeight(root.right);
        console.log(`root=${root.val}, hLeft=${hLeft}, hRight=${hRight}`);

        if( Math.abs(hLeft - hRight) > 1 ) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    getHeight(root) {
        if(root === null) return 0;
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))
    }
}
