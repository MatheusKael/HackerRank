"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b);
  let max = arr.slice(1).reduce((a, b) => a + b);
  console.log(`${min} ${max}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
