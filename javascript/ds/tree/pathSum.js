var hasPathSum = function(root, targetSum) {
    var status = false;
    
    var hasPathSumCalc = function(root, targetSum){

        if(!root){
            return 0;
        }
        var difference = targetSum - root.val;
        if(difference === 0 && !root.left && !root.right){
            status = true;
        }
        var leftSum = hasPathSumCalc(root.left, difference) ;
        var rightSum = hasPathSumCalc(root.right, difference);


    }
    
    hasPathSumCalc(root, targetSum);
    return status;
};

/*
class Solution(object):
	def hasPathSum(self, root, targetSum):queue = [root]
		if not root:
			return False

		while queue:
			node = queue.pop(0)
			if node.left == None and node.right == None:
				if node.val == targetSum:
					return True

			if node.left:
				node.left.val = node.val + node.left.val
				queue.append(node.left)
			if node.right:
				node.right.val = node.val + node.right.val
				queue.append(node.right)

		return False
        
*/