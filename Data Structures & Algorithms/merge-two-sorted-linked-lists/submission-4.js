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
        //return this.recursive(list1, list2);
    }

    recursive(list1, list2) { // tempo: O(n1 + n2), espaço: O(n1 + n2)
        if(list1 === null && list2 === null) return null;
        if(list1 === null) return list2;
        if(list2 === null) return list1;

        let head = null;

        if(list1.val <= list2.val) {
            list1.next = this.recursive(list1.next, list2);
            head = list1;
        }
        else {
            list2.next = this.recursive(list1, list2.next);
            head = list2;
        }

        return head;
    }

    iteractive(list1, list2) { // tempo: O(n1 + n2), espaço: O(1)
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
