
class Node {
    constructor(value) {
        this.left = this.right = null;
        this.value = value;
    }
}


class Tree {

    constructor() {

    }

    printPostOrder() {

    }
    searchBST(root, val) {


        if (!root) {
            return null;
        }

        if (root.val === val) {
            return root;
        }

        var left = searchBST(root.left, val);
        var right = searchBST(root.right, val);

        if (!!left) {
            return left;
        }

        if (!!right) {
            return right;
        }
        return null;

    }


}