
var obj1 = {
    p: 'aadsads',
    q: false,
    ob1: {
        p1: 'aadsads',
        q2: false,
        k3: [
            {
                p4: 'aadsads',
                q4: false
            },
            {
                p5: 'aadsads',
                q5: true,
                q6: true,
                // q6: [1,2,3,4,5,6,7,8,9]
            }
        ]
    }
};


class FrequencyCounterByType {

    constructor() {
        this.count = 0;
        this.frequencyCounterArr = [];
    }


    matchExists(obj, type) {
        return typeof (obj) === type;
    }

    incrementCounter() {
        this.count++;
    }

    addFrequencyCounter(obj) {
        this.frequencyCounterArr.push(obj);
    }

    frequencyCounter(obj, type) {

        if (Array.isArray(obj)) {

            for (var index = 0; index <= obj.length; index++) {
                let currentElem = obj[index];

                if (this.matchExists(currentElem, 'object')) {
                    this.frequencyCounter(currentElem, type);
                } else if (this.matchExists(obj, type)) {
                    this.addFrequencyCounter(obj);
                    this.incrementCounter();
                }
            }
        } else if (this.matchExists(obj, 'object')) {
            var keys = Object.keys(obj);

            // @todo: optimize the following loop
            for (var index = 0; index <= keys.length; index++) {
                let currentElem = obj[keys[index]];
                if (this.matchExists(currentElem, 'object')) {
                    this.frequencyCounter(currentElem, type);
                } else if (this.matchExists(currentElem, type)) {
                    this.addFrequencyCounter(keys[index]);
                    this.incrementCounter();
                }
            }
        }

        return this.count;
    }

    getFrequncyStats(obj1, type) {
        console.log(this.frequencyCounter(obj1, type));
        console.log(this.frequencyCounterArr);
    }
}

var frequencyCounterByType = new FrequencyCounterByType();
frequencyCounterByType.getFrequncyStats(obj1, 'string');

// Sorting object properties

class SortObject {

    constructor() {
    }

    sort(obj) {
        let newObj = {};

        if (!obj) {
            return;
        }

        var keys = Object.keys(obj).sort();

        for (let index = 0; index <= keys.length; index++) {
            let currentElem = obj[keys[index]];
            if (typeof (currentElem) === 'object') {
                newObj[keys[index]] = this.sort(currentElem);
            } else {
                newObj[keys[index]] = currentElem;
            }

        }
        return newObj;
    }
}
let sortObject = new SortObject();
var sort = sortObject.sort(obj1);
console.log(sort);


var debounce = function(func, wait){
    let timeout;
    return function(...args){
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context,  [args]);
        }, wait);
    }
}

var printMyAlisaName= function(str){
        console.log(str);
};
var debouncedAlisa = debounce(printMyAlisaName,100);

for(var i=0; i<100; i++){
    debouncedAlisa(i)
}

// Outlook mail client using native js
//     https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs

// Playing with tree -- create, search and sort


  // Overlapping interval merge

  // Output of hoisting

  // flatten array 