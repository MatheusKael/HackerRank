function palindromeIndex(s) {
  let array = s.split("");
  const reversed = array.reverse().join("");

  const arr = s
    .split("")
    .map((item, index) => {
      if (item !== reversed[index]) {
        return reversed[index];
      }
      return -1;
    })
    .filter((item) => item !== -1);

  return s.split("").findIndex((item) => item === arr[0]);
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));
