// finding a longest common subsequence


var assertion1 = "Kim love kiwi fruit",
    assertion2 = "Alisa love fruit",
    conclusion = "Kim love Alisa";


class StringOperation {

    constructor() {
        this.memo = {};
    }

    longestSubSequenceDetector(str1, str2, len_str1, len_str2) {

        if (this.memo[len_str1] === undefined) {
            this.memo[len_str1] = new Array(len_str2);
            this.memo[len_str1][len_str2] = -1;
        } else if (this.memo[len_str1][len_str2] === undefined) {
            this.memo[len_str1][len_str2] = -1;
        } else if (this.memo[len_str1][len_str2] !== undefined && this.memo[len_str1][len_str2] !== -1) {
            return this.memo[len_str1][len_str2];
        }

        if (len_str1 === 0 || len_str2 === 0) {
            return this.memo[len_str1][len_str2];
        }

        if (str1[len_str1 - 1] === str2[len_str2 - 1]) {
            this.memo[len_str1][len_str2] = 1 + this.longestSubSequenceDetector(str1, str2, len_str1 - 1, len_str2 - 1);
        } else {
            this.memo[len_str1][len_str2] = Math.max(this.longestSubSequenceDetector(str1, str2, len_str1 - 1, len_str2),
                this.longestSubSequenceDetector(str1, str2, len_str1, len_str2 - 1))
        }

        if (this.memo[len_str1][len_str2] !== -1) {
            console.log("----------------------------------------");
            console.log(" The tabulation memo is " + this.memo[len_str1][len_str2]);
        }
        return this.memo[len_str1][len_str2];


    }
}


var strOper = new StringOperation();

console.log(strOper.longestSubSequenceDetector(assertion1, assertion2, assertion1.length, assertion2.length));