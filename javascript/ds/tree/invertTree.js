// mirror image of the tree


var invertTree = function (root) {

    if (!root) {
        return null;
    }

    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;



};


// Depth First Traversal
var invertTree = function(root) {
    const preorder = node => {
      if (!node) return
      [node.left, node.right] = [node.right, node.left]
      
      preorder(node.left)
      preorder(node.right)
    }
    
    preorder(root)
    return root
  }
    
  // Breath First Traversal
  var invertTree = function(root) {
    if (!root) return root
    const queue = [root]
    
    while(queue.length !== 0) {
      const node = queue.shift()
      
      let temp = node.left
      node.left = node.right
      node.right = temp
      
      if (node.left) {queue.push(node.left)}
      if (node.right) {queue.push(node.right)}
    }
    
    return root
  };
  