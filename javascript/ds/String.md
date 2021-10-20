
### Strings 

* Reverse words in a given string 

    - S = i.like.this.program.very.much
    - Output: much.very.program.this.like.i
    - Explanation: After reversing the whole
        string(not individual words), the input
        string becomes
        much.very.program.this.like.i

    - Expected Time Complexity: O(|S|)
    - Expected Auxiliary Space: O(|S|)

* Permutations of a given string

    - ABC
    - ABSG
    - Output:
        - ABC ACB BAC BCA CAB CBA 
        - ABGS ABSG AGBS AGSB ASBG ASGB BAGS BASG BGAS BGSA BSAG BSGA GABS GASB GBAS GBSA GSAB GSBA SABG SAGB SBAG SBGA SGAB SGBA 
    - Approach
        - ![string_permutation_backtracking](../../images/string_permutation_backtracking.png)
        - Time Complexity: O(n*n!) Note that there are n! permutations and it requires O(n) time to print a a permutation.
        -  ```
           private void permute(String str, int l, int r) 
            { 
                if (l == r) 
                    System.out.println(str); 
                else
                { 
                    for (int i = l; i <= r; i++) 
                    { 
                        str = swap(str,l,i); 
                        permute(str, l+1, r); 
                        str = swap(str,l,i); 
                    } 
                } 
            } 
               
* Remove all adjacent duplicates 

    - Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates.
        - Example
            - Input: azxxzy 
            - Output: ay 
            - First “azxxzy” is reduced to “azzy”. 
            The string “azzy” contains duplicates, 
            so it is further reduced to “ay”.
        - Can be done either with signature match or stack approach

* Check if string is rotated by two places

    - Given two strings a and b. The task is to find if the string 'b' can be obtained by rotating another string 'a' by exactly 2 places.

    - Input:
    - a = amazon
    - b = azonam
    - Output: 1
    - Explanation: amazon can be rotated anti
        clockwise by two places, which will make
        it as azonam.

* Roman Number to Integer 
    - Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
        - I 1
        - V 5
        - X 10
        - L 50
        - C 100
        - D 500
        - M 1000

        - Expected Time Complexity: O(|S|), |S| = length of string S.
        - Expected Auxiliary Space: O(1)
        - Approach: 
            - Algorithm to convert Roman Numerals to Integer Number:  
            - Split the Roman Numeral string into Roman Symbols (character).
            - Convert each symbol of Roman Numerals into the value it represents.
            - Take symbol one by one from starting from index 0: 
                - If current value of symbol is greater than or equal to the value of next symbol, then add this value to the running total.
                - else subtract this value by adding the value of next symbol to the running total.

* Longest Common Prefix using Word by Word Matching
    - Given a set of strings, find the longest common prefix
    - ```
        // @TODO: Can be improved
        // A Utility Function to find the common prefix between  
        // strings- str1 and str2  
            static String commonPrefixUtil(String str1, String str2) { 
                String result = ""; 
                int n1 = str1.length(), n2 = str2.length(); 
        
                // Compare str1 and str2  
                for (int i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) { 
                    if (str1.charAt(i) != str2.charAt(j)) { 
                        break; 
                    } 
                    result += str1.charAt(i); 
                } 
        
                return (result); 
            } 
    - Examples
        - Input  : {"apple", "ape", "april"}
        - Output : "ap"

* Form a palindrome 
    - Given a string, find the minimum number of characters to be inserted to convert it to palindrome.
    - For Example:
        - ab: Number of insertions required is 1. bab or aba
        - aa: Number of insertions required is 0. aa
        - abcd: Number of insertions required is 3. dcbabcd
    - Approach:
        - ```
            static int findMinInsertions(char str[], int l,
                                            int h)
            {
                // Base Cases
                if (l > h) return Integer.MAX_VALUE;
                if (l == h) return 0;
                if (l == h - 1) return (str[l] == str[h])? 0 : 1;
        
                // Check if the first and last characters
                // are same. On the basis of the  comparison
                // result, decide which subrpoblem(s) to call
                return (str[l] == str[h])?
                    findMinInsertions(str, l + 1, h - 1):
                    (Integer.min(findMinInsertions(str, l, h - 1),
                    findMinInsertions(str, l + 1, h)) + 1);
            }
        - Use dynamic programming as above solution contains overlap cases


* Longest Palindrome in a String 

    - Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. More formally, S is palindrome if reverse(S) = S. Incase of conflict, return the substring which occurs first ( with the least starting index ).

    - NOTE: Required Time Complexity O(n2).
    
    - Input:
        - The first line of input consists number of the testcases. The following T lines consist of a string each.
    
    - Output:
        - In each separate line print the longest palindrome of the string given in the respective test case.

    - Approach

       * Dynamic Programming. 
            * Approach: The time complexity can be reduced by storing results of sub-problems. The idea is similar to this post.  

            * Maintain a boolean table[n][n] that is filled in bottom up manner.
            * The value of table[i][j] is true, if the substring is palindrome, otherwise false.
            * To calculate table[i][j], check the value of table[i+1][j-1], if the value is true and str[i] is same as str[j], then we make table[i][j] true.
            * Otherwise, the value of table[i][j] is made false.
            * We have to fill table previously for substring of length = 1 and length =2 because 
            as we are finding , if table[i+1][j-1] is true or false , so in case of 
            (i) length == 1 , lets say i=2 , j=2 and i+1,j-1 doesn’t lies between [i , j] 
            (ii) length == 2 ,lets say i=2 , j=3 and i+1,j-1 again doesn’t lies between [i , j].
            * ![DP](../../images/dynamicprogramming_longestpalindrome.png)

