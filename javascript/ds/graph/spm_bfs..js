/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {




    var directions= [[0,1],[1,0],[0,-1],[-1,0],[-1,-1],[1,1],[1,-1],[-1,1]]
    var row = 0;
    var col = 0;
    var isNotFound = true
    var queue = [[row, col, 1 ]]
    var numRows = grid.length -1;
    var numCols = grid[0].length - 1;
    var visitedMap = new Map()
    
    while(queue.length > 0){

        var elem = queue.shift();

        row = elem[0]
        col = elem[1]
        distance = elem[2]

         // If the start or end cell is blocked, return -1
    if (grid[0][0] === 1 || grid[numRows][numCols] === 1) {
        return -1;
    }

 if(row === numRows && col === numCols && row === 0 && col ===0){
            isNotFound = false
            return  1;
        }


 
    for(var direction of directions){

        let r = row + direction[0];
        let c = col + direction[1];
        let d = distance + 1
       
        if( (r > numRows || r < 0) || 
            (c > numCols || c < 0) ||
            visitedMap.has(`${r}${c}`) ){
                continue;
            }



        if(grid[r][c] === 1){
            continue
        }

        if(r === numRows && c === numCols){
            isNotFound = false
            return distance + 1;
        }

         if(grid[0][0] === 1 ){
            return -1; //continue
        }

        visitedMap.set(`${r}${c}`,1);
        if(grid[r][c] === 0){           
            queue.push([r,c,d])
        }
    }


    }
    return !isNotFound? distance: -1;






    
};




/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], 
        [-1, -1], [1, 1], [-1, 1], [1, -1]
    ];
    const numRows = grid.length;
    const numCols = grid[0].length;
    
    // If the start or end cell is blocked, return -1
    if (grid[0][0] === 1 || grid[numRows - 1][numCols - 1] === 1) {
        return -1;
    }

    const queue = [[0, 0, 1]]; // Start BFS with (row, col, distance)
    const visited = new Set(["0,0"]);

    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        // Check if we reached the destination
        if (row === numRows - 1 && col === numCols - 1) {
            return distance;
        }

        // Explore all 8 directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if within bounds, not visited, and walkable
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                grid[newRow][newCol] === 0 &&
                !visited.has(`${newRow},${newCol}`)
            ) {
                visited.add(`${newRow},${newCol}`);
                queue.push([newRow, newCol, distance + 1]);
            }
        }
    }

    // Return -1 if there's no path to the end
    return -1;
};



/**
 * @param {number[][]} grid
 * @return {number[]|null} Returns the shortest path or null if no path exists.
 */
var shortestPathBinaryMatrixWithPath = function(grid) {
    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], 
        [-1, -1], [1, 1], [-1, 1], [1, -1]
    ];
    const numRows = grid.length;
    const numCols = grid[0].length;

    // If the start or end cell is blocked, return null
    if (grid[0][0] === 1 || grid[numRows - 1][numCols - 1] === 1) {
        return null;
    }

    const queue = [[0, 0, 1]]; // Start BFS with (row, col, distance)
    const visited = new Set(["0,0"]);
    const parentMap = new Map(); // Map to store each cell's parent

    // BFS to find the shortest path
    while (queue.length > 0) {
        const [row, col, distance] = queue.shift();

        // Check if we reached the destination
        if (row === numRows - 1 && col === numCols - 1) {
            return reconstructPath(parentMap, [row, col]);
        }

        // Explore all 8 directions
        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if within bounds, not visited, and walkable
            if (
                newRow >= 0 && newRow < numRows &&
                newCol >= 0 && newCol < numCols &&
                grid[newRow][newCol] === 0 &&
                !visited.has(`${newRow},${newCol}`)
            ) {
                visited.add(`${newRow},${newCol}`);
                queue.push([newRow, newCol, distance + 1]);
                parentMap.set(`${newRow},${newCol}`, [row, col]); // Track the parent
            }
        }
    }

    // If we exhaust the queue without reaching the destination, return null
    return null;
};

// Helper function to reconstruct the path from the parent map
function reconstructPath(parentMap, end) {
    const path = [];
    let [row, col] = end;

    // Backtrack from the end to the start using the parentMap
    while (row !== 0 || col !== 0) {
        path.push([row, col]);
        const parent = parentMap.get(`${row},${col}`);
        if (!parent) return null; // No path if a parent is missing (edge case)
        [row, col] = parent;
    }
    
    path.push([0, 0]); // Add the start point
    return path.reverse(); // Reverse to get path from start to end
}
