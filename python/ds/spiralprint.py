# Python3 program to print
# given matrix in spiral form


def spiralPrint(m, n, a):
    start_row_index = 0
    start_col_index = 0
    l = 0

    ''' start_row_index - starting row index 
		m - ending row index 
		start_col_index - starting column index 
		n - ending column index 
		i - iterator '''

    while (start_row_index < m and start_col_index < n):

        # Print the first row from
        # the remaining rows
        for i in range(start_col_index, n):
            print(a[start_row_index][i], end=" ")

        start_row_index += 1

        # Print the last column from
        # the remaining columns
        for i in range(start_row_index, m):
            print(a[i][n - 1], end=" ")

        n -= 1

        # Print the last row from
        # the remaining rows
        if (start_row_index < m):

            for i in range(n - 1, (start_col_index - 1), -1):
                print(a[m - 1][i], end=" ")

            m -= 1

        # Print the first column from
        # the remaining columns
        if (start_col_index < n):
            for i in range(m - 1, start_row_index - 1, -1):
                print(a[i][start_col_index], end=" ")

            start_col_index += 1


# Driver Code
a = [[1, 2, 3, 4, 5, 6],
     [7, 8, 9, 10, 11, 12],
     [13, 14, 15, 16, 17, 18]]

R = 3
C = 6
spiralPrint(R, C, a)
