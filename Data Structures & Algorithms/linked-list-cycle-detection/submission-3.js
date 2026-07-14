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
        return this.iterative(head);
        // return this.fastAndSlow(head);
    }

    iterative(head) { // tempo O(n), espaço: O(1)
        let current = head;
        const visited = new Set();

        while(current) {
            if(visited.has(current)) return true;
            visited.add(current);
            current = current.next;
        }

        return false;
    }

    fastAndSlow(head) { // tempo O(n), espaço: O(1)
        let slow = head;
        let fast = head?.next;

        while(fast) {
            if(fast === slow) return true;

            slow = slow.next
            fast = fast.next?.next;
        }

        return false;
    }

    fastAndSlowOtimizada(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }
        return false;
    }
}
