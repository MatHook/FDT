const anagramCheck = (s, t) => {
  return sortString(s) === sortString(t);
};

const sortString = (string) => {
  return string.split('').sort().join('');
};

console.log(anagramCheck('anagram', 'nagaram'));
