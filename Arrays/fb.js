/*
  explanation: Write a program that outputs 
  the string representation of numbers from 1 to n.
  But for multiples of three it should output “Fizz” 
  instead of the number and for the multiples of five 
  output “Buzz”. For numbers which are multiples of 
  both three and five output “FizzBuzz”.
  task: 5
  result: [ '1', '2', 'Fizz', '4', 'Buzz' ]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];
  while (n != 0) {
    if (n % 3 == 0 && n % 5 == 0) {
      result[n - 1] = "FizzBuzz";
    } else if (n % 5 == 0) {
      result[n - 1] = "Buzz";
    } else if (n % 3 == 0) {
      result[n - 1] = "Fizz";
    } else {
      result[n - 1] = n.toString();
    }
    n--;
  }

  console.log(result);
  return result;
};

fizzBuzz(5);
