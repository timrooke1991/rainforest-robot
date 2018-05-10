function compareArrays(haystack, needle) {
  let i, j, current;
  for(i = 0; i < haystack.length; ++i){
    if(needle.length === (haystack[i].length - 1)) {
      current = [haystack[i][0], haystack[i][1]];

      for(j = 0; j < needle.length && needle[j] === current[j]; ++j);

      if(j === needle.length) return i;
    }
  }
  return -1;
}

module.exports = compareArrays;
