# Python Program for recursive binary search in an array

# Returns index of x in arr if present, else -1

def binarySearch(arr, low, high, x):
    # Check base case
    if high >= low:
        # better than (low + high)/2 to prevent overflow condition
        mid = low + (high - low) / 2

        # If element is present at the middle itself
        if arr[mid] == x:
            return mid

        # If element is smaller than mid, then it
        # can only be present in left subarray
        elif arr[mid] > x:
            return binarySearch(arr, low, mid - 1, x)

        # Else the element can only be present
        # in right subarray
        else:
            return binarySearch(arr, mid + 1, high, x)

    else:
        # Element is not present in the array
        return -1


# Test array
arr = [2, 3, 4, 10, 40]
x = 10

# Function call
result = binarySearch(arr, 0, len(arr) - 1, x)

if result != -1:
    print
    "Element is present at index % d" % result
else:
    print
    "Element is not present in array"

# Some problem based on binary search 

#  Given a sorted array with repetition. Find leftmost element in O(log(n))

#  Given a sorted array with repetition. Find total number of occurrence of an element in O(log(n))

#  Easiest question: Given a sorted array(with 0's and 1's) with repetition. Find total number of occurrence of an element in O(log(n))

#  Given a sorted array(with infinite size**) with repetition. Find an element in O(log(n))

#  Given a sorted and rotated array. Find a given element in O(log(n))

#  Given a sorted and rotated array. Find maximum/minimum element in O(log(n))

#  Peak element: Not smaller than neighbour

#  Square root (floor of square root)