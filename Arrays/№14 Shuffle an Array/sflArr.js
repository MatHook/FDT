/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.originalCnf = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = [...this.originalCnf];
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  function getRndInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  for (let i = 0; i < this.nums.length; i++) {
    this.swap(i, getRndInt(0, this.nums.length));
  }

  return this.nums;
};

Solution.prototype.swap = function (first, second) {
  let temp = this.nums[first];
  this.nums[first] = this.nums[second];
  this.nums[second] = temp;
};

var numbers = [1, 2, 3];

var slt = new Solution(numbers);

console.log(slt.shuffle());
console.log(slt.reset());
console.logt, f(slt.shuffle());
