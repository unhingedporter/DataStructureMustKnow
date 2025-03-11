/**
 * @param {character[][]} grid
 * @return {number}
 */

var grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  var numIslands = function(grid) {
  
  
      let counter = 0;
  
      const queue =[]
      var bfs = function(i, j){
  
          const directions = [[1,0],[0,1],[-1,0],[0,-1]]
          queue.push ([i,j])
          console.log(queue)
          while(queue.length > 0){
          
          const [m,n]  = queue.shift();
          console.log("m " + m , " n " + n)
          for(const [dr,dw] of directions){
              
              p = m + dr
              q = n + dw
              if(p < 0 || q < 0 || p >= grid.length || q >= grid[0].length){
                  continue
              }
  
              if(grid[p][q] === '1'){
          // console.log('' + queue )
  
                  grid[p][q] = '0'
                  queue.push([p,q])
              }
          }
  
          }
  
  
      }
  
      for(var i=0; i< grid.length; i++){
  
          for(var j=0; j< grid[0].length ; j++){
  
              if(grid[i][j] === '1'){
                  counter++;
                  grid[i][j] = '0'
                  bfs(i,j);
              }
          }
      }
  
  
      return counter;
      
  };
  
  console.log(numIslands(grid));