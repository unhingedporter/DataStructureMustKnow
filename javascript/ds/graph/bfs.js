function bfs(graph, start) {
    const visited = new Set(); // Track visited nodes
    const queue = [start];     // Queue initialized with the start node
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();  // Dequeue the front node
        console.log(node);           // Visit the node

        // Enqueue all unvisited neighbors
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

bfs(graph, 'A');


// A D E
// D B

// A EF