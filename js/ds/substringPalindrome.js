// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

var isPrimeNumber = function(num){ 
    if(num <2){
        return false;
    }
    
    var squareRoot = Math.sqrt(num);
    for(var i= 2; i<squareRoot; i++){
        if(num%i === 0){
         return false;   
        }
    }
  
    return true;
}

var isPalindrome = function(str){
    return str === str.split("").reverse().join("");
} 

var maxLength = 0;

var findPalindrome = function(str){
    var len = str.length;
    var m =0, n = len;
    for(var leftIterator = 0; leftIterator< len; leftIterator++){
        for(var rightIterator =len ; rightIterator>leftIterator; rightIterator--){
            if(str[leftIterator] === str[rightIterator]){
              var testStr = str.slice(leftIterator+1, rightIterator);
              if(isPrimeNumber(testStr.length)){
                  var isPal =  isPalindrome(testStr);
                  if(isPal && maxLength < testStr.length){
                      maxLength = testStr.length;
                      return "YES";
                  }    
              }
              
            }
            
        }
        
    }
    return "NO";
}



function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(!S || S.length === 0){
        return "NO";
    }
    return findPalindrome(S);
    
}

