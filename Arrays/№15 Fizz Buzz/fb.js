/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [];
  while (n != 0) {
    if(n % 3 == 0 && n % 5 == 0) {
      result[n-1] = 'FizzBuzz'
    } else if(n % 5 == 0) {
      result[n-1] = 'Buzz'
    } else if(n % 3 == 0) { 
      result[n-1] = 'Fizz'
    } else {
      result[n-1] = n.toString();
    }
    n--
  }  

  console.log(result)
  return result;
};

fizzBuzz(15)