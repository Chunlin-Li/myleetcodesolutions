/**
 * 100. Same Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var list1 = [p];
    var list2 = [q];
    var ptr1;
    var ptr2;
    var layer1 = 1;
    var layer2 = 1;

    while (list1[0] || list2[0]) {
        try {
            ptr1 = list1.shift();
            ptr2 = list2.shift();
            if (ptr1.left || ptr2.left) {
                list1.push(ptr1.left);
                list2.push(ptr2.left);
            }
            if (ptr1.right || ptr2.right) {
                list1.push(ptr1.right);
                list2.push(ptr2.right);
            }
            if (ptr1.val !== ptr2.val) {
                return false;
            }
            if (--layer1 === 0 || --layer2 === 0) {
                layer1 = list1.length;
                layer2 = list2.length;
            }
        } catch (err) {
            return false;
        }
    }
    if (list1.length == list2.length) {
        return true;
    }
};