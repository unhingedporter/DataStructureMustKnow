// do not look into it :(

class CoinChange {
    constructor() {}

    // [2,3,5] // 7 
    findPathAndCount(arr_coins, num_coins, sum, amountSoFar){



    }

    findPossibleCount(arr_coins, num_coins, sum) {
        if (sum === 0) {
            return 1;
        }

        if (num_coins === 0) {
            return 0;
        }
        // console.log(`1. The number of coins reached ${result}`);

        var result = this.findPossibleCount(arr_coins, num_coins - 1, sum);
        console.log(`2. The number of coins reached ${result}`);
        if (arr_coins[num_coins - 1] <= sum) {
            result += this.findPossibleCount(
                arr_coins,
                num_coins,
                sum - arr_coins[num_coins - 1]
            );
        }
        return result;
    }
}

var cc = new CoinChange();

console.log(cc.findPossibleCount([5, 3, 6, 2], 50, 10));

// 5,5
// 3,2,3,2
// 6,2,2
// 5,3,2

// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10
// 5, 3, 6, 2 | xx | 10


var coinChange = function(coins, amount) {
    
    var res = 0;
    var countCoinChange = function(coins, amount, n){
    
        if(amount === 0){
            return 1;
        }
        
        if(n === 0){
            return 0;
        }

        res = res + countCoinChange(coins, amount, n - 1);

        if(coins[n - 1]<= amount){
            res = res + countCoinChange(coins, amount - coins[n], n );
        }
        
        return res ;

    }
    
    countCoinChange(coins, amount, coins.length - 1);
    return res=== 0 ? -1: res;    
};


 
var coinChange = function(coins, amount) {
    
    coins = coins.sort((p,q)=> p - q);
    var len = coins.length;
    var dp = [];
    dp.length = amount + 1;
    dp.fill(+Infinity);
    dp[0] = 0;
    
    for(var i = 1; i <= amount; i++){
        for(var j =0; j < len; j++){
            if(coins[j] > i) {
                continue;
            }
            dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
        }
    }
    
    console.log(dp);
    return dp[amount] === +Infinity ? -1 : dp[amount];   
    
}
coinChange([5, 3, 6, 2], 10)

var coinChange = function(coins, amount) {
    
    coins = coins.sort((p,q)=> p - q);
    var len = coins.length;
    var dp = [];
    dp.length = amount + 1;
    dp.fill(+Infinity);
    dp[0] = 0;
    
    for(var i = 1; i <= amount; i++){
        for(var j =0; j < len; j++){
            if(coins[j] > i) {
                continue;
            }
            dp[i] = Math.min(dp[i], 1 +  dp[i - coins[j]]);
        }
    }
    
    console.log(dp);
    return dp[amount] === +Infinity ? -1 : dp[amount];   
    
}
coinChange([5, 3, 6, 2], 10)