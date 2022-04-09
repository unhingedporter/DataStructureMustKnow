//Suggesting spelling error


class EditMinimumDistance {

    construtor() { }

    findMinDistance(str1, str2, m, n) {

        if (m === 0) {
            return n;
        }

        if (n === 0) {
            return m;
        }

        if (str1[m - 1] === str2[n - 1]) {
            return this.findMinDistance(str1, str2, m - 1, n - 1);
        } else {
            return 1 + Math.min.apply(null, [this.findMinDistance(str1, str2, m - 1, n), this.findMinDistance(str1, str2, m, n - 1), this.findMinDistance(str1, str2, m - 1, n - 1)])
        }
    }


}

var ed = new EditMinimumDistance()

var str1 = "Monday";
var str2 = "Tuesday";
console.log(ed.findMinDistance(str1, str2, str1.length, str2.length))