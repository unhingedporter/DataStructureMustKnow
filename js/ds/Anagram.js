class Anagram {


    // Time Complexity = O(N)
    // Space Complexity = O(N)
    anagramProcessor(strArr) {

        if (!strArr) {
            return [];
        }

        var hashAnagram = {};

        for (let [key, value] of Object.entries(strArr)) {


            var sortedVal = value.split('').sort(); //.join('');

            if (hashAnagram[sortedVal]) {
                var existingVal = hashAnagram[sortedVal];
                existingVal.push(value);
                hashAnagram[sortedVal] = existingVal;
            } else {
                hashAnagram[sortedVal] = [value];
            }

        }

        return Object.values(hashAnagram);

    }


    main() {
        var arr = ['RATS', 'STAR', 'ARSA', 'CAR', 'ARE', 'AAB', 'BAA', 'ABA'];
        console.log(`The anagram processor is ${JSON.stringify(this.anagramProcessor(arr))}`);
    }



}

var anagram = new Anagram();
anagram.main();