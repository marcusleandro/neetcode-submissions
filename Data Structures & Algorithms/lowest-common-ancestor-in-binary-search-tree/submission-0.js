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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root === null) return null;

        let result = null;
        const queue = [root];

        while(queue.length > 0) {
            const current = queue.shift();
            //console.log(`processing node=${current.val}`);

            if(this.search(current, p.val) && this.search(current, q.val)) {
                result = current;
            }

            if(current.left !== null) {
                queue.push(current.left);
            }
            if(current.right !== null) {
                queue.push(current.right);
            }
        }

        return result;
    }

    search(root, target) {
        if(root === null) return false;
        if(root.val === target) {
            return true;
        }
        else if(root.val > target) {
            return this.search(root.left, target);
        }
        else {
            return this.search(root.right, target);
        }
    }
}
