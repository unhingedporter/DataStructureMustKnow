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