# Python3 program to find largest 
# pair sum in a given array 

# Function to return largest pair 
# sum. Assumes that there are 
# at-least two elements in arr[] 
def findLargestSumPair(arr, n):
    # Initialize first and second
    # largest element
    if arr[0] > arr[1]:
        first = arr[0]
        second = arr[1]

    else:
        first = arr[1]
        second = arr[0]

    # Traverse remaining array and
    # find first and second largest
    # elements in overall array
    for i in range(2, n):

        # If current element is greater
        # than first then update both
        # first and second
        if arr[i] > first:
            second = first
            first = arr[i]

        # If arr[i] is in between first
        # and second then update second
        elif arr[i] > second and arr[i] != first:
            second = arr[i]

    return (first + second)


# Driver program to test above function */ 
arr = [12, 34, 10, 6, 40]
n = len(arr)
print("Max Pair Sum is",
      findLargestSumPair(arr, n))

# This code is contributed by Smitha Dinesh Semwal
