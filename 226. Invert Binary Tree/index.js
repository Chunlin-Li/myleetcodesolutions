/**
 * 226. Invert Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var list = [root];
    var ptr, m;
    var layer = 1;

    while (list[0]) {
        ptr = list.shift();
        if (ptr.left) {
            list.push(ptr.left);
        }
        if (ptr.right) {
            list.push(ptr.right);
        }
        m = ptr.left;
        ptr.left = ptr.right;
        ptr.right = m;
        if (--layer === 0) {
            layer = list.length;
        }
    }
    return root;
};