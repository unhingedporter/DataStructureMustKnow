var transpose = function (matrix) {
  let a = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      a[j] = a[j] || [];
      a[j][i] = matrix[i][j];
    }
  }

  return a;
};