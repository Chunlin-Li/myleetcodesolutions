/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var list = [root];
    var count = 0;
    var ptr;
    var layer = 1;

    while (list[0]) {
        ptr = list.shift();
        if (ptr.left) {
            list.push(ptr.left);
        }
        if (ptr.right) {
            list.push(ptr.right);
        }
        if (--layer === 0) {
            count ++;
            layer = list.length;
        }
    }
    return count;
};


var a1 = {"val":1,"right":null,"left":null};
var b1 = {"val":1,"right":{"val":1,"right":null,"left":null},"left":{"val":0,"right":null,"left":null}};
var c1 = {"val":1,"right":{"val":1,"right":{"val":0,"right":null,"left":null},"left":{"val":1,"right":{"val":1,"right":null,"left":null},"left":{"val":0,"right":null,"left":null}}},"left":{"val":1,"right":{"val":1,"right":{"val":0,"right":null,"left":null},"left":{"val":0,"right":null,"left":null}},"left":{"val":0,"right":{"val":0,"right":null,"left":null},"left":{"val":0,"right":null,"left":null}}}};

console.log(maxDepth(c1));