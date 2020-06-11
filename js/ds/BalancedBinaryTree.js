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
 * @return {boolean}
 */

var height = function (root) {
    if (!root) {
        return 0;
    }

    return 1 + Math.max.call({}, height(root.left), height(root.right))
}
var isBalanced = function (root) {

    if (!root) {
        return true;
    }

    var leftSubTree = height(root.left);
    var rightSubTree = height(root.right);

    if (Math.abs(leftSubTree - rightSubTree) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true
    }

    return false

};