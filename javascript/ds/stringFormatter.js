/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    var processingEngine = (str) => {
        console.log('------------------------------------------')
        var str = str.split('');

        for (var index = 0; index < str.length; index++) {

            if (str[index] === '#') {
                if (index === 0) {
                    str.splice(index, 1);
                    index--;
                    continue
                }
                str.splice(index - 1, 2);
                index -= 2;
                console.log('new string ' + str.join(''))
            }
        }

        return str.join('');
    }

    return processingEngine(s) === processingEngine(t);

};

var backspaceCompare = function (s, t) {
    let sStack = [];
    let tStack = [];

    for (const c of s) {
        if (c === '#') {
            sStack.pop()
        }
        else {
            sStack.push(c)
        }
    }

    for (const c of t) {
        if (c === '#') {
            tStack.pop()
        }
        else {
            tStack.push(c)
        }

    }

    return sStack.join('') === tStack.join('')

};