/**

Sort an array according to the order defined by another array


Given two arrays A1[] and A2[], sort A1 in such a way that the relative order among the elements will be same as those are in A2. For the elements not present in A2, append them at last in sorted order. 
Example: 

Input: A1[] = {2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8}
       A2[] = {2, 1, 8, 3}
Output: A1[] = {2, 2, 1, 1, 8, 8, 3, 5, 6, 7, 9}

The code should handle all cases like the number of elements in A2[] may be more or less compared to A1[]. A2[] may have some elements which may not be there in A1[] and vice versa is also possible.



Method 1(Using Sorting and Binary Search)
Let the size of A1[] be m and the size of A2[] be n.

Create a temporary array temp of size m and copy the contents of A1[] to it.
Create another array visited[] and initialize all entries in it as false.visited[] is used to mark those elements in temp[] which are copied to A1[].
Sort temp[]
Initialize the output index ind as 0.
Do following
for every element of A2[i] in A2[]
Binary search
for all occurrences of A2[i] in temp[],
    if present then copy all occurrences to A1[ind] and increment ind.Also mark the copied elements visited[]
Copy all unvisited elements from temp[] to A1[]

Time complexity: The steps 1 and 2 require O(m) time.Step 3 requires O(M * Log M) time.Step 5 requires O(N Log M) time.Therefore overall time complexity is O(M Log M + N Log M).


Method 3(Use Hashing)


Loop through A1[], store the count of every number in a HashMap(key: number, value: count of number)
Loop through A2[], check
if it is present in HashMap,
    if so, put in output array that many times and remove the number from HashMap.
Sort the rest of the numbers present in HashMap and put in the output array.

**/