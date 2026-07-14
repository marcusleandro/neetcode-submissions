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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        return this.iteractive(list1, list2);
    }

    iteractive(list1, list2) {
        let head = null;
        let tail = null;
        let current1 = list1;
        let current2 = list2;

        while(current1 && current2) {
            if(current1.val <= current2.val) {
                if(!head) head = current1;
                if(tail) tail.next = current1;
                tail = current1;
                current1 = current1.next;
            }
            else {
                if(!head) head = current2;
                if(tail) tail.next = current2;
                tail = current2;
                current2 = current2.next;
            }
        }

        if(current1 === null && current2 !== null) {
            if(!head) head = current2;
            if(tail) tail.next = current2;
            else tail = current2;
        }
        else if(current1 !== null && current2 === null) {
            if(!head) head = current1;
            if(tail) tail.next = current1;
            else tail = current1;
        }

        return head;
    }
}
