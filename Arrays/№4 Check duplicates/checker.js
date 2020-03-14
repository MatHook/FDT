const duplicatesChecker = array =>
  new Set(array).size !== array.length;

const numbers = [1,1,1,3,3,4,3,2,4,2];
console.log(duplicatesChecker(numbers));
