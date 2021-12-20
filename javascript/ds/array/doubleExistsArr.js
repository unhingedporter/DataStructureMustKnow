/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    
    var doubleMap = new Map();
    var isDoubleFound = false;
    
    for(var index = 0; index < arr.length ; index++){
        var currentElem = arr[index];
        
        if(doubleMap.has(2 * currentElem) || doubleMap.has(0.5 * currentElem)){
            isDoubleFound = true;
            break;
        }
        doubleMap.set(currentElem)
    }
    delete doubleMap;
    return isDoubleFound;
};