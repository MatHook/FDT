const rotation = (array, k) => {
  array = array.slice();
  while (k--) array.push(array.shift());
  return array;
};

console.log(rotation([1, 2, 3, 4, 5, 6, 7], 3)); //rotate to left
