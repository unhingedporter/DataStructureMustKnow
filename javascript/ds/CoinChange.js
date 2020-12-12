// do not look into it :(

class CoinChange {
    constructor() {}

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

console.log(cc.findPossibleCount([5, 3, 6, 2], 5, 10));

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