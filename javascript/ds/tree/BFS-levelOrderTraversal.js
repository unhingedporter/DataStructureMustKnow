var levelOrder = function (root) {
    class Queue {
        constructor() {
            this.q = [];
        }

        enque(elem) {
            this.q.unshift(elem);
        }

        deque() {

            if (this.q.length === 0) {
                return null;
            }
            return this.q.pop();
        }
        isEmpty() {
            return this.q.length === 0;
        }
    }


    if (!root || root.length === 0) {
        return [];
    }

    var queue = new Queue();

    queue.enque(root);
    queue.enque(null);
    var bfs = [];
    var levelOrderTraversal = [];
    while (!queue.isEmpty()) {

        var root = queue.deque();

        if (!root) {
            root = queue.deque();
            queue.enque(null);
            bfs.push(levelOrderTraversal);
            if (!root) {
                delete levelOrderTraversal;
                break;
            }
            levelOrderTraversal = []
        }
        levelOrderTraversal.push(root.val)

        if (!!root.left) {
            queue.enque(root.left);
        }

        if (!!root.right) {
            queue.enque(root.right);
        }


    }
    return bfs;

};

// Bottoms up

var levelOrderBottom = function (root) {

    class Queue {
        constructor() {
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
            return this._q === 0;
        }
    }


    if (!root || root.length === 0) {
        return [];
    }

    var queue = new Queue();

    queue.enque(root);
    queue.enque(null);

    var stackBFS = [],
        bfs = [];

    while (!queue.isEmpty()) {


        var node = queue.deque();


        if (!node) {

            stackBFS.unshift(bfs);
            node = queue.deque();
            if (!node) {
                delete bfs;
                delete queue;
                break;
            }
            bfs = [];
            queue.enque(null);

        }

        bfs.push(node.val);

        if (!!node.left) {
            queue.enque(node.left);
        }

        if (!!node.right) {
            queue.enque(node.right);
        }

    }

    return stackBFS;

};

// Zig zag order

var zigzagLevelOrder = function (root) {

    class Queue {
        constructor() {
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


    if (!root || root.length === 0) {
        return [];
    }


    var queue = new Queue();
    queue.enque(root);
    queue.enque(null);
    var bfs = [],
        levelArr = [];

    while (!queue.isEmpty()) {

        var node = queue.deque();

        if (!node) {
            node = queue.deque();
            if (bfs.length % 2 === 0) {
                bfs.push(levelArr);
            } else {
                bfs.push(levelArr.reverse());
            }
            if (!node) {
                break;
            }
            queue.enque(null);
            levelArr = [];

        }
        levelArr.push(node.val);
        if (!!node.left) {
            queue.enque(node.left);
        }

        if (!!node.right) {
            queue.enque(node.right);
        }

    }

    return bfs;

};