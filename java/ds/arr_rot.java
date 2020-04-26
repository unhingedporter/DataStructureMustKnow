// JAVA implementation of left rotation 
// of an array K number of times 

import java.io.*;
import java.util.*;

class arr_rot {
    // Function to leftRotate array multiple
    // times
    static void leftRotate(int arr[], int n, int k) {
		/* To get the starting point of 
		rotated array */
        int mod = k % n;

        // Prints the rotated array from
        // start position
        for (int i = 0; i < n; ++i)
            System.out.print(arr[(i + mod) % n] + " ");

        System.out.println();
    }

    // Driver program
    public static void main(String[] args) {
        int arr[] = {1, 3, 5, 7, 9};
        int n = arr.length;

        int k = 2;
        leftRotate(arr, n, k);

        k = 3;
        leftRotate(arr, n, k);

        k = 4;
        leftRotate(arr, n, k);
    }
}

//Array rotation in java using reverse algorithm


// Java program for reversal algorithm of array rotation 
import java.io.*;

class LeftRotate {
    /* Function to left rotate arr[] of size n by d */
    static void leftRotate(int arr[], int d) {

        if (d == 0)
            return;
        int n = arr.length;
        rvereseArray(arr, 0, d - 1);
        rvereseArray(arr, d, n - 1);
        rvereseArray(arr, 0, n - 1);
    }

    /*Function to reverse arr[] from index start to end*/
    static void rvereseArray(int arr[], int start, int end) {
        int temp;
        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    /*UTILITY FUNCTIONS*/
    /* function to print an array */
    static void printArray(int arr[]) {
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
    }

    /* Driver program to test above functions */
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        int n = arr.length;
        int d = 2;

        // in case the rotating factor is
        // greater than array length
        d = d % n;
        leftRotate(arr, d); // Rotate array by d
        printArray(arr);
    }
}
/*This code is contributed by Devesh Agrawal*/
