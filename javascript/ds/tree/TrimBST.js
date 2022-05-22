// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} low
//  * @param {number} high
//  * @return {TreeNode}
//  */
//  var trimBST = function(root, low, high) {
    
//     var isLowTrimmed = false;
//     var isHighTrimmed = false;
    
//     var trimBSTFunc = (root, low, high ) =>{
        
//         if(!root){
//             return;
//         }
        
        
//         if(root.val === low && !isLowTrimmed){
//             return root;
//         } else if(root.val === high && !isHighTrimmed){
//             return root;
//         } else if(root.left != null) {
//             var lowValNode = trimBSTFunc(root.left, low, high);
            
//             if(!isLowTrimmed){
//                 if(lowValNode === null){
//                     root.left = null 
//                 } else{
//                     root.left = lowValNode.right;
//                 }
//                 isLowTrimmed = true;
//             }
            
//         } else if (root.right !=null){
//             var highValueNode =  trimBSTFunc(root.right, low, high);            
            
//             if(!isHighTrimmed){
//                 if(highValueNode === null){
//                     root.right = null 
//                 } else{
//                     root.right = lowValNode.left;
//                 }
//                 isHighTrimmed = true;
//             }
//         }        
//         return root;
//     }
//     var root = JSON.parse(JSON.stringify(root));
//     return trimBSTFunc(root, low, high);   
// };

var trimBST = function(root, low, high) {
    return trim(root, low, high);
    // T.C: O(N)
    // S.C: O(H)
};

function trim(root, low, high) {
    if (!root) {
        return null;
    }
    if (root.val < low) {
        return trim(root.right, low, high);
    }
    if (root.val > high) {
        return trim(root.left, low, high);
    }
    root.left = trim(root.left, low, high);
    root.right = trim(root.right, low, high);
    return root;
}