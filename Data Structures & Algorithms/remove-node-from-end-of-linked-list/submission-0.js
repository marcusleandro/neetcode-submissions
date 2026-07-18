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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const size = this.getSize(head);
        //console.log(`size=${size}`);

        let prev = null;
        let current = head;
        let indice = size - n;

        if(indice === 0) {
            return head.next;
        }
        else {
            while(indice > 0) {
                prev = current;
                current = current.next;
                indice--;
            }

            prev.next = current.next;
            return head;
        }
    }

    getSize(head) {
        let size = 0;
        let current = head;
        while(current) {
            size++;
            current = current.next;
        }
        return size;
    }
}
