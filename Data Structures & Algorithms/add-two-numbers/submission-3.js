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
        // return this.iterative(l1, l2);
        return this.recursive(l1, l2);
    }

    recursive(l1, l2, carry = 0) {
        if(l1 === null && l2 === null && carry === 0) return null;

        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        const node = new ListNode(sum);
        node.next = this.recursive(l1?.next || null, l2?.next || null, carry);

        return node;
    }

    iterative(l1, l2) {
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
