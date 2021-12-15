// Bell Numbers (Number of ways to Partition a Set)

// Given a set of n elements, find number of ways of partitioning it. 
// Examples: 
 

// Input:  n = 2
// Output: Number of ways = 2
// Explanation: Let the set be {1, 2}
//             { {1}, {2} } 
//             { {1, 2} }

// Input:  n = 3
// Output: Number of ways = 5
// Explanation: Let the set be {1, 2, 3}
//              { {1}, {2}, {3} }
//              { {1}, {2, 3} }
//              { {2}, {1, 3} }
//              { {3}, {1, 2} }
//              { {1, 2, 3} }. 

function bellNumber(n) {
    let bell = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
        bell[i] = new Array(n + 1);
    }
    bell[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        // Explicitly fill for j = 0
        bell[i][0] = bell[i - 1][i - 1];

        // Fill for remaining values of j
        for (let j = 1; j <= i; j++)
            bell[i][j] = bell[i - 1][j - 1] + bell[i][j - 1];
    }

    return bell[n][0];
}

for (let n = 0; n <= 5; n++)
    console.log("Bell Number  is " + bellNumber(n));
