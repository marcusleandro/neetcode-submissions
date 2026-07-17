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
     * @return {void}
     */
    reorderList(head) {
        const items = [];
        let current = head;

        while(current) {
            items.push(current);
            current = current.next;
        }

        let tail = new ListNode(0);
        let left = 0;
        let right = items.length - 1;
        let count = 0;

        while(left <= right) {
            let item;
            if (count % 2 === 0) {
                item = items[left];
                left++;
            } else {
                item = items[right];
                right--;
            }
            
            tail.next = item;
            tail = item;
            count++;
        }

        tail.next = null;
    }
}
