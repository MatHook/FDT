/*
  explanation: Given a non-negative integer numRows, 
  generate the first numRows of Pascal's triangle.
  task: 3
  result: [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [[1]]

  for (let i = 2; i <= numRows; i++) {
    let temp = [1], index = 0
    while (index < i - 2) {
      temp.push(triangle[triangle.length - 1][index] + triangle[triangle.length - 1][index +1])
      index++
    }
    temp.push(1)
    triangle.push(temp)
  }

  return triangle
};

console.log(generate(3))