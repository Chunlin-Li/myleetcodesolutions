/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = [], curr, k = 0;
    while (l1 || l2) {
        (curr = (l1 && l1.val || 0) + (l2 && l2.val || 0) + k) > 9 ? k = 1 : k = 0;
        curr %= 10;
        res.push(curr);
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if (k > 0) {
        res.push(1);
    }
    return res;
};

console.log(addTwoNumbers({val: 2, next: {val: 4, next: {val: 3, next: null}}},
    {val: 5, next:{val: 6, next:{val: 4, next: null}}}));