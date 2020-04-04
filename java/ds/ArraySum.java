import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class ArraySum {

    public void printDuplicatePairs(Integer[] arr, int sum) {

    }

    // returns true if there is triplet
    // with sum equal to 'sum' present
    // in A[]. Also, prints the triplet
    static boolean find3Numbers(int A[], int arr_size, int sum) {
        // Fix the first element as A[i]
        for (int i = 0; i < arr_size - 2; i++) {

            // Find pair in subarray A[i+1..n-1]
            // with sum equal to sum - A[i]
            HashSet<Integer> s = new HashSet<Integer>();
            int curr_sum = sum - A[i];
            for (int j = i + 1; j < arr_size; j++) {
                if (s.contains(curr_sum - A[j]) && curr_sum - A[j] != (int) s.toArray()[s.size() - 1]) {
                    System.out.printf("Triplet is %d, %d, %d", A[i], A[j], curr_sum - A[j]);
                    // return true;
                }
                s.add(A[j]);
            }
        }

        // If we reach here, then no triplet was found
        return false;
    }

    // This function assumes that there are at least
    // three elements in arr[].
    int maxTripletSum(int arr[], int n) {
        // Initialize Maximum, second maximum and third
        // maximum element

        int maxA = Integer.MIN_VALUE, maxB = Integer.MIN_VALUE, maxC = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {

            // Update Maximum, second maximum and third
            // maximum element
            if (arr[i] > maxA) {
                maxC = maxB;
                maxB = maxA;
                maxA = arr[i];
            }

            // Update second maximum and third maximum
            // element
            else if (arr[i] > maxB) {
                maxC = maxB;
                maxB = arr[i];
            }

            // Update third maximum element
            else if (arr[i] > maxC)
                maxC = arr[i];
        }

        return (maxA + maxB + maxC);
    }

    // https://medium.com/solvingalgo/solving-algorithmic-problems-find-a-duplicate-in-an-array-3d9edad5ad41#22de

    /*
     * 
     * 
     * We iterate over each element and mark its corresponding index by setting its
     * sign to minus. If we already marked it as negative, it means its index is a
     * duplicate.
     * 
     * Let’s see a concrete step by step example:
     * 
     * Input: [2, 3, 3, 1]* Index 0: Absolute value = 2 Put a minus sign to a[2] =>
     * [2, 3, -3, 1]* Index 1: Absolute value = 3 Put a minus sign to a[3] => [2, 3,
     * -3, -1]* Index 2: Absolute value = 3 As a[3] is already negative, it means 3
     * is a duplicate
     * 
     */

    // A generic implementation for printing duplicate elem in unsorted integer
    // array without range limitation

    public static void printDuplicateElem(int arr[]) {
        Set hs = new HashSet<Integer>();
        for (int i = 0; i < arr.length; i++) {
            if (hs.contains(arr[i])) {
                System.out.println("Duplicate value " + arr[i]);
            } else {
                hs.add(arr[i]);
            }
        }
    }

    public static void main(String args[]) {
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, 33, 35, 6, 1 };
        int sum = 12;
        printDuplicateElem(arr);
        find3Numbers(arr, arr.length, sum);

    }

}