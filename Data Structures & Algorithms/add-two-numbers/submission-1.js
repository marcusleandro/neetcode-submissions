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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let remainer = 0;
        let curr1 = l1;
        let curr2 = l2;
        
        const dummy = new ListNode(0);
        let tail  = dummy;

        while(curr1 != null || curr2 != null || remainer > 0) {
            let sum = (curr1?.val || 0) + (curr2?.val || 0) + remainer;
            
            remainer = Math.floor(sum / 10);
            sum = sum % 10

            tail.next = new ListNode(sum);
            tail = tail.next;
            
            curr1 = curr1?.next || null;
            curr2 = curr2?.next || null;
        }

        return dummy.next;
    }
}
