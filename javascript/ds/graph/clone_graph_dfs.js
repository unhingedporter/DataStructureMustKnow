var cloneGraph = function(node) {
   
    var root = {}
    var visited = new Set()
   helper(root, node, visited)
   return root[1]
};

let helper = (root, node, visited)=>{

    if(!node || visited.has(node.val)){
        return;
    }

    if(!root[node.val]){
        root[node.val] = {
            val: node.val,
            neighbors:[]
        }
    }
    visited.add(node.val)


    for(let neighbour of node.neighbors){
        if(!root[neighbour.val]){

            root[neighbour.val]= {
                val: neighbour.val,
                neighbors: []            
            }
        }
        root[node.val].neighbors.push(root[neighbour.val]) 
        helper(root, neighbour, visited)

    }
}