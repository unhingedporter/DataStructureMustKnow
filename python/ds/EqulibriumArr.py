# no need of prefix sum


class ArrayOper:

    def __init__(self):
        pass

    def find_sub_array_zero_sum(self, arr):
        """
        Given an array of positive and negative numbers, find if there is a sub array (of size at-least one) with 0 sum.

        If we consider all prefix sums, we can
        notice that there is a subarray with 0
        sum when :
        1) Either a prefix sum repeats or
        2) Or prefix sum becomes 0.
        """

        prefix_sum = []
        sum = 0
        for iterator in range(len(arr)):
            sum += arr[iterator]
            if sum in prefix_sum:
                print(f'subarray exists with 0 sum at {iterator}')
            prefix_sum.append(sum)
            if 0 in prefix_sum:
                print(f'Sub array contains 0 at {iterator}')

    def check_equilibrium(self, arr):
        """
        Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes

        """
        total_sum = []
        sum = 0
        for elem in arr:
            sum += elem

        total_sum = sum
        sum = 0
        for iterator in range(len(arr)):
            sum += arr[iterator]
            if(total_sum - sum == 0):
                print(f'Equilibrium index exist at index{iterator} ')


if __name__ == '__main__':
    arr = [-7, 1, 5, 2, -4, 3, 0]
    print(f'The status of arr {arr} is {ArrayOper().check_equilibrium(arr)}')

    arr = [1, 4, -2, -2, 5, -4, 3, -5]
    ArrayOper().find_sub_array_zero_sum(arr)
