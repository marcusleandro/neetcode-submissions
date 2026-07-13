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
     * @return {ListNode}
     */
    reverseList(head) {
        //return this.iteractive(head);
        return this.recursive(head);
    }

    recursive(head, prev = null) {
        if(head === null) return prev;
        const next = head.next;
        head.next = prev;
        return this.recursive(next, head);
    }

    iteractive(head) {
        let prev = null;
        let current = head;
        while(current) {
            const next = current.next;            
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
}
