/*
  explanation: Given a non-empty array of decimal digits 
  representing a non-negative integer, increment one to the integer.
  The digits are stored such that the most significant digit is at the head
  of the list, and each element in the array contains a single digit.
  You may assume the integer does not contain any leading zero, 
  except the number 0 itself.
  task: [4, 3, 2, 1]
  result: [4, 3, 2, 2]
*/

const plusOne = (digits) => {
  let output = [];
  let le = digits[digits.length - 1] + 1;
  digits.pop();
  digits.push(le);
  digits = parseInt(digits.toString().split(",").join(""));
  while (digits > 0) {
    output.push(digits % 10);
    digits = parseInt(digits / 10);
  }

  return output.reverse();
};

console.log(plusOne([9]));
