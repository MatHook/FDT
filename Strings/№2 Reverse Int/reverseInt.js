const reverseInt = (x) => {
  if (Math.abs(x) > Math.pow(2, 31) - 1) return 0;
  let output = parseFloat(
    x.toString().split('').reverse().join('')) * Math.sign(x);
  if (Math.abs(output) < Math.pow(2, 31) - 1) {
    return output;
  }
  else return 0;
};

console.log(reverseInt(-2147483648));
