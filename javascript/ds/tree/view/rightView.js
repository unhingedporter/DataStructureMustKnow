var rightSideView = function (root) {

    var rightSideArr = [];

    class Queue {
        constructor(arr) {
            this._q = [];
        }

        enque(elem) {
            this._q.unshift(elem);
        }

        deque() {
            if (this._q.length === 0) {
                return null;
            }
            return this._q.pop();
        }
        isEmpty() {
            return this._q.length === 0;
        }
    }

    var queue = new Queue();

    queue.enque(root);
    queue.enque(null);

    if (!!root) {
        rightSideArr.push(root.val);
    }
    while (!queue.isEmpty()) {

        var node = queue.deque();

        if (!node) {
            node = queue.deque();
            if (!node) {
                break;
            }
            rightSideArr.push(node.val);
            queue.enque(null);
        }

        if (node.right) {
            queue.enque(node.right);
        }

        if (node.left) {
            queue.enque(node.left);
        }
    }

    return rightSideArr;

};