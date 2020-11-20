function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  var output: number;

  var numsRes = nums1.concat(nums2).sort((a, b) => a - b);

  if (numsRes.length % 2 === 0) {
    //even
    let lMedianEl = numsRes[Math.floor(numsRes.length / 2) - 1];
    let rMedianEl = numsRes[Math.floor(numsRes.length / 2)];
    output = (lMedianEl + rMedianEl) / 2;
  }

  if (numsRes.length % 2 === 1) {
    //uneven
    output = numsRes[Math.floor(numsRes.length / 2)];
  }

  console.log(numsRes);
  return output;
}

findMedianSortedArrays([3], [-2, -1]);
