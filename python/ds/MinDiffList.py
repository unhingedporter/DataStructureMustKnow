
class MinDiffList:

    # def __init__(self):
    #     self.diff = sys.maxint

    def findMinDiff(self, arr):
        arr.sort()
        self.diff = arr[len(arr) - 1]

        for iter in range(len(arr)):
            adjacentDiff = abs(arr[iter+1]) - abs(arr[iter])
            if adjacentDiff < self.diff:
                self.diff = adjacentDiff

            return adjacentDiff


findDiff = MinDiffList()
print(findDiff.findMinDiff([1, 2, 3, 4, 5, 888, 100, 120, -5, 0.8]))
