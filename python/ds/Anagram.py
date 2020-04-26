# Python program to check whether two strings are
# anagrams of each other

# function to check whether two strings are anagram
# of each other


def areAnagram(str1, str2):
    # Get lengths of both strings
    n1 = len(str1)
    n2 = len(str2)

    # If lenght of both strings is not same, then
    # they cannot be anagram
    if n1 != n2:
        return 0

    # Sort both strings
    str1 = sorted(str1)
    str2 = sorted(str2)

    # Compare sorted strings
    for i in range(0, n1):
        if str1[i] != str2[i]:
            return False

    return True


str1 = "test"
str2 = "ttew"
if areAnagram(str1, str2):
    print("The two strings are anagram of each other")
else:
    print("The two strings are not anagram of each other")

##################################################################################

# Python program to check if two strings are anagrams of
# each other
NO_OF_CHARS = 256


# Function to check whether two strings are anagram of
# each other


def areAnagram(str1, str2):
    # Create two count arrays and initialize all values as 0
    count1 = [0] * NO_OF_CHARS
    count2 = [0] * NO_OF_CHARS

    # For each character in input strings, increment count
    # in the corresponding count array
    for i in str1:
        count1[ord(i)] += 1

    for i in str2:
        count2[ord(i)] += 1

    # If both strings are of different length. Removing this
    # condition will make the program fail for strings like
    # "aaca" and "aca"
    if len(str1) != len(str2):
        return 0

    # Compare count arrays
    # Xrange
    # The variable storing the range created by range() takes more memory as compared to variable storing the range using xrange(). The basic reason for this is the return type of range() is list and xrange() is xrange() object.
    # The function returns the generator object that can be used to display numbers only by looping. Only particular range is displayed on demand and hence called “lazy evaluation“.
    for i in xrange(NO_OF_CHARS):
        if count1[i] != count2[i]:
            return False

    return True


# https://medium.com/human-in-a-machine-world/quicksort-the-best-sorting-algorithm-6ab461b5a9d0

# Driver program to test the above functions
str1 = "Debit card"
str2 = "bad credit"
if areAnagram(str1, str2):
    print
    "The two strings are anagram of each other"
else:
    print
    "The two strings are not anagram of each other"


# Python program for implementation of Quicksort Sort

# This function takes last element as pivot, places
# the pivot element at its correct position in sorted
# array, and places all smaller (smaller than pivot)
# to left of pivot and all greater elements to right
# of pivot
def partition(arr, low, high):
    i = (low - 1)  # index of smaller element
    pivot = arr[high]  # pivot

    for j in range(low, high):

        # If current element is smaller than the pivot
        if arr[j] < pivot:
            # increment index of smaller element
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return (i + 1)


# The main function that implements QuickSort
# arr[] --> Array to be sorted,
# low --> Starting index,
# high --> Ending index

# Function to do Quick sort


def quickSort(arr, low, high):
    if low < high:
        # pi is partitioning index, arr[p] is now
        # at right place
        pi = partition(arr, low, high)

        # Separately sort elements before
        # partition and after partition
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)


# Driver code to test above
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr, 0, n - 1)
print("Sorted array is:")
for i in range(n):
    print("%d" % arr[i]),
