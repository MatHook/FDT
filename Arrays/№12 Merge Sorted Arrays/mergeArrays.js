/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = (nums1, m, nums2, n) => {
  let [p1, p2, end] = [m-1, n-1, m+n-1]; 
    while(p1 >= 0 && p2 >= 0) {    
        nums1[end--] = nums2[p2] >= nums1[p1] ? nums2[p2--] : nums1[p1--];
        console.log("loop1 " + nums1)
    }
    while(p2 >= 0) {
        nums1[end--] = nums2[p2--];
        console.log("loop2 " + nums1)
    }
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))