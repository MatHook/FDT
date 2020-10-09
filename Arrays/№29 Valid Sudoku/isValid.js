/**
 * @param {character[][]} board
 * @return {boolean}
 */

const data = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValid = (board) => {
  let m1 = [],
    m2 = [],
    m3 = [];
  for (let i = 0; i < 9; i++) {
    (m1 = []), (m2 = []), (m3 = []);
    for (let j = 0; j < 9; j++) {
      if (b[i][j] !== ".") m1.push(b[i][j]);
      if (b[j][i] !== ".") m2.push(b[j][i]);
      if (
        b[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ] !== "."
      )
        m3.push(
          b[3 * Math.floor(i / 3) + Math.floor(j / 3)][((i * 3) % 9) + (j % 3)]
        );
    }
    if (new Set(m1).size !== m1.length) return false;
    if (new Set(m2).size !== m2.length) return false;
    if (new Set(m3).size !== m3.length) return false;
  }
  return true;
};

console.log(isValid(data));
