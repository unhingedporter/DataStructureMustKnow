// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M) {
    M = JSON.parse(M);
    console.log(M)
    // M is now your relationship matrix SxS
    
    for(var i=0;i<M.length;i++){
        for(var j=0;j<M[i].length;j++){
            if(i > j && M[i][j] === 1 ){
                console.log(i+","+j);
            }
        }
    }
    
    
}