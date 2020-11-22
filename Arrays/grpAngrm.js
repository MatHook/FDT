/*
  explanation: Given an array of strings strs, 
  group the anagrams together. 
  You can return the answer in any order.
  task: ["eat", "tea", "tan", "ate", "nat", "bat"]
  result: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
*/

function groupAnagrams(strs) {
  let obj = {};

  for (let str of strs) {
    let letters = str.split("").sort().join("");
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
