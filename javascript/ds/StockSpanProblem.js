// The stock span problem is a financial problem where we have a series of n daily price quotes
// for a stock and we need to calculate span of stock’ s price
// for all n days.
// The span Si of the stock’ s price on a given day i is defined as the maximum number of consecutive days just before the given day,
// for which the price of the stock on the current day is less than or equal to its price on the given day.


// For example,
// if an array of 7 days prices is given as 
// { 100, 80, 60, 70, 60, 75, 85 }, then the span values , for corresponding 7 days are 
// { 1, 1, 1, 2, 1, 4, 6 }


class Stack {
    constructor() {
        this._stack = [];
    }

    push(elem) {
        this._stack.push(elem);
    }

    isEmpty() {
        return this._stack.length === 0;
    }

    pop() {
        if (this._stack.length === 0) {
            return;
        } else {
            return this._stack.pop();
        }
    }

    peek() {
        return this._stack[this._stack.length - 1];
    }

}


class StockSpan {

    constructor(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            this.stockPriceList = arr;
        } else {
            throw "Invalid input"
        }
    }

    // if an array of 7 days prices is given as 
    // { 100, 80, 60, 70, 60, 75, 85 }, then the span values , for corresponding 7 days are 
    // { 1, 1, 1, 2, 1, 4, 6 }

    // Time complexity - O(n)
    getPreviousGreaterInArr() {

        var stockSpan = [1];
        var stack = new Stack();
        stack.push(stockPriceList[0]);

        for (var stockPriceIterator = 1; stockPriceIterator < this.stockPriceList.length; stockPriceIterator++) {


            while (!stack.isEmpty() && this.stockPriceList[stack.peek()] <= this.stockPriceList[stockPriceIterator]) {
                stack.pop();
            }

            if (stack.isEmpty()) {
                // No previous greater element found
                console.log(-1);
            } else {
                // Previous greater element
                console.log(this.stockPriceList[stockPriceIterator] + " ==> previous greater " + this.stockPriceList[stack.peek()])
            }
            stack.push(stockPriceIterator);
        }
    }

    // Time complexity - O(n)
    getStockSpanList() {

        var stockSpan = [1];
        var stack = new Stack();
        stack.push(0);
        console.log(1); // 1 is default for first element

        for (var stockPriceIterator = 1; stockPriceIterator < this.stockPriceList.length; stockPriceIterator++) {


            while (!stack.isEmpty() && this.stockPriceList[stack.peek()] <= this.stockPriceList[stockPriceIterator]) {
                stack.pop();
            }
            var span = stack.isEmpty() ? stockPriceIterator + 1 : stockPriceIterator - stack.peek();

            console.log(span);

            // can be improved
            stack.push(stockPriceIterator);
        }


    }

}

var num = new StockSpan([100, 80, 60, 70, 60, 75, 85]);

num.getStockSpanList();
console.log("Previous greater element are");
num.getPreviousGreaterInArr();