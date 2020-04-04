// Less probability

/*
Count number of squares in a rectangle

Given a m x n rectangle, how many squares are there in it?


${number of squares in matrix.png}

Let us first solve this problem for m = n, i.e., for a square:

For m = n = 1, output: 1

For m = n = 2, output: 4 + 1 [4 of size 1×1 + 1 of size 2×2]

For m = n = 3, output: 9 + 4 + 1 [4 of size 1×1 + 4 of size 2×2 + 1 of size 3×3]

For m = n = 4, output 16 + 9 + 4 + 1 [16 of size 1×1 + 9 of size 2×2 + 4 of size 3×3 + 1 of size 4×4]

In general, it seems to be n^2 + (n-1)^2 + … 1 = n(n+1)(2n+1)/6

Let us solve this problem when m may not be equal to n:

Let us assume that m <= n

From above explanation, we know that number of squares in a m x m matrix is m(m+1)(2m+1)/6

What happens when we add a column, i.e., what is the number of squares in m x (m+1) matrix?

When we add a column, number of squares increased is m + (m-1) + … + 3 + 2 + 1
[m squares of size 1×1 + (m-1) squares of size 2×2 + … + 1 square of size m x m]

Which is equal to m(m+1)/2

So when we add (n-m) columns, total number of squares increased is (n-m)*m(m+1)/2.

So total number of squares is m(m+1)(2m+1)/6 + (n-m)*m(m+1)/2.

Using same logic we can prove when n <= m.


*/

// Java program to count squares 
// in a rectangle of size m x n 

class countSquares {
    // Returns count of all squares
    // in a rectangle of size m x n
    static int countSquares(int m, int n) {
        // If n is smaller, swap m and n
        if (n < m) {
            // swap(m, n)
            int temp = m;
            m = n;
            n = temp;
        }

        // Now n is greater dimension,
        // apply formula
        return m * (m + 1) * (2 * m + 1) / 6 + (n - m) * m * (m + 1) / 2;
    }

    // Driver Code
    public static void main(String[] args) {
        int m = 4, n = 3;
        System.out.println("Count of squares is " + countSquares(m, n));
    }
}
