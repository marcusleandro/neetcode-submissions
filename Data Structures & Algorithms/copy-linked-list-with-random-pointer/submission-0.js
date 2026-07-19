// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();
        let current = head;
        while(current != null) {
            map.set(current, new Node(current.val));
            current = current.next;
        }

        for(let [original, copy] of map) {
            const nextCopy = map.get(original.next) || null;
            const randomCopy = map.get(original.random) || null;

            copy.next = nextCopy;
            copy.random = randomCopy;
        }

        return head === null ? null : map.get(head);
    }
}
