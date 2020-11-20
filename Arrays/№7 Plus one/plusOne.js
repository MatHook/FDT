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
