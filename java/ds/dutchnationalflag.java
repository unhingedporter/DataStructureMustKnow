
// Java program to sort an array of 0, 1 and 2 
import java.io.*;

class dutchnationalflag {

    // Sort the input array, the array is assumed to
    // have values in {0, 1, 2}
    static void sort012(int a[], int arr_size) {
        int lo = 0;
        int hi = arr_size - 1;
        int mid = 0, temp = 0;
        while (mid <= hi) {
            switch (a[mid]) {
                case 0: {
                    System.out.println("0 Swapping low with mid" + lo + " m " + mid);
                    temp = a[lo];
                    a[lo] = a[mid];
                    a[mid] = temp;
                    lo++;
                    mid++;
                    break;
                }
                case 1:
                    System.out.println("1 Adding mid" + mid);
                    mid++;
                    break;
                case 2: {
                    System.out.println("2 Swapping mid with high" + mid + " h " + hi);
                    temp = a[mid];
                    a[mid] = a[hi];
                    a[hi] = temp;
                    hi--;
                    break;
                }
            }
        }
    }

    /* Utility function to print array arr[] */
    static void printArray(int arr[], int arr_size) {

        for (int i = 0; i < arr_size; i++)
            System.out.print(arr[i] + " ");
        System.out.println("");
    }

    /* Driver function to check for above functions */
    public static void main(String[] args) {
        int arr[] = { 1, 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1, 2 };
        int arr_size = arr.length;
        sort012(arr, arr_size);
        System.out.println("Array after seggregation ");
        printArray(arr, arr_size);
    }
}
