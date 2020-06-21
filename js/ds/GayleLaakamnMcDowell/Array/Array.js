
//1.1 

class ArrOperations {

    // 1.1
    containsOnlyUniqueCharacter(str) {

        var obj = [];
        var strSet = new Set();
        if (!str || typeof (str) !== 'string') {
            return false;
        }

        for (var iterator = 0; iterator < str.length - 1; iterator++) {
            if (obj.indexOf(str[iterator]) !== -1) {
                return false;
            }
            obj.push(str[iterator]);
        }
        return true;
    }

    // 1.2
    containsPermutations(first_str, second_str) {
        //a. sort and check
        //b. Store both character in set and validate
        //c. use hashing


        // Going with approach b for learning
        // The ideal approach should be hashing as it take o(n) extra space only with lesser time
        // complexity
        if ((!first_str && !!second_str) || (!!first_str && !second_str)) {
            return false;
        }

        if (first_str.length !== second_str.length) {
            return false;
        }
        Set.prototype.isEqual = function (set2) {
            var set1 = this;
            console.log(a);
            if (set1.size !== set2.size) return false;
            for (var a of set1) if (!set2.has(a)) return false;
            return true;
        };

        var permuteSetFirstStr = new Set();
        var permuteSetSecondStr = new Set();

        for (var i = 0; i < first_str.length; i++) {
            permuteSetFirstStr.add(first_str[i]);
            permuteSetSecondStr.add(second_str[i]);
        }

        return permuteSetFirstStr.isEqual(permuteSetSecondStr);
    }
    stringCompression(str) {

        // sanity check
        if (!str || typeof (str) !== "string" || str.length === 0) {
            return false;
        }
        // aaaaabbbbbccaaa ==> a5b4c2a3
        var counter = 0;
        var startIndex = 0;
        var compressedStr = {};
        compressedStr[str[0] + "_" + 0] = "";
        for (var i = 0; i < str.length - 1; i++) {

            if (str[i] === str[i + 1]) {
                compressedStr[str[i] + "_" + startIndex] = ++counter;
            } else {
                counter = 1;
                startIndex = i;
                compressedStr[str[i + 1] + "_" + startIndex] = counter;
            }
        }

        str = "";
        for (const [key, value] of Object.entries(compressedStr)) {
            console.log(key[0], value);
            str += key[0] + value;
        }

        return str;
    }
}

var str = new ArrOperations();
console.log(`The status for string unique character is ${str.containsOnlyUniqueCharacter('abcabc')}`);
console.log(`The status for string unique character is ${str.containsOnlyUniqueCharacter('abc')}`);
console.log(`The status for string unique character is ${str.containsPermutations('abcdef', 'feabcd')}`);
console.log(`The status for string unique character is ${str.containsPermutations('bcdefr', 'feabcd')}`);
console.log(`The status for string unique character is ${str.stringCompression('aaaaaaaaaabbbcccdefgggghhaaa')}`);

