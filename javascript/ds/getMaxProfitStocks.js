var get_max_profit = function(stock_prices) {

    //  # Calculate the max profit

    if (stock_prices.length === 0 || !stock_prices) {
        return;
    }

    console.log(stock_prices);
    // find local maxima 
    var maximum_profits = 0; // Assume no losses :P 
    var start = 0;
    for (var i = 0; i < stock_prices.length - 1; i++) {

        if (stock_prices[i] > stock_prices[i + 1]) {
            profit = stock_prices[i] - stock_prices[start];
            start = i + 1;
            if (profit > maximum_profits) {
                maximum_profits = profit;
            }
        }
        console.log(maximum_profits);
        return maximum_profits;
    }
}