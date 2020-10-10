solution1("123");
function solution1(str) {
  return str.split("").map(Number);
  // return [1,2,3]
}

solution2([1, 1, 2, 3, 2, 3]);
function solution2(array) {
  return [...new Set(array)];
  // return [1,2,3]
}

solution3("карп", "парк");
function solution3(str1, str2) {
  return str1.split("").sort().join() === str2.split("").sort().join();
  // return true
}

solution4([1, 0, 3, 4]);
function solution4(array) {
  let sum = array.reduce((acc, el) => acc + el)
  let check = 0
  for (let i = 1; i <= array.length; i++) {
    check += i
  }

  return check - sum
  // return 2
}
