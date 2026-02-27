/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i=0; i<matrix.length;i++) {
        for (let j=0; j<matrix.length; j++) {
            if (j > i) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
        matrix[i].reverse()
    }
};


// My Approach:
// Transpose the matrix and then reverse each row.
// 1. First, transpose the matrix by swapping elements across the main diagonal
// 2. Then, reverse each row to complete the 90-degree clockwise rotation
// Time complexity: O(n²), Space complexity: O(1)