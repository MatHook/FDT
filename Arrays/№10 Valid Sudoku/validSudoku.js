const isValidSudoku = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (isValid(board, i, j)) return true;
    }
  }

  return false;
};

const isValid = (arr, row, col) => {
  return (
    notInRow(arr, row) &&
    notInCol(arr, col) &&
    notInBox(arr, row - (row % 3), col - (col % 3))
  );
};

const notInRow = (arr, row) => {
  var st = new Set();

  for (let i = 0; i < 9; i++) {
    if (st.has(arr[row][i])) return false;

    if (arr[row][i] !== ".") st.add(arr[row][i]);
  }

  return true;
};

const notInCol = (arr, col) => {
  var st = new Set();

  for (let i = 0; i < 9; i++) {
    if (st.has(arr[i][col])) return false;

    if (arr[i][col] !== ".") st.add(arr[i][col]);
  }

  return true;
};

const notInBox = (arr, startRow, startCol) => {
  var st = new Set();

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let curr = arr[row + startRow][col + startCol];

      if (st.has(curr)) return false;

      if (curr !== ".") st.add(curr);
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
