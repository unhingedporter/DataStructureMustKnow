var maxEnvelopes = function (envelopes) {

    envelopes = envelopes.sort((a, b) => { return b[0] - a[0]; })

    let result = [];
    var maxCounter = 0;
    const rec = (idx, arr) => {

        // if(idx>envelopes.length){
        //     return;
        // }

        let counter = 1;

        for (var i = 0; i < arr.length; i++) {
            if (typeof (arr[i - 1]) !== 'undefined' && !(arr[i - 1][0] > arr[i][0] && arr[i - 1][1] > arr[i][1])) {
                counter -= 1;
            } else if (arr[0][0] > arr[i][0] && arr[0][1] > arr[i][1]) {
                counter += 1;
            }

        }
        maxCounter = Math.max(maxCounter, counter);
        for (let i = idx; i < envelopes.length; i++) {
            arr.push(envelopes[i]);
            rec(i + 1, arr);
            arr.pop();
        }

    };
    rec(0, []);

    return maxCounter;
};


var maxEnvelopes = function (envelopes) {
    if (envelopes.length < 2) { return envelopes.length; }
    if (!envelopes || !envelopes[0]) { return 0; }

    envelopes.sort((env1, env2) => {
        if (env1[0] == env2[0]) { return env2[1] - env1[1]; }
        else {
            return env1[0] - env2[0];
        }
    });

    let dp = new Array(envelopes.length);
    let left, right, middle, size = 0;

    for (let envelope of envelopes) {
        left = 0, right = size, middle = 0;     // right = size
        while (left < right) {
            middle = parseInt(left + (right - left) / 2);
            if (dp[middle] < envelope[1]) left = middle + 1;
            else right = middle;
        }

        dp[left] = envelope[1];
        if (left == size) size++;
    }

    return size;
};