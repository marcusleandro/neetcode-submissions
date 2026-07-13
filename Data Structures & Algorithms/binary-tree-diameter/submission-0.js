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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root === null) return 0;

        const hLeft = this.heightOfBinaryTree(root.left);
        const hRight = this.heightOfBinaryTree(root.right);
        const diameter = hLeft + hRight;

        return Math.max(diameter, this.diameterOfBinaryTree(root.left), this.diameterOfBinaryTree(root.right))
    }

    heightOfBinaryTree(root) {
        if(root === null) return 0;
        const leftH = this.heightOfBinaryTree(root.left);
        const rightH = this.heightOfBinaryTree(root.right);
        return 1 + Math.max(leftH, rightH);
    }
}
