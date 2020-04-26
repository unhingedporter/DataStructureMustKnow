# A binary search based program to find 
# the only missing number in a sorted 
# in a sorted array of distinct elements 
# within limited range 


# the logic behind the program is the value at index
# is equal to index. We can tweak it in a generic way?

def search(ar, size):
    low = 0
    high = size - 1
    mid = 0
    while high > low + 1:
        mid = (low + high) // 2  # integer division
        print(f' {ar[low]}, {low} ,{high}, {mid}')
        if (ar[low] - low) != (ar[mid] - mid):
            high = mid
        elif (ar[high] - high) != (ar[mid] - mid):
            low = mid
    return ar[mid] + 1


# Driver Code
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14]
n = len(arr)

print("Missing number:", search(arr, n))
