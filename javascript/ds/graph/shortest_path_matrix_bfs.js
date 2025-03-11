function shortestPath(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Directions for moving up, down, left, right
    const directions = [
        [0, 1],   // right
        [1, 0],   // down
        [0, -1],  // left
        [-1, 0]   // up
    ];

    const queue = [[...start, 0]]; // queue with (row, col, distance)
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [row, col, dist] = queue.shift();

        // If reached the end cell, return the distance
        if (row === end[0] && col === end[1]) {
            return dist;
        }

        // Explore all four directions
        for (let [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if the new position is within bounds, walkable, and unvisited
            if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                grid[newRow][newCol] === 0 &&
                !visited[newRow][newCol]
            ) {
                visited[newRow][newCol] = true; // Mark as visited
                queue.push([newRow, newCol, dist + 1]); // Enqueue with incremented distance
            }
        }

    }

    // Return -1 if there is no path to the end cell
    return -1;
}
 