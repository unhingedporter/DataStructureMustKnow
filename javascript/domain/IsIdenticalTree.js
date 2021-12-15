https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var inOrderTraversal = function (root, arr) {

    if (!root) {
        return;
    };

    inOrderTraversal(root.left);

    arr.push(root.val);

    inOrderTraversal(root.right);


}

var isSameTree = function (p, q) {

    var pTree = [], qTree = [];

    inOrderTraversal(p, pTree);
    inOrderTraversal(q, qTree);

    console.log("pTree " + pTree);
    console.log("qTree" + qTree);

    if ((!pTree && !!qTree) || (!qTree && !!pTree)) {
        return false;
    }

    if (pTree.length !== qTree.length) {
        return false;
    }

    for (var i = 0; iterator < pTree.length; i++) {

        if (pTree[i] !== qTree[i]) {
            console.log('not equal' + pTree[i] + " " + qTree[i]);
            return false;

        }
    }

    return true;

};