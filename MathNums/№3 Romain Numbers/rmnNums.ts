var romanToInt = (s: string) => {
  var result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "I") {
      result++;
    } else if (s[i] === "V") {
      if (s[i - 1] === "I") {
        result += 4;
        i--;
      } else {
        result += 5;
      }
    } else if (s[i] === "X") {
      if (s[i - 1] === "I") {
        result += 9;
        i--;
      } else {
        result += 10;
      }
    } else if (s[i] === "L") {
      if (s[i - 1] === "X") {
        result += 40;
        i--;
      } else {
        result += 50;
      }
    } else if (s[i] === "C") {
      if (s[i - 1] === "X") {
        result += 90;
        i--;
      } else {
        result += 100;
      }
    } else if (s[i] === "D") {
      if (s[i - 1] === "C") {
        result += 400;
        i--;
      } else {
        result += 500;
      }
    } else if (s[i] === "M") {
      if (s[i - 1] === "C") {
        result += 900;
        i--;
      } else {
        result += 1000;
      }
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
