/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {

    if (root === null) {
        return 0;
    } else if (!isNaN(root.val) && root.left === null && root.right === null) {
        return 1
    }

    return 1 + Math.max.call(this, maxDepth(root.left), maxDepth(root.right))

};