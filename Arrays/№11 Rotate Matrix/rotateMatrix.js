const rotateMatrix = (matrix) => {
  const N = matrix.length - 1;

  const result = matrix.map((row, i) => row.map((val, j) => matrix[N - j][i]));

  matrix.length = 0;
  matrix.push(...result);

  return matrix;
};

console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
