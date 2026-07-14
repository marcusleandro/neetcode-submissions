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
        //return this.iterative(list1, list2);
        return this.iterative2(list1, list2);
        //return this.recursive(list1, list2);
    }

    recursive(list1, list2) { // tempo: O(n1 + n2), espaço: O(n1 + n2)
        if(list1 === null) return list2;
        if(list2 === null) return list1;

        if(list1.val <= list2.val) {
            list1.next = this.recursive(list1.next, list2);
            return list1;
        }
        else {
            list2.next = this.recursive(list1, list2.next);
            return list2;
        }
    }

    iterative(list1, list2) { // tempo: O(n1 + n2), espaço: O(1)
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

    iterative2(list1, list2) {
    const dummy = new ListNode(0); // valor não importa
    let tail = dummy;
    let curr1 = list1;
    let curr2 = list2;

    while (curr1 !== null && curr2 !== null) {
        if (curr1.val <= curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        tail = tail.next;
    }

    // Anexa o restante (um dos dois é null, o outro pode ser a lista inteira)
    tail.next = curr1 !== null ? curr1 : curr2;

    return dummy.next;
}
}
