var longestIncreasingPath = function (matrix) {

    class Solution {

        constructor() {
            this.direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        }

        longestIncreasingPath(matrix) {
            if (matrix == null || matrix.length == 0) return 0;
            var m = matrix.length, n = matrix[0].length;
            var mem = [...Array(m)].map(() => [...Array(n)].fill(0));
            var longestPath = 0;

            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    var path = this.dfs(matrix, m, n, i, j, mem);
                    longestPath = Math.max(path, longestPath);
                }
            }

            return longestPath;
        }

        dfs(matrix, m, n, i, j, mem) {
            if (mem[i][j] > 0) return mem[i][j];
            var max = 0;
            for (var d of this.direction) {
                var x = i + d[0], y = j + d[1];
                if (x >= 0 && y >= 0 && x < m && y < n && matrix[x][y] > matrix[i][j]) {
                    max = Math.max(max, this.dfs(matrix, m, n, x, y, mem));
                }
            }
            mem[i][j] = max + 1;
            return mem[i][j] ;
        }
    }


    var longestPath = new Solution();

    return longestPath.longestIncreasingPath(matrix);


};