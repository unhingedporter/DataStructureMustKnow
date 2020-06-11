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
var minDepth = function (root) {


    if (root === null) {
        return 1;
    } else if (!isNaN(root.val) && root.left === null && root.right === null) {
        return 1;
    } else if (Array.isArray(root) && root.length === 0) {
        return 0;
    }

    var leftTreeHeight = minDepth(root.left);
    var rightTreeHeight = minDepth(root.right);

    console.log(leftTreeHeight + "----" + rightTreeHeight);

    console.log(1 + Math.min.call(this, leftTreeHeight, rightTreeHeight));
    return 1 + Math.min.call(this, leftTreeHeight, rightTreeHeight);

};