class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.actualQueue = [];
  }

  enqueu(elem) {
    this.actualQueue.unshift(elem);
  }

  isEmpty() {
    return this.actualQueue.length === 0;
  }

  size() {
    return this.actualQueue.length;
  }

  dequeu() {
    return this.actualQueue.length > 0
      ? this.actualQueue.splice(this.actualQueue.length - 1, 1)[0]
      : null;
  }
}

class TreeNodeHd {
  constructor(node, horizontalDistance) {
    this.node = node;
    this.horizontalDistance = horizontalDistance;
  }
}

class TreeOperations {
  constructor() {
    this.root = this.createTree();
    // this.inOrderTraversal(this.root);
  }

  createTree() {
    /*
                                                  100000
                                                
                                    /                                \
                                50000                               150000
                            /           \                       /                 \
                        25000            75000               125000             175000
                    /        \          /    \              /     \             /     \
                10000        40000   60000    90000      110000   140000    160000     300000
        */

    let root = new TreeNode(100000);
    let nodeTwo = new TreeNode(50000);
    let nodeThree = new TreeNode(150000);

    root.left = nodeTwo;
    root.right = nodeThree;

    let nodeFour = new TreeNode(25000);
    let nodeFive = new TreeNode(75000);

    nodeTwo.left = nodeFour;
    nodeTwo.right = nodeFive;

    let nodeSix = new TreeNode(125000);
    let nodeSeventh = new TreeNode(175000);

    nodeThree.left = nodeSix;
    nodeThree.right = nodeSeventh;

    let nodeEighth = new TreeNode(10000);
    let nodeNinth = new TreeNode(40000);

    nodeFour.left = nodeEighth;
    nodeFour.right = nodeNinth;

    let nodeTenth = new TreeNode(160000);
    let nodeEleventh = new TreeNode(300000);

    nodeSeventh.left = nodeTenth;
    nodeSeventh.right = nodeEleventh;

    let nodeTwelth = new TreeNode(110000);
    let nodeThirteen = new TreeNode(140000);

    nodeSix.left = nodeTwelth;
    nodeSix.right = nodeThirteen;

    let nodeFourteen = new TreeNode(60000);
    let nodeFifteen = new TreeNode(90000);

    nodeFive.left = nodeFourteen;
    nodeFive.right = nodeFifteen;

    return root;
  }

  inOrderTraversal(node) {
    if (!node) {
      return;
    }

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }

  printLeftView(root) {
    if (!root) {
      return;
    }

    var queue = new Queue();
    queue.enqueu(null);
    queue.enqueu(root);

    while (!queue.isEmpty()) {
      var elem = queue.dequeu();

      if (elem === null) {
        elem = queue.dequeu();

        if (elem === null) {
          break;
        }
        console.log(elem.value);
        queue.enqueu(null);
      }

      if (!!elem.left) {
        queue.enqueu(elem.left);
      }

      if (!!elem.right) {
        queue.enqueu(elem.right);
      }
    }
  }

  printTopView(root) {
    var hashTable = this.verticalOrderTraversal(root);
    console.log("The top view of the tree n reverse direction is ");

    for (var ht in hashTable) {
      console.log(hashTable[ht][0]);
    }
  }

  printRightViewDFS(root) {
    const dfs = (node, currentLevel, result) => {
      if (!node) return;
      if (currentLevel >= result.length) {
        result.push(node.value);
      }

      if (node.right) {
        dfs(node.right, currentLevel + 1, result);
      }

      if (node.left) {
        dfs(node.left, currentLevel + 1, result);
      }
    }

    const rightSideViewDFS = function (root) {
      const result = [];

      dfs(root, 0, result);
      return result;
    };
  }

  printRightViewBFS(root) {

    if (!root) return [];
    const result = [];
    let queue = [root];

    while (queue.length) {
      let length = queue.length, count = 0, currentNode;

      while (count < length) {
        currentNode = queue.shift();

        if (currentNode.left) {
          queue.push(currentNode.left);
        }

        if (currentNode.right) {
          queue.push(currentNode.right);
        }

        count++;
      }

      result.push(currentNode.value)
    }

    return result;
  }

  printRightView(root) {
    if (!root) {
      return;
    }

    var queue = new Queue();
    queue.enqueu(null);
    queue.enqueu(root);

    while (!queue.isEmpty()) {
      var elem = queue.dequeu();

      if (elem === null) {
        elem = queue.dequeu();

        if (elem === null) {
          break;
        }
        console.log(elem.value);
        queue.enqueu(null);
      }

      if (!!elem.right) {
        queue.enqueu(elem.right);
      }

      if (!!elem.left) {
        queue.enqueu(elem.left);
      }
    }
  }

