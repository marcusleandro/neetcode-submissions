/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const visited = new Set();
        let current = head;

        while(current != null) {
            if(visited.has(current)) return true;
            visited.add(current);
            current = current.next;
        }

        return false;
    }
}
