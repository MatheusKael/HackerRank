function superDigit(n, k) {
  if (n.length === 1 && k === 1) {
    return Number(n);
  }
  const sum = n.split("").reduce((acc, curr) => Number(acc) + Number(curr));

  return superDigit((sum * k).toString(), 1);
}
console.log(superDigit("9875", 4));
