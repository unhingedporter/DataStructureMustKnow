class SortOperation {

    constructor() {
        this.arr = [1, 2, 3, 5, 6, 7, 8, -1, -5, -9, 12, 88, 1000, -40000];
    }


    bubbleSort() {

    }
    insertionSort() {

    }
    mergeSort() {

    }
    quickSort() {

        // Why Quick Sort is preferred over MergeSort for sorting Arrays 
        // Quick Sort in its general form is an in-place sort (i.e. it doesn’t require any extra storage) whereas merge sort requires O(N) extra storage, N denoting the array size which may be quite expensive. Allocating and de-allocating the extra space used for merge sort increases the running time of the algorithm. Comparing average complexity we find that both type of sorts have O(NlogN) average complexity but the constants differ. For arrays, merge sort loses due to the use of extra O(N) storage space.
        // Most practical implementations of Quick Sort use randomized version. The randomized version has expected time complexity of O(nLogn). The worst case is possible in randomized version also, but worst case doesn’t occur for a particular pattern (like sorted array) and randomized Quick Sort works well in practice.
        // Quick Sort is also a cache friendly sorting algorithm as it has good locality of reference when used for arrays.
        // Quick Sort is also tail recursive, therefore tail call optimizations is done.
        const array = [5, 3, 1, 6, 4, 2];
        const kToFind = 4;

        const swap = function (array, i, j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };

        const getPartition = function (nums, left, right) {
            const pivotElement = nums[right];
            let partitionIdx = left;

            for (let j = left; j < right; j++) {
                if (nums[j] <= pivotElement) {
                    swap(nums, partitionIdx, j);
                    partitionIdx++;
                }
            }
            swap(nums, partitionIdx, right)

            return partitionIdx;
        };

        const quickSort = function (nums, left, right) {
            if (left < right) {
                const partitionIndex = getPartition(nums, left, right);

                quickSort(nums, left, partitionIndex - 1);
                quickSort(nums, partitionIndex + 1, right);
            }
        };

        var findKthLargest = function (nums, k) {
            const indexToFind = nums.length - k;
            quickSort(nums, 0, nums.length - 1);
            return nums[indexToFind]
        };

        console.log(findKthLargest(array, kToFind))

    }

    quickSelectElement() {
        const array = [5, 3, 1, 6, 4, 2];
        const kToFind = 4;

        const swap = function (array, i, j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        };

        const getPartition = function (nums, left, right) {
            let i = left;

            for (let j = left; j <= right; j++) {
                if (nums[j] <= nums[right]) {
                    swap(nums, i, j);
                    i++;
                }
            }
            return i - 1;
        };

        const quickSelect = function (nums, left, right, indexToFind) {
            const partitionIndex = getPartition(nums, left, right);

            if (partitionIndex === indexToFind) {
                return nums[partitionIndex];
            } else if (indexToFind < partitionIndex) {
                return quickSelect(nums, left, partitionIndex - 1, indexToFind);
            } else {
                return quickSelect(nums, partitionIndex + 1, right, indexToFind);
            }
        };

        var findKthLargest = function (nums, k) {
            const indexToFind = nums.length - k;

            return quickSelect(nums, 0, nums.length - 1, indexToFind);
        };

        console.log(findKthLargest(array, kToFind))
    }
    heapSort() {

    }

    inversionCount() {

    }

}