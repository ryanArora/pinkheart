#!/usr/bin/env node

// for ava <3

const fs = require("fs");
const path = require("path");
const colors = require("colors");

const TXT_FILES = "txts";

const files = fs.readdirSync(TXT_FILES);
files.sort((a, b) => {
  a = path.basename(a, ".txt");
  b = path.basename(b, ".txt");
  return parseInt(a) - parseInt(b)
});

const txts = files.map((fileName) => {
  const pth = path.join(TXT_FILES, fileName);
  const file = fs.readFileSync(pth);
  return colors.magenta(file.toString());
});

let i = 0;
setInterval(() => {
  process.stdout.write('\x1bc');
  console.log(txts[i]);

  ++i;
  if (i == txts.length) i = 0;
}, 169);

// for ava <3