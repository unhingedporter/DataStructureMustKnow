# from math import comb
# import operator as op
# from functools import reduce
#
#
# def ncr(n, r):
#     r = min(r, n-r)
#     numer = reduce(op.mul, range(n, n-r, -1), 1)
#     denom = reduce(op.mul, range(1, r+1), 1)
#     return numer / denom
#
# sum = 0
# for i in range(0, 5):
#     if (i <= 2):
#         sum += i
#     else:
#         for j in range(0,i):
#             sum +=ncr(i,j)
#
# print(sum);

def countFriendsPairings(n):
    dp = [0 for i in range(n + 1)]

    for i in range(n + 1):
        if (i <= 2):
            dp[i] = i
        else:
            dp[i] = dp[i - 1] + (i - 1) * dp[i - 2]
        print(f' {i}   {dp[i]} ')

    return dp[n]


n = 6
print(countFriendsPairings(n))
