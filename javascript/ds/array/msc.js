// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
 
 
    let left = 0;
    let right  = 0;
    let left_right_counter = 0; 
    const S_clone = S.trim();

    for(var iterator = 0; iterator < S.length; iterator++){
        
        
        if (S[iterator]   === '?'){
            S[iterator]  = '<';
          
        }
       if(S[iterator] === '<'){
           left++;       
       } else        if(S[iterator] === '>'){
           right++;       
       }

        
        
       if(left === right){
            left_right_counter  = Math.max(left_right_counter, left+right)
       }

       if(right > left){
           left = 0;
           right = 0;
       } 
    }

    left = 0;
    right = 0;
    S = S_clone;
    console.log(S);

    for(var iterator = S.length - 1; iterator >= 0 ; iterator--){
        //  '<<?' 
        //  '<<>'
        
        if (S[iterator]  === '?'){
           S[iterator]= '>';
          
        }
       if(S[iterator] === '<'){
           left++;       
       } else if(S[iterator] === '>'){
           right++;       
       }

        
        
       if(left === right){
            left_right_counter  = Math.max(left_right_counter, left+right)
       }

       if(right < left){
           left = 0;
           right = 0;
       } 
    }
    return left_right_counter;


}
