var get_max_profit = function (stock_prices) {

    //  # Calculate the max profit

    if (stock_prices.length === 0 || !stock_prices) {
        return;
    }

    console.log(stock_prices);
    // find local maxima 
    var maximum_profits = 0; // Assume no losses :P 
    var start = 0;
    for (var i = 0; i < stock_prices.length; i++) {

        if (stock_prices[i] > stock_prices[i + 1]) {
            profit = stock_prices[i] - stock_prices[start];
            start = i + 1;
            if (profit > maximum_profits) {
                maximum_profits = profit;
            }
        }

        if (i === stock_prices.length - 1) {
            profit = stock_prices[i] - stock_prices[start];
            if (profit > maximum_profits) {
                maximum_profits = profit;
            }
        }
    }
    return maximum_profits;

}

console.log(get_max_profit([1, 2, 3, 4, 25, 55, 2, 3, 4, 101]));