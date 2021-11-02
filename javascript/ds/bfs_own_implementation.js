class Node {
    constructor(value, left = null, right = null) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.q = [];
    }

    enqueu(elem) {
        this.q.unshift(elem);
    }

    peek() {
        return this.q.length > 0 ? this.q[0] : null;
    }

    deque() {
        return this.q.length > 0 ? this.q.pop() : null;
    }

    isEmpty() {
        return this.q.length === 0;
    }
}

class TreeTraversal {
    printAllNodeAtLevel(root) {
        var level = 0;
        if (!root) {
            return;
        }

        var queue = new Queue();
        queue.enqueu(root);
        queue.enqueu(null);
        while (!queue.isEmpty()) {
            var elem = queue.deque();
            if (!elem) {
                level++;
                console.log(`Level ${level} `);

                if (queue.peek() == null) {
                    break; //Two null encountered
                } else {
                    queue.enqueu(null);
                    continue;
                }
            }

            console.log(`${elem.value} ,`);

            if (!!elem.left) {
                queue.enqueu(elem.left);
            }

            if (!!elem.right) {
                queue.enqueu(elem.right);
            }
        }
    }

    traversalBFS(root) {
        // sanity check
        if (!root) {
            return;
        }
        var treeList = new Queue();

        treeList.enqueu(root);

        while (!treeList.isEmpty()) {
            var elem = treeList.deque();

            // Print at same line
            process.stdout.write(`${elem.value},`);

            if (!!elem.left) {
                treeList.enqueu(elem.left);
            }
            if (!!elem.right) {
                treeList.enqueu(elem.right);
            }
        }
        return treeList;
    }

    createTree() {
        /*
                               1000
                           /           \
                          500            1500
                       /               /       \
                     250            1250     2000
                   /    \            /            \
                125     350       1125              1350
           */
        var root = new Node(1000);
        var node1 = new Node(500);
        var node2 = new Node(250);
        var node3 = new Node(125);
        var node4 = new Node(1125);
        var node5 = new Node(1250);
        var node6 = new Node(1500);
        var node7 = new Node(2000);
        var node8 = new Node(350);
        var node9 = new Node(1350);

        root.left = node1;
        root.right = node6;

        node1.left = node2;
        node1.right = node6;

        node2.left = node3;
        node2.right = node8;

        node6.left = node5;
        node6.right = node7;

        node5.left = node4;
        node5.right = node9;

        return root;
    }

    main() {
        var treeRoot = this.createTree();
        this.traversalBFS(treeRoot);
        this.printAllNodeAtLevel(treeRoot);
    }
}

var treeTraverse = new TreeTraversal();
treeTraverse.main();