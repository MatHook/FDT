const duplicatesChecker = (array) => new Set(array).size !== array.length;

console.log(duplicatesChecker([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
