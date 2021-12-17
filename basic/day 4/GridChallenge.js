function gridChallenge(grid) {
  const matriz = grid.map((row) => row.split(""));

  matriz.map((item) => {
    return item.sort();
  });

  for (let i = 0; i < matriz.length - 1; i++) {
    for (let j = 0; j < matriz.length; j++) {
      if (matriz[i][j] > matriz[i + 1][j]) {
        return "NO";
      }
    }
  }

  return "YES";
}

const res = gridChallenge(["ebbcd", "aghij", "olmkn", "trpqs", "xywuv"]);

console.log(res);
