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

function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  arr.forEach((item) => {
    if (item > 0) {
      positives++;
    } else if (item < 0) {
      negatives++;
    } else {
      zeros++;
    }
  });
  console.log(positives / arr.length);
  console.log(negatives / arr.length);
  console.log(zeros / arr.length);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
