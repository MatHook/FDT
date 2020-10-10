var atoi = (s) => {
  s = s.trim();
  let strArr = s.split(" ");
  let firstWord = strArr[0];
  if (parseInt(firstWord)) {
    let num = parseInt(firstWord);
    if (num >= Math.pow(2, 31)) {
      return Math.pow(2, 31) - 1;
    } else if (num < Math.pow(-2, 31)) {
      return Math.pow(-2, 31);
    } else {
      return num;
    }
  } else {
    return 0;
  }
};

console.log(atoi("-91283472332 alksmda"));
