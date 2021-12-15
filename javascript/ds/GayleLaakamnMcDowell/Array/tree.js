

class Node {

    constructor(value, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class Tree {
    inorderTraversal(root) {
        if (!root) {
            return;
        }
        this.inorderTraversal(root.left);
        console.log(root.value);
        this.inorderTraversal(root.right);
    }

    preorderTraversal(root) {
        if (!root) {
            return;
        }
        console.log(root.value);
        this.preorderTraversal(root.left);
        this.preorderTraversal(root.right);

    }

    postorderTraversal(root) {
        if (!root) {
            return;
        }
        this.postorderTraversal(root.left);
        this.postorderTraversal(root.right);
        console.log(root.value);
    }

    deleteNode(root, x) {

        if (!root) {
            return;
        }
        var inorderSuccessor = function (node) {

            node = node.right;
            var minVal = node.key;
            while (node.left) {
                minVal = node.value;
                node = node.left;
            }
            return minVal;
        };

        if (root.value < x) {
            root.left = this.deleteNode(root, x);
        } else if (root.value > x) {
            root.right = this.deleteNode(root, x);
        } else {
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            } else {
                root.value = inorderSuccessor(root);
                root.right = this.deleteNode(root.right, root.value);
            }
        }
    }

    leftViewTree(root) {

    }

    topViewTree(root) {

    }

    rightViewTree(root) {

    }

    bottomViewTree(root) {

    }
    BFSTraversal(root) {

    }

}