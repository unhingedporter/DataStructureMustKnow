/**
 * @param {number[][]} matrix
 * @return {number}
 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    
    // Memoization matrix initialized with -1 (indicating unvisited cells)
    const memo = Array.from({ length: numRows }, () => Array(numCols).fill(-1));
    
    // DFS function with memoization
    const dfs = (row, col) => {
        if (memo[row][col] !== -1) return memo[row][col];
        
        let maxPath = 1; // Starting length of path (current cell only)

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check bounds and strictly increasing condition
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                matrix[newRow][newCol] > matrix[row][col]
            ) {
                // Explore path length recursively and update maxPath
                maxPath = Math.max(maxPath, 1 + dfs(newRow, newCol));
            }
        }
        
        memo[row][col] = maxPath; // Memoize result
        return maxPath;
    };

    let longestPath = 0;

    // Start DFS from each cell
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            longestPath = Math.max(longestPath, dfs(i, j));
        }
    }

    return longestPath;
};
