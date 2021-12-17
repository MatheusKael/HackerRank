"use strict";

const fs = require("fs");

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

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char.toUpperCase(s[i])) {
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 90) + 64);
      newString += ch;
    } else {
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 122) + 96);
      newString += ch;
    }
  }
  return newString;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = caesarCipher(s, k);

  ws.write(result + "\n");

  ws.end();
}
