function singleNonDuplicate(nums: number[]): number {
  return nums.reduce((prev, curr) => {
    return prev ^ curr;
  }, 0);
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
