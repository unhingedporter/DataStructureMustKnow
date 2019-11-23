

class CoinChange {

    constructor() {
    }

    findPossibleCount(arr_coins,num_coins, sum) {

        if(sum === 0){
            return 1;
        }

        if (num_coins === 0){
            return 0;
        }

        var result = this.findPossibleCount(arr_coins,num_coins -1, sum);

        if (arr_coins[num_coins-1] <= sum){
            result += this.findPossibleCount(arr_coins,num_coins, sum  - arr_coins[num_coins-1]);
        }
        return result;

    }
}


var cc = new CoinChange();

console.log(cc.findPossibleCount([2,5,3,6], 2500, 10));