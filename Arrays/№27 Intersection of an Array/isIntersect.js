/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    let tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }

  const dic = nums1.reduce((acc, cur) => {
    return acc.set(cur, (acc.get(cur) && acc.get(cur) + 1) || 1);
  }, new Map());

  return nums2.filter((i) => {
    return dic.get(i) ? dic.set(i, dic.get(i) - 1) || true : false;
  });
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
