var isSymmetric = function (root) {

    var mirrorTree = function (root) {

        if (!root) {
            return null;
        }

        var temp = root.left;
        root.left = mirrorTree(root.right);
        root.right = mirrorTree(temp);
        return root;
    }

    var compareTree = function (t1, t2) {

        if ((!t1 && !!t2) || (!!t1 && !t2) || (!!t1 && !!t2 && t1.val !== t2.val)) {
            return false;
        }
        if (!t1 && !t2) {
            return true;
        }

        return compareTree(t1.left, t2.left) && compareTree(t1.right, t2.right);

    }

    var newTree = JSON.parse(JSON.stringify(root))

    return compareTree(root, mirrorTree(newTree));

};