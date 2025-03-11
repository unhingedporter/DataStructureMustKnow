function dfs(graph, start, visited = new Set()) {
    console.log(start);         // Visit the node
    visited.add(start);         // Mark the node as visited

    // Recurse for each unvisited neighbor
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
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

dfs(graph, 'A');
