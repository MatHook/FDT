const findUniqueChar = (s) => {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return s.indexOf(s.charAt(i));
    }
  }
};

console.log(findUniqueChar('abadaebe'));
