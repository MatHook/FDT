const singulatiryCheck = (array) => {
  let a = 0;
  for (let i = 0; i < array.length; i++) a ^= array[i];
  return a;
};

console.log(singulatiryCheck([2, 2, 1]));
