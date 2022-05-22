var maxAreaOfIsland = function(grid) {
    if (grid.length == 0) return 0;
    let height = grid.length, width = grid[0].length;
    let max = 0;
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] == 1) {
                max = Math.max(max, dfs(row, col, grid));
            }
        }
    }
    
    return max;    
    // Time Complexity: O(m*n), we possibly visit all nodes
    // Space Complexity: O(m*n), call stack can go as deep as the # of nodes
};

// Helper function
function dfs(r, c, grid) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length 
        || grid[r][c] === 0) return 0;
    const DIRECTIONS = [[-1,0], [0,1], [1,0], [0,-1]];
    let count = 1;
    grid[r][c] = 0;
    for (let dir of DIRECTIONS) {
        count += dfs(r + dir[0], c + dir[1], grid);
    }
    return count;
}