// var a = [[1, 2, 3], 4, [5, [6, 7]] ]

// var k = [];
// var flattening = function(elem){

// for(var iterator = 0 ; iterator < elem.length; iterator++){

// if(Array.isArray(elem[iterator])){
// flattening(elem[iterator])
// } else {
//   console.log("pushing element at " + elem[iterator]);
//   k.push(elem[iterator]);
// }
// //k = k.concat(elem[iterator]);
// }
// return k;
// }

// console.log(flattening(a))

// reversing a string

// var swap = (str, low, high) =>{
//     var temp = str[low];
//     str[low] = str[high];
//     str[high] = temp;
// }
// var str= "dasdasd aaaaaaaaaaaaaa a ggg ppp";

// str = str.split('');
// var low = 0, high = str.length;
//  while(low < high){
//      swap(str, low, high);
//      low++;
//      high--;
//  }

// console.log(str.join(''));

// check if an array can be divided into three equal subarray
// [1,1,1]

// 3
// 2,4
// 1,1,1

// 1,1,1 3  2,4

// check if there is an subarray with 0 sum
// If we consider all prefix sums, we can
// notice that there is a subarray with 0
// sum when :
// 1) Either a prefix sum repeats or
// 2) Or prefix sum becomes 0.

/// find the longest subarray with equal number with 0's and 1's

// hint -- The concept of taking cumulative sum, taking 0’s as -1 will help us in optimizing the approach.

class TreeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.value = val || null;
  }
}

class Queue {
  constructor() {
    this._queue = [];
  }

  size() {
    return this._queue.length;
  }

  enqueu(elem) {
    this._queue.unshift(elem);
  }

  dequeu() {
    return this._queue.length >= 1
      ? this._queue.splice(this._queue.length - 1, 1)[0]
      : null;
  }
  isEmpty() {
    return this._queue.length === 0;
  }
}

class TreeOperations {
  breadthFirstTraversal(root) {
    var queue = new Queue();

    queue.enqueu(root);

    while (!queue.isEmpty()) {
      var elem = queue.dequeu();

      if (!elem) {
        break;
      }

      console.log(elem.value);

      if (elem.left !== null) {
        queue.enqueu(elem.left);
      }

      if (elem.right !== null) {
        queue.enqueu(elem.right);
      }
    }
  }

  breadthFirstTraversalSumOrder(root) {
    var queue = new Queue();

    queue.enqueu(root);
    queue.enqueu(null);
    var sum = 0;
    while (!queue.isEmpty()) {
      var elem = queue.dequeu();

      if (!elem) {
        console.log(`Sum at previous level is ${sum}`);
        elem = queue.dequeu();
        if(!elem){
        break;
        }
        sum = 0;
        queue.enqueu(null);
      }

      console.log(elem.value);
      sum += elem.value;
      if (elem.left !== null) {
        queue.enqueu(elem.left);
      }

      if (elem.right !== null) {
        queue.enqueu(elem.right);
      }
    }
  }

  height(root){

    if(!root){
      return 0;
    }

    return 1 + Math.max.apply(null,[this.height(root.left), this.height(root.right)]);

  }

  size(root){

    if(!root){
      return 0;
    }

    return 1 + this.size(root.left) + this.size(root.right);
  }

  sumChildren(root){

      if(!root){
        return 0;
      }

      if(!root.left && !!root.value){
        return root.value;
      }

      if(!root.right && !!root.value){
        return root.value;
      }

      var sum = this.sumChildren(root.left) + this.sumChildren(root.right);
      
      if(root.value === sum){
        console.log("Equal" + root.value + " " + sum);
      } else {
        console.log("Not Equal" + root.value + " "  + sum);
      }

      return sum;



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
    let nodeNinth = new TreeNode(15000);

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
}

var treeOperations = new TreeOperations();
var root = treeOperations.createTree();

// treeOperations.breadthFirstTraversal(root);
// console.log("!@!@!@!@!@!@!@!@!@!@!@!@!@!@!")
// treeOperations.breadthFirstTraversalSumOrder(root);
// console.log(` Height of the tree is ${treeOperations.height(root)}`);
// console.log(` Size of the tree is ${treeOperations.size(root)}`);
console.log(` Children sum of the tree is ${treeOperations.sumChildren(root)}`);