  // Get total treenodes in a tree
  getSize(node) {
    if (!node) {
      return 0;
    }

    return 1 + this.getSize(node.left) + this.getSize(node.right);
  }

  getHeight(node) {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  sumLevel() {
    var root = this.root;

    var queue = new Queue();

    if (!root) {
      return;
    }

    queue.enqueu(root);
    queue.enqueu(null);
    var sum = 0;
    while (queue.size() > 0) {
      var elem = queue.dequeu();

      if (elem === null) {
        elem = queue.dequeu();
        console.log("the sum at previous level " + sum);
        if (elem === null) {
          break;
        }
        sum = 0;
        queue.enqueu(null);
      }

      if (!elem) {
        return;
      }

      sum += elem.value;

      // Won't consider 0 but it does not matter for now as it is just sum :P
      if (!!elem.left) {
        queue.enqueu(elem.left);
      }

      if (!!elem.right) {
        queue.enqueu(elem.right);
      }
    }
  }

  isChildrenSumSingleNode(root) {
    if (!root) {
      return 0;
    }

    if (!root.left && !!root.value) {
      return root.value;
    }

    if (!root.right && !!root.value) {
      return root.value;
    }

    var sum = this.sumChildren(root.left) + this.sumChildren(root.right);

    if (root.value === sum) {
      console.log("Equal Node" + root.value + " " + sum);
    } else {
      console.log("Not Equal" + root.value + " " + sum);
    }

    return sum;
  }

  isBSTBalanced() { }

  verticalOrderTraversal(root) {
    if (!root) {
      return;
    }

    var queue = new Queue();

    queue.enqueu(new TreeNodeHd(root, 0));

    var hashTable = {};
    while (!queue.isEmpty()) {
      var treeNode = queue.dequeu();

      if (treeNode.node === null) {
        break;
      }

      if (!!treeNode.node.left) {
        queue.enqueu(
          new TreeNodeHd(treeNode.node.left, treeNode.horizontalDistance - 1)
        );
      }

      if (!!treeNode.node.right) {
        queue.enqueu(
          new TreeNodeHd(treeNode.node.right, treeNode.horizontalDistance + 1)
        );
      }

      if (!hashTable[treeNode.horizontalDistance]) {
        hashTable[treeNode.horizontalDistance] = [];
      }
      hashTable[treeNode.horizontalDistance].push(treeNode.node.value);
    }

    for (var ht in hashTable) {
      if (hashTable[ht].length > 0) {
        console.log(hashTable[ht]);
      }
    }

    return hashTable;
  }

  findCommonAncestor() { }

  invertTree() { }

  /* https://leetcode.com/problems/path-sum/
    Given a binary tree and a sum, determine if the tree has a root-to-leaf path 
    such that adding up all the values along the path equals the given sum.
     */
  hasPathSum(root, sum) { }

  BFSTraversal() {
    console.log(
      "----------------------Starting BFS traversal----------------------"
    );
    var root = this.root;

    var queue = new Queue();

    if (!root) {
      return;
    }

    queue.enqueu(root);

    while (!queue.isEmpty()) {
      var elem = queue.dequeu();

      if (!elem) {
        return;
      }

      // Mark the element as visited if it is graph implementation
      console.log(elem.value);

      if (!!elem.left) {
        queue.enqueu(elem.left);
      }

      if (!!elem.right) {
        queue.enqueu(elem.right);
      }
    }
  }

  DFSTraversal() { }
}

var traversal = new TreeOperations();
console.log("---In order traversal---");
traversal.inOrderTraversal(traversal.root);

console.log("---BFS Traveral---");
traversal.BFSTraversal();

console.log("---Sum Level---");
traversal.sumLevel();

console.log("The height of the tree is " + traversal.getHeight(traversal.root));

console.log("The size of the tree is " + traversal.getSize(traversal.root));

console.log("The left view of the tree is");
traversal.printLeftView(traversal.root);

console.log("The right view of the tree is ");
traversal.printRightView(traversal.root);

console.log("the vertical order traversal of the tree is ");
traversal.verticalOrderTraversal(traversal.root);

console.log("the top view of the tree is ");
traversal.printTopView(traversal.root);
