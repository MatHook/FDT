/*
  explanation: Given a string s containing just the 
  characters '(', ')', '{', '}', '[' and ']', 
  determine if the input string is valid.
  task: "{[]}"
  result: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let item of s) {
    if (item === "(") stack.push(")");
    else if (item === "[") stack.push("]");
    else if (item === "{") stack.push("}");
    else if (stack.pop() !== item) return false;
  }

  return stack.length === 0;
};

console.log(isValid("{[]}"));
