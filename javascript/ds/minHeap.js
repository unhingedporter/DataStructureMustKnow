// Implement a min heap:

// -> insert, extract_min

// property: 
// - elements are in ascending order
// - complete binary tree (node is smaller than it’s children)
// - root is the most minimum
// - insert takes O(logn) time
//     - insert to the bottom right
//     - bubble up until it meets requirements
// - extract_min takes O(logn) time
//     - replace min with bottom right
//     - bubble down until it meets requirements
/*
How is Binary Heap represented?
A Binary Heap is a Complete Binary Tree. A binary heap is typically represented as an array.

    The root element will be at Arr[0].
    Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:
    Arr[(i-1)/2]	Returns the parent node
    Arr[(2*i)+1]	Returns the left child node
    Arr[(2*i)+2]	Returns the right child node
  
*/

function MinHeap() {
  this.data = [];
}

MinHeap.prototype.insert = function(val) {
  this.data.push(val);
  this.bubbleUp(this.data.length-1);
};

MinHeap.prototype.extractMin = function() {
  var min = this.data[0];
  
  // set first element to last element
  this.data[0] = this.data.pop();
  
  // call bubble down
  this.bubbleDown(0);
  
  return min;
};

var swap = function(arr, firstIndex, secondIndex){
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

MinHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
    // get the parent
    var parent = Math.floor((index - 1) / 2);
    
    // if parent is greater than child
    if (this.data[parent] > this.data[index]) {
      swap(this.data, parent, index);
    }
    
    index = parent;
  }
};

MinHeap.prototype.bubbleDown = function(index) {
  while (true) {
    var child = (index+1)*2;
    var sibling ;
    
    if(child % 2 === 0){
       sibling = child - 1;
    } else {
      sibling = child + 1;
    }
    var toSwap = null;
    
    // if current is greater than child
    if (this.data[index] > this.data[child]) {
      toSwap = child;
    }
    
    // if sibling is smaller than child, but also smaller than current
    if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
        toSwap = sibling;
    }
    
    // if we don't need to swap, then break.
    if (toSwap == null) {
      break;
    }

    swap(this.data,toSwap, index);    
    index = toSwap;
  }
};

var heap = new MinHeap();

heap.insert(5);
heap.insert(4);
heap.insert(8);
heap.insert(6);
heap.insert(1);
heap.insert(14);
heap.insert(2);
heap.insert(7);
heap.insert(3);

console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());

// Reference: https://gist.github.com/tpae/54ec7371f947505967a2036b9c002428