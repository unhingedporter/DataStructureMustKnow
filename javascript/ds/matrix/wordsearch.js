// Feature	BFS (Queue)	DFS (Recursion/Stack)
// Exploration	Explores level by level	Explores deep first (backtracks)
// Implementation	Uses a queue	Uses recursion (stack)
// Space Complexity	O(m × n) (stores visited nodes)	O(L) (only stores path length)
// Time Complexity	O(m × n × 4^L)	O(m × n × 4^L)
// Best Use Case	Shortest path problems	Path existence & backtracking



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 
function exist(board, word) {
    if (!board || board.length === 0) return false;

    const rows = board.length, cols = board[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up

    // BFS helper function
    function bfs(r, c) {
        let queue = [[r, c, 0, new Set([`${r},${c}`])]]; // [row, col, index_in_word, visited set]

        while (queue.length > 0) {
            let [x, y, index, visited] = queue.shift();

            // If we matched the entire word
            if (index === word.length - 1) return true;

            for (let [dx, dy] of directions) {
                let newX = x + dx, newY = y + dy;
                let key = `${newX},${newY}`;

                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols &&
                    !visited.has(key) && board[newX][newY] === word[index + 1]) {
                    
                    let newVisited = new Set(visited);
                    newVisited.add(key);
                    queue.push([newX, newY, index + 1, newVisited]);
                }
            }
        }

        return false;
    }

   
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && bfs(i, j)) {
                return true;
            }
        }
    }

    return false;
}


function exist(board, word) {
    if (!board || board.length === 0) return false;

    const rows = board.length, cols = board[0].length;
    
    function dfs(r, c, index) {
        // Base case: If we matched all letters in the word
        if (index === word.length) return true;
        
        // Boundary and character check
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) {
            return false;
        }

        // Temporarily mark the cell as visited
        let temp = board[r][c];
        board[r][c] = "#";

        // Explore all 4 possible directions (Right, Down, Left, Up)
        const found = dfs(r + 1, c, index + 1) ||
                      dfs(r - 1, c, index + 1) ||
                      dfs(r, c + 1, index + 1) ||
                      dfs(r, c - 1, index + 1);

        // Backtrack (restore the original value)
        board[r][c] = temp;

        return found;
    }

    // Start DFS from each matching cell
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}
