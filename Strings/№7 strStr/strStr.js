/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = (haystack, needle) => {
  if(haystack.includes(needle))
    return haystack.indexOf(needle)
  else 
    return -1
};

console.log(strStr("aaaaa", "bba"))