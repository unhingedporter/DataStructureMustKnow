var closestValue = function (root, target) {


    var minimumDiff = Number.MAX_VALUE;
    var node = null;

    var closestValueFunc = (root, val, minimumDiff) => {

        if (!root) {
            return null;
        }

        var diff = Math.abs(root.val - val)

        if (diff < minimumDiff) {
            minimumDiff = diff;
            node = root.val;
        }
        if (root.val < val) {
            return closestValueFunc(root.right, target, minimumDiff);
        } else if (root.val > val) {
            return closestValueFunc(root.left, target, minimumDiff)
        } else {
            node = root.val;
            return node;
        }
        return node;

    }
    closestValueFunc(root, target, minimumDiff);

    return node;



};