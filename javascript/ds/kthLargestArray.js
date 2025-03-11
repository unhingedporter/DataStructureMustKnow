// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?


class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }
  
    
    insert(val) {
      this.heap.push(val);
      this.heapifyUp();
    }
  
    
    removeMin() {
      if (this.size() > 1) {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
      } else {
        return this.heap.pop();
      }
    }
  
    
    peek() {
      return this.heap[0];
    }
  
    
    size() {
      return this.heap.length;
    }
  
    
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[index] < this.heap[this.getParentIndex(index)]) {
        [this.heap[index], this.heap[this.getParentIndex(index)]] = 
        [this.heap[this.getParentIndex(index)], this.heap[index]];
        index = this.getParentIndex(index);
      }
    }
  
    
    heapifyDown() {
      let index = 0;
      while (this.getLeftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (this.getRightChildIndex(index) < this.heap.length &&
            this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
        if (this.heap[index] < this.heap[smallerChildIndex]) break;
        [this.heap[index], this.heap[smallerChildIndex]] = 
        [this.heap[smallerChildIndex], this.heap[index]];
        index = smallerChildIndex;
      }
    }
  }
  
  function findKthLargest(nums, k) {
    const minHeap = new MinHeap();
  
    
    for (let num of nums) {
      minHeap.insert(num);
      if (minHeap.size() > k) {
        minHeap.removeMin();
      }
    }
  
    
    return minHeap.peek();
  }
  
  
  const nums = [3, 2, 1, 5, 6, 4];
  const k = 2;
  console.log(findKthLargest(nums, k)); 
  