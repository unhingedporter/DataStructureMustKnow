/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    
    var sum = 0, map = [], arr = nums.sort();
    
    //Sort 
    // use two pointer approach
    
    if(arr.length < 3){
        return []
    }
    
    for(var iterator=0; iterator< arr.length ; iterator++){
        
        
        
    var left= 0, right= arr.length -1 ;

        while(left <= right ){
            
            if(arr[left] + arr[right] + arr[iterator] === 0){
                var zeroSumTriplet = [arr[left] , arr[right] , arr[iterator] ].sort((a,b)=>{ return a-b})
                if(iterator != left && iterator != right ){
                    map.push(zeroSumTriplet); 
                }
                break;
                
            } else if ((arr[left] + arr[right] + arr[iterator]) > 0){
                right = right - 1;
            } else if ((arr[left] + arr[right] + arr[iterator]) < 0){
                left = left + 1; 
            }
        }
    }
    
    // return [...new Set(map)];

    var arr = map
arr = arr.map(JSON.stringify).reverse()
  .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; }) 
  .reverse().map(JSON.parse)

    return arr;
};