const rotation = (array, k) => {
  array = array.slice();
  while ( k-- ) array.push(array.shift());
  return array;
};

const numbers = [1,2,3,4,5,6,7];
console.log(rotation(numbers, 3)); //rotate to left

export default rotation(numbers, 3);
