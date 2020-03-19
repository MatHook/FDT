const palindromeCheck = (s) => {
  const reg = /[\W_]/g;
  let lowRegStr = s.toLowerCase().replace(reg, '');
  let reverseStr = lowRegStr.split('').reverse().join('');

  return lowRegStr === reverseStr;
};

console.log(palindromeCheck('A man, a plan, a canal: Panama'));
