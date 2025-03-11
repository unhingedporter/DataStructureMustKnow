/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
// var cloneGraph = function(root) {

//     var queue = [root];
//     var newRoot = {}
//     // var visited = new Set();

//     while(queue.length > 0){
//         var node = queue.pop();
//         if(!node ){
//              break}
//         // if(!visited.has(node.val)){
//         //     visited.add(node.val);
//         // } else {
//         //     break;
//         // }
        
//         if(!newRoot[node.val]){
//             newRoot[node.val] = {
//                 val: node.val,
//                 neighbors : []
//             }
//         }

//     for(let neighbour of node.neighbors){
//         if(newRoot[node.val]['neighbors'].indexOf(neighbour) === -1){
//         queue.push(neighbour);
//         newRoot[node.val].neighbors.push(neighbour)
//         }
//     }
    


//     }

//     return newRoot['1'];
    
// };


var cloneGraph = function(root) {
    if (!root) return null;

    const clonedNodes = new Map(); // Map to store cloned nodes
    const queue = [root]; // Queue for BFS traversal

    // Initialize the root clone
    clonedNodes.set(root, { val: root.val, neighbors: [] });

    while (queue.length > 0) {
        const node = queue.pop();

        // Process each neighbor of the current node
        for (let neighbor of node.neighbors) {
            // If neighbor hasn't been cloned, clone it and add it to the queue
            if (!clonedNodes.has(neighbor)) {
                clonedNodes.set(neighbor, { val: neighbor.val, neighbors: [] });
                queue.push(neighbor);
            }
            // Add the clone of the neighbor to the current node's neighbors
            clonedNodes.get(node).neighbors.push(clonedNodes.get(neighbor));
        }
    }

    // Return the clone of the root node
    return clonedNodes.get(root);
};
