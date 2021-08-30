
## Array


* Advantages 

    - Random access 
    - Cache friendliness


    Insert -> At end o(1)
            At middle O(n)

    Delete -> At end o(1)
            At middle O(n)           

    Search -> Need more discussion

* Reverse an array

    while(low<high){
        swap(arr[low], arr[high])
        low++;
        high--;
    }

* Rotate an array 

    Time complexity : 0(n)
    Space Complexity: o(1)

    ar[] = [1,1,1,1,1,222,33,55]

    - First reverse element 0 to d-1
    - Reverse d to n
    - Reverse whole array to get rotate element

* Rearrange an array in maximum minimum form   
    - Given a sorted array of positive integers, rearrange the array alternately i.e first element should be maximum value, second minimum value, third second max, fourth second min and so on. 

    -   Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
        Output: arr[] = {7, 1, 6, 2, 5, 3, 4}
        Input: arr[] = {1, 2, 3, 4, 5, 6} 
        Output: arr[] = {6, 1, 5, 2, 4, 3} 

        Expected time complexity: O(n)
    
        The idea is to use an auxiliary array. We maintain two pointers one to leftmost or smallest element and other to rightmost or largest element. We move both pointers toward each other and alternatively copy elements at these pointers to an auxiliary array. Finally, we copy auxiliary array back to the original array. 
    
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

        - Count of Smaller Numbers After Self 
        Input [5,2,6,1]
                [5,7,13,14]
                [14,9,7,1]

        Output: [2,1,1,0]

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
        * Algorithm:
            - Either Go with  prefix sum
            - Initialize leftsum  as 0
            - Get the total sum of the array as sum
            - Iterate through the array and for each index i, do following.
                -  Update sum to get the right sum.  
                    sum = sum - arr[i] 
                // sum is now right sum
                - If leftsum is equal to sum, then return current index. 
                // update leftsum for next iteration.
                - leftsum = leftsum + arr[i]
            - return -1 
            // If we come out of loop without returning then
            // there is no equilibrium index
    * Naive approach: Calculate prefixSum and suffixSum. check for every element prefixSum[i-1] = suffixSum[i+1]


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
     * Time complexity: O(n)

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
            stock on day 4 and sell it on day 6. Find pair of local minima and local maxima. Add subtraction of these values

* Element with left side smaller and right side greater

    - Given an unsorted array of size N. Find the first element in array such that all of its left elements are smaller and all right elements to it are greater than it.
      -  Note: Left and right side elements can be equal to required element. And extreme elements cannot be required element.
       
    * An Efficient Solution can solve this problem in O(n) time using O(n) extra space. Below is the detailed solution.

        * Create two arrays leftMax[] and rightMin[].
        * Traverse input array from left to right and fill leftMax[] such that leftMax[i]   contains a maximum element from 0 to i-1 in the input array.
        * Traverse input array from right to left and fill rightMin[] such that rightMin[i] contains a minimum element from to n-1 to i+1 in the input array.
        * Traverse input array. For every element arr[i], check if arr[i] is greater than leftMax[i] and smaller than rightMin[i]. If yes, return i.


* Trapping rain water 
    
    - Given an array arr[] of N non-negative integers representing height of blocks at index i as Ai where the width of each block is 1. Compute how much water can be trapped in between blocks after raining.
    - Structure is like below: [3,0,1,2,5]
        |  |
        |_|
        We can trap 2 units of water in the middle gap.
        Output would be: 3+2+1 = 6
    - For every element, find max on left and right side. Take minimum of these two and subtract from the number itself. Add all these values to get cubic capacity
    - Time complexity O(n)
        - Create two array LeftMax and RightMax: 0(n)
        - Auxiliary space 0(n)

* Convert array into Zig-Zag fashion

    - Given an array Arr (distinct elements) of size N. Rearrange the elements of array in zig-zag fashion. The converted array should be in form a < b > c < d > e < f. The relative order of elements is same in the output i.e you have to iterate on the original array only.
    - Input:
        - N = 7
        - Arr[] = {4, 3, 7, 8, 6, 2, 1}
        - Output: 3 7 4 8 2 6 1
        - Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
    - Expected Time Complexity: O(N)
    - Expected Auxiliary Space: O(1)
    * Naive Solution
        - A Simple Solution is to first sort the array. After sorting, exclude the first element, swap the remaining elements in pairs. (i.e. keep arr[0] as it is, swap arr[1] and arr[2], swap arr[3] and arr[4], and so on). 
        - Time complexity: O(N log N) since we need to sort the array first.
    * Efficient Solution
        - Maintain a flag for representing which order(i.e. < or >) currently we need.
    If the current two elements are not in that order then swap those elements otherwise not.
    After sort 1,2,3,4,6,7,8
* Spirally traversing the matrix 
    - Given a matrix of size R*C. Traverse the matrix in spiral form.
        - Input:
        - R = 4, C = 4
        - matrix[][] = {{1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12},
                {13, 14, 15,16}}
        - Output: 
            - 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

* Largest Number formed from an Array 

    - Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.The result is going to be very large, hence return the result in the form of a string.
    - Input: 
    - N = 5
    - Arr[] = {3, 30, 34, 5, 9}
    - Output: 9534330
    - Explanation: Given numbers are {3, 30, 34,
5, 9}, the arrangement 9534330 gives the
largest value.

* Window Sliding Technique:

    - arr[] =  [1,8,30,-5,20,7]
    - Find sum of first window and preserve start and end index of the window
    - Add next element and remove one element
    - Time complexity: O(n)

    * Print M N-Fibonacci number

    * Count distinct element in every window of size k
        - Combination of window sliding technique and hashing
        
    * Given an unsorted array of non negative integers, find if there is a subarray with given
        // sum 

            
        There are two approaches to solve it
        a. Window Sliding Technique
        Sum every number till the time it either matches the given sum or exceeds it. In the latter case
        just delete some elements from starting
        Note: it will handle only non negative integers
            arr = [1,4,20,3,10,5]
            sum = 33
            o/p: yes

        b. Hashing: Check sum with prefix sum
        
* Prefix sum

    - Array [] = [2,8,3,9,6,5,4]
    - Queries 
        - getSum(0,2)  
        - getSum(1,4)
        - getSum(2,6)
        - Perform as efficient as (O(1)) it can be (if needed do precomputation)
    - Prefix sum array consist of array with summation from o to i th element at i th position
    - return l === 0? prefix_sum[r] : prefix_sum[r] - prefix_sum[l-1]

    - Given n ranges, find the maximum appearing element in their ranges

         Start   [1 , 2 , 5 , 15]
         End     [5 , 8,  7 , 18]

         Output: 5 

        - initialize an array of lenght max num with 0 
        - arr[l[i]]++
        - arr[r[i]+1]--
        - Calculate prefix sum
        - Maximum element in the array is the answer

    - Check if an array can be divided into three parts with equal sum

    - Check if there is a subarray with 0 sum

    - Find the longest subarray with equal 0s and 1s.


    


