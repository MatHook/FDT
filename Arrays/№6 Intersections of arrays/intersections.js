const intersection = (num1, num2) =>
  num1.filter((value) => num2.includes(value));

console.log(intersection([1, 2, 2, 1], [2]));
