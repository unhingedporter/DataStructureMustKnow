


var serialize = function(root) {
    const res = [];
    const queue = root ? [root] : [];
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left || null);
            queue.push(node.right || null);
        } else {
            res.push(null);
        }
    }
    while (res[res.length - 1] === null) res.pop();
    return JSON.stringify(res);
};

var deserialize = function(data) {
    const arr = JSON.parse(data);
    if (!arr.length) return null;
    const root = new TreeNode(arr.shift());
    const queue = [root];
    while (queue.length) {
        let node = queue.shift(), val;
        node.left = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
        node.right = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return root;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */




 var serialize = function(root) {
    class Queue{
    
    constructor(){
        this._q = [];
    }
    
    enque(val){
        this._q.unshift(val);
    }
    
    deque(){
        if(this._q.length === 0){
            return null;
        }
         
        return this._q.shift();
    }
    
    isEmpty(){
        return this._q.length === 0;
    }
    
}
    const res = [];
    const queue = new Queue();
    queue.enque(root);
    
    while (!queue.isEmpty()) {
        let node = queue.deque();
        
        if(node!= null){
            res.push(node.val);
            queue.enque(node.left || null)
            queue.enque(node.right || null)            
        } else {
            res.push(null)
        }
    }
    return JSON.stringify(res);
};

var deserialize = function(data) {
    class Queue{
    
    constructor(){
        this._q = [];
    }
    
    enque(val){
        this._q.unshift(val);
    }
    
    deque(){
        if(this._q.length === 0){
            return null;
        }
         
        return this._q.shift();
    }
    
    isEmpty(){
        return this._q.length === 0;
    }
    
}
    const arr = JSON.parse(data);
    if (!arr.length) return null;
    const root = new TreeNode(arr.shift());
    const queue = new Queue();
    queue.enque(root);
    while (!queue.isEmpty()) {
        let node = queue.deque(), val;
        node.left = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
        node.right = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
        if (node.left) queue.enque(node.left);
        if (node.right) queue.enque(node.right);
    }
    return root;
};