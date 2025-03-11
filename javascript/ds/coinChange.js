// 322. Coin Change
// Solved
// Medium
// Topics
// Companies

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.
var coinChange = function (coins, amount) {


    var output = [];

    if (amount === 0) {
        return 0;
    }

    var coinChangeHelper = (idx, coinCombinations, totalAmount, memo) => {

        coinCombinations = coinCombinations.sort();
        const sortedKey = coinCombinations.join(',');
        if (totalAmount === amount) {

            coinCombinations = sortedKey;

            if (!output.includes(coinCombinations)) {
                output.push(coinCombinations);
            }
            return;
        }
        if (totalAmount > amount) {
            return;
        }

        if (!!memo[idx] && !memo[idx][totalAmount] && typeof (memo[idx][totalAmount]) !== 'undefined') {
            return memo[idx][totalAmount][sortedKey];
        }
        for (var index = idx; index < coins.length; index++) {
            coinCombinations.push(coins[index]);
            coinChangeHelper(idx, coinCombinations, totalAmount + coins[index], memo)
            coinCombinations.pop();
        }

        if (!memo[idx]) {
            memo[idx] = [];
        }
        if (!memo[idx][totalAmount]) {
            memo[idx][totalAmount] = [];
        }

        memo[idx][totalAmount][sortedKey] = output;
        return memo[idx][totalAmount][sortedKey];
    }

    console.log(`Different path to the sum are ${output}`);
    output1 = coinChangeHelper(0, [], 0, []).map((elem) => { return elem.split(',') }).sort((a, b) => { return a.length - b.length });
    return output1.length === 0 ? -1 : output1[0].length;


};


var coinChange = function (coins, amount) {

    coins = coins.sort((p, q) => p - q);
    var len = coins.length;
    var dp = [];
    dp.length = amount + 1;
    dp.fill(+Infinity);
    dp[0] = 0;

    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < len; j++) {
            if (coins[j] > i) {
                continue;
            }
            dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
        }
    }

    return dp[amount] === +Infinity ? -1 : dp[amount];

}



function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;  

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            //  console.log(i, coin, dp[i])
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}


// Input
// coins =
// [1,2,5]
// amount =
// 11
// Stdout
// 1 1 1
// 2 1 2
// 3 1 3
// 4 1 4
// 5 1 5
// 6 1 6
// 7 1 7
// 8 1 8
// 9 1 9
// 10 1 10
// 11 1 11
// 2 2 1
// 3 2 2
// 4 2 2
// 5 2 3
// 6 2 3
// 7 2 4
// 8 2 4
// 9 2 5
// 10 2 5
// 11 2 6
// 5 5 1
// 6 5 2
// 7 5 2
// 8 5 3
// 9 5 3
// 10 5 2
// 11 5 3


// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1; 

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];  

            console.log(coin,i,dp[i])
        }
    }

    return dp[amount];
};

/*
212. Word Search II
Solved
Hard
Topics
Companies
Hint

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:

Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 */

// /**
//  * @param {character[][]} board
//  * @param {string[]} words
//  * @return {string[]}
//  */
// var findWords = function(board, words) {
//     var wordSearch =  function(board, word){
//           if (!board || board.length === 0) return false;

//     const rows = board.length, cols = board[0].length;
    
//     function dfs(r, c, index) {
//         // Base case: If we matched all letters in the word
//         if (index === word.length) return true;
        
//         // Boundary and character check
//         if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
//             return false;
//         }

//         // Temporarily mark the cell as visited
//         let temp = board[r][c];
//         board[r][c] = "#";

//         // Explore all 4 possible directions (Right, Down, Left, Up)
//         const found = dfs(r + 1, c, index + 1) ||
//                       dfs(r - 1, c, index + 1) ||
//                       dfs(r, c + 1, index + 1) ||
//                       dfs(r, c - 1, index + 1);

//         // Backtrack (restore the original value)
//         board[r][c] = temp;

//         return found;
//     }

//     // Start DFS from each matching cell
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (board[i][j] === word[0] && dfs(i, j, 0)) {
//                 return true;
//             }
//         }
//     }
   
//     return false; }

//     var output = []
//     for(var word of words){
//         if(wordSearch(board, word)){
//             output.push(word)
//         }
//     }

//     return output;
// };


class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

function buildTrie(words) {
    let root = new TrieNode();
    for (let word of words) {
        let node = root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;  // Store the word at the end node
    }
    return root;
}

var findWords = function(board, words) {
    let c = buildTrie(words);
    // console.log(root)
    let result = new Set();
    let rows = board.length, cols = board[0].length;

    function dfs(r, c, node) {
        let char = board[r][c];
        if (!node.children[char]) return;

        node = node.children[char];
        if (node.word) {
            result.add(node.word);
            node.word = null; // Remove word to avoid duplicate matches
        }

        // Mark cell as visited
        board[r][c] = "#";

        // Explore all 4 directions
        for (let [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            let newR = r + dr, newC = c + dc;
            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && board[newR][newC] !== "#") {
                dfs(newR, newC, node);
            }
        }

        // Restore cell
        board[r][c] = char;

        // Optimization: Remove leaf nodes from trie
        if (Object.keys(node.children).length === 0) {
            delete node.children[char];
        }
    }

    // Start DFS from each cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, root);
        }
    }

    return Array.from(result);
};

board =[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words =["oath","pea","eat","rain"]

findWords(board, words)


// insertion and search O(n)
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;  // Store word at the end node
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;  // Mark the end of a valid word
    }
}

var findWords = function(board, words) {
    let trie = new Trie();
    
    // Insert words into the Trie
    for (let word of words) {
        trie.insert(word);
    }
    
    let result = new Set();
    let rows = board.length, cols = board[0].length;

    function dfs(r, c, node) {
        let char = board[r][c];
        if (!node.children[char]) return;

        node = node.children[char];

        if (node.word) {
            result.add(node.word);
            node.word = null;  // Avoid duplicate matches
        }

        // Mark as visited
        board[r][c] = "#";

        // Explore all 4 directions
        for (let [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            let newR = r + dr, newC = c + dc;
            if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && board[newR][newC] !== "#") {
                dfs(newR, newC, node);
            }
        }

        // Restore the cell
        board[r][c] = char;

        // Optimization: Remove leaf nodes to reduce Trie size
        if (Object.keys(node.children).length === 0) {
            delete node.children[char];
        }
    }

    // Start DFS from each cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, trie.root);
        }
    }

    return Array.from(result);
};
