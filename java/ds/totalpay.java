/*
Minimize the cost of buying the Objects

Given ‘T’ which represents the total number of items a person has. ‘P’ represents the price of each item and ‘M’ represents the number of free items he gets free if he buys ‘N’ items. The task is to find the total amount the person has to pay to get T items.

Examples:

    Input: T = 13, P = 10, N = 3, M = 1
    Output: Amount = 100
    Explaination:
    Total number of fruit bottle a person has = 13
    Offer available is buy 3 get 1 free
    So, person has to buy 9 Fruit juice bottle to get 3 fruit juice bottle for free.
    Now, since the total number of the bottle is 13 so the person buys 1 bottle at P price.


    The total amount the person has to pay = (9 + 1) * 10 i.e 100

    Input: T = 12, P = 8, N = 2, M = 1
    Output: Amount = 64 

Recommended: Please try your approach on {IDE} first, before moving on to the solution.

Approach:

    First of all, we should try to get free items as much as possible, so this can reduce the cost.
    Divide the total number of items with the sum of N and M because we get M free items when we buy atleast N items.
    Then calculate the total number of items for which you have to pay for by subtracting the free items from the total number of items
    Finally the price can be calculated by multiplying the cost of one item with the total number of items.

Below is the implementation of the above approach:

*/

// Java implementation of the approach 
class GFG {

    // Function that will calculate the price
    static int totalPay(int totalItems, int priceOfOneItem, int N, int M) {
        int freeItems = 0, actual = 0;

        // Calculate the number of items
        // we can get for free
        freeItems = totalItems / (N + M);

        // Calculate the number of items
        // we will have to pay the price for
        actual = totalItems - freeItems;

        // Calculate the price
        int amount = actual * priceOfOneItem;

        return amount;
    }

    // Driver code
    public static void main(String[] args) {
        int T = 12, P = 8;
        int N = 2, M = 1;

        // Calling function
        System.out.print("Amount = " + totalPay(T, P, N, M));
    }
}

// This code is contributed by 29AjayKumar
