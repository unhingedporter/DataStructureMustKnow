
## Array

* Rearrange an array in maximum minimum form   
    - Given a sorted array of positive integers, rearrange the array alternately i.e first element should be maximum value, second minimum value, third second max, fourth second min and so on. 

    -   Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
        Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
        Input: arr[] = {1, 2, 3, 4, 5, 6} 
        Output: arr[] = {6, 1, 5, 2, 4, 3} 

        Expected time complexity: O(n)
    
        The idea is to use an auxiliary array. We maintain two pointers one to leftmost or smallest element and other to rightmost or largest element. We more both pointers toward each other and alternatively copy elements at these pointers to an auxiliary array. Finally, we copy auxiliary array back to the original array.
        Below image is a dry run of the above approach: 
    
    -  Solution that requires O(n) time and O(1) extra space is discussed. The idea is to use multiplication and modular trick to store two elements at an index.
        * Works only for positive integers**
        * even index : remaining maximum element.
        * odd index  : remaining minimum element.
        
        * max_index : Index of remaining maximum element
                    (Moves from right to left)
        * min_index : Index of remaining minimum element
                    (Moves from left to right)

        Initialize: max_index = 'n-1'
                    min_index = 0  
                    max_element = arr[max_index] + 1 //can be any element which is more than the maximum value in array

        * For i = 0 to n-1            
            * If 'i' is even
                - arr[i] += arr[max_index] % max_element * max_element 
                - max_index--     
            * ELSE // if 'i' is odd
                - arr[i] +=  arr[min_index] % max_element * max_element
                - min_index++

* Given an array of integers. Find the Inversion Count in the array. 
    - Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. 
        Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

    - Approach: Suppose the number of inversions in the left half and right half of the array (let be inv1 and inv2), what kinds of inversions are not accounted for in Inv1 + Inv2? The answer is - the inversions that need to be counted during the merge step. Therefore, to get a number of inversions, that needs to be added a number of inversions in the left subarray, right subarray, and merge().

    - How to get the number of inversions in merge()? 
    In merge process, let i is used for indexing left sub-array and j for right sub-array. At any step in merge(), if a[i] is greater than a[j], then there are (mid – i) inversions. because left and right subarrays are sorted, so all the remaining elements in left-subarray (a[i+1], a[i+2] … a[mid]) will be greater than a[j]

    - Algorithm: 

        * The idea is similar to merge sort, divide the array into two equal or almost equal halves in each step until the base case is reached.
        * Create a function merge that counts the number of inversions when two halves of the array are merged, create two indices i and j, i is the index for first half   and j is an index of the second half. if a[i] is greater than a[j], then there are (mid – i) inversions. because left and right subarrays are sorted, so all the  remaining elements in left-subarray (a[i+1], a[i+2] … a[mid]) will be greater than a[j].
        * Create a recursive function to divide the array into halves and find the answer by summing the number of inversions is the first half, number of inversion in the second half and the number of inversions by merging the two.
        * The base case of recursion is when there is only one element in the given half.
        * Print the answer

* Given an array A of N positive numbers. The task is to find the first Equilibium Point in the array. 
    * Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
        * Expected Time Complexity: O(N)
        * Expected Auxiliary Space: O(1)
    
    Algorithm:
        - Go with  prefix sum
        -   1) Initialize leftsum  as 0
            2) Get the total sum of the array as sum
            3) Iterate through the array and for each index i, do following.
                a)  Update sum to get the right sum.  
                    sum = sum - arr[i] 
                // sum is now right sum
                b) If leftsum is equal to sum, then return current index. 
                // update leftsum for next iteration.
                c) leftsum = leftsum + arr[i]
            4) return -1 
            // If we come out of loop without returning then
            // there is no equilibrium index


* Given an array A of positive integers. Your task is to find the leaders in the array. 
    * An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader. 
    * Input:
        - N = 6
        - A[] = {16,17,4,3,5,2}
        - Output: 17 5 2
        - Explanation: The first leader is 17 
        as it is greater than all the elements 
        to its right.  Similarly, the next 
        leader is 5. The right most element 
        is always a leader so it is also 
        included.

    Algorithm:
     * Scan all the elements from right to left in an array and keep track of maximum till now. When maximum changes its value, print it.
     * Use stack to store if the order is important

* Minimal platform
    - Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
    Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms,
      
* Pythogoreas triplet 
    - Given an array arr of N integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2, otherwise false.
        - Input:
        - N = 5
        - Arr[] = {3, 2, 4, 6, 5}
        - Output: Yes
        - Explanation: a=3, b=4, and c=5 forms a
    pythagorean triplet.

* Stock buy and sell
    - The cost of stock on each day is given in an array A[] of size N. Find all the days on which you buy and sell the stock so that in between those days your profit is maximum.
        - Input:
        - N = 7
        - A[] = {100,180,260,310,40,535,695}
        - Output: (0 3) (4 6)
        - Explanation: We can buy stock on day 
            0, and sell it on 3rd day, which will 
            give us maximum profit. Now, we buy 
            stock on day 4 and sell it on day 6.

* Element with left side smaller and right side greater

    - Given an unsorted array of size N. Find the first element in array such that all of its left elements are smaller and all right elements to it are greater than it.
      -  Note: Left and right side elements can be equal to required element. And extreme elements cannot be required element.
      -  Input:
        The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. First line of each test case contains an Integer N denoting size of array and the second line contains N space separated array elements.
        
      -  Output:
        For each test case, in a new line print the required element. If no such element present in array then print -1.
         
* Trapping rain water 
    
    - Given an array arr[] of N non-negative integers representing height of blocks at index i as Ai where the width of each block is 1. Compute how much water can be trapped in between blocks after raining.
    - Structure is like below:
        |  |
        |_|
        We can trap 2 units of water in the middle gap.