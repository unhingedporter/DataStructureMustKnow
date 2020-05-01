class DynamicProgram:

    def __init__(self):
        self.memo = []
        self.lcs = []

    # Simple recursion
    def fib(self, n):
        # Exponential n
        if n == 0 or n == 1:
            return n
        else:
            return self.fib(n - 1) + self.fib(n - 2)

            #                    4
            #
            #           /                  \
            #       3            +            2
            #       /                         \
            #   2       +     1             1 + 0
            #   /              |            |   |
            # 1  + 0            0           1    0
            # |     |
            # 1     0

    # DP Tabular based  problem bottom up
    # don't use recursion
    def fib(self, n):
        # Exponential n
        self.memo = []
        self.memo.append(0)
        self.memo.append(1)
        self.memo[0] = 0
        self.memo[1] = 1
        # It should be faster as there is no overhead of recursion
        for i in range(2, n):
            self.memo.append(i)
            self.memo[i] = self.memo[i - 1] + self.memo[i - 2]
        return self.memo[n - 1]

    # DP Memo bases problem top - down
    def fib_memo(self, n):
        # Exponential n
        # It is easier to write
        if n in self.memo:
            return self.memo[n]
        else:
            if n == 0 or n == 1:
                return n
            else:
                resp = self.fib_memo(n - 1) + self.fib_memo(n - 2)
                self.memo.append(resp)

    def find_lcs_memo(self, str1, str2, m, n):
        rows, cols = (m, n)
        self.lcs = [[-1] * cols] * rows
        return self.longest_common_subsequence_memo(str1, str2, m - 1, n - 1)

    def find_lcs_tab(self, str1, str2):
        self.lcs = [[0] * len(str2)] * len(str1)
        return self.longest_common_subsequence_tabulation(str1, str2)

    def longest_common_subsequence_tabulation(self, str1, str2):
        for m in range(1, len(str1)):
            for n in range(1, len(str2)):
                if str1[m - 1] == str2[n - 1]:
                    self.lcs[m][n] = 1 + self.lcs[m - 1][n - 1]
                else:
                    self.lcs[m][n] = max(self.lcs[m - 1][n], self.lcs[m][n - 1])
        return self.lcs[len(str1) - 1][len(str2) - 1]

    # DP Memo
    def longest_common_subsequence_memo(self, str1, str2, m, n):

        # str1 = 'cda' 'aaaaaaaaaaaaaaaabcghhhhj'
        # '', 'c','cd','ca','da','cda' 'aaaaaaaaabcyyyy'
        # str2 = 'dba'

        if m <= 0 or n <= 0:
            return 0
        if self.lcs[m][n] != -1:
            return self.lcs[m][n]
        else:
            if str1[m - 1] == str2[n - 1]:
                return 1 + self.longest_common_subsequence(str1, str2, m - 1, n - 1)
            else:
                self.lcs[m][n] = max(self.longest_common_subsequence(str1, str2, m, n - 1),
                                     self.longest_common_subsequence(str1, str2, m - 1, n))
                return self.lcs[m][n]

    def longest_common_subsequence(self, str1, str2, m, n):

        if m <= 0 or n <= 0:
            return 0

        if str1[m - 1] == str2[n - 1]:
            return 1 + self.longest_common_subsequence(str1, str2, m - 1, n - 1)
        else:
            return max(self.longest_common_subsequence(str1, str2, m, n - 1),
                       self.longest_common_subsequence(str1, str2, m - 1, n))


if __name__ == '__main__':
    # print(f'DynamicProgram fib {0} , {1}', DynamicProgram().fib(5),  DynamicProgram().fib_memo(5))
    str1 = 'aaaaaaaaaaaaaaaabcghhhhj'
    str2 = 'aaaaaaaaabcyyyy'
    # print(f'DynamicProgram longest common subsequence {DynamicProgram().longest_common_subsequence(str1,str2 ,len(str1), len(str2))}')
    # print(f'DynamicProgram longest common subsequence {DynamicProgram().find_lcs_memo(str1,str2 ,len(str1), len(str2))}')
    print(f'DynamicProgram longest common subsequence {DynamicProgram().find_lcs_tab(str1, str2)}')
