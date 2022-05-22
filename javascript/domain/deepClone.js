
let testObject = {
    z: 1,
    b: 2,
    c: 3,
    d: {
        e: '1',
        f: '2',
        g: {
            h: '232'
        },
        i: [1, 2, 3, 4, 54, 23232, 222]
    },
    a: 3
};


var deepClone = (deepCloneObj) => {


    var helper = (objToCopy) => {
        console.log(`Object value: ${JSON.stringify(objToCopy)}`)

        var obj = {};
        var keys = Object.keys(objToCopy);

        for (var index = 0; index < keys.length; index++) {
            let elem = objToCopy[keys[index]];
            if (typeof (elem) === 'object') {
                obj[keys[index]] = helper(elem);
            } if (Array.isArray(elem)) {
                obj[keys[index]] = elem;
            } else {
                obj[keys[index]] = elem;
            }
        }
        console.log(`Object value: ${JSON.stringify(obj)}`)
        return obj;
    }
    return helper(deepCloneObj);
}

console.log(`Object value: ${JSON.stringify(deepClone(testObject))}`);

// group by 
const arr = [ 
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "5" },
    { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "10" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "15" },
    { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "20" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "25" },
    { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "30" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 1", Value: "35" },
    { Phase: "Phase 2", Step: "Step 2", Task: "Task 2", Value: "40" }
    ]
    
    const groupBy = (key) => arr.sort((a, b) => a[key].localeCompare(b[key]))
    .reduce((total, currentValue) => {
      const newTotal = total;
      if (
        total.length &&
        total[total.length - 1][key] === currentValue[key]
      )
        newTotal[total.length - 1] = {
          ...total[total.length - 1],
          ...currentValue,
          Value: parseInt(total[total.length - 1].Value) + parseInt(currentValue.Value),
        };
      else newTotal[total.length] = currentValue;
      return newTotal;
    }, []);
    
    console.log(groupBy('Phase'));
    
    // => [{ Phase: "Phase 1", Value: 50 },{ Phase: "Phase 2", Value: 130 }]
    
    console.log(groupBy('Step'));
    
    // => [{ Step: "Step 1", Value: 70 },{ Step: "Step 2", Value: 110 }] 