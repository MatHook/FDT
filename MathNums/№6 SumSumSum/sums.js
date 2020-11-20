const sums = (num) => {
  let currentSum = num;

  const next = (prev) => {
    currentSum += prev;
    console.log(currentSum);

    return next;
  };
  console.log(currentSum);
  return next;
};

sums(1)(2)(3);
