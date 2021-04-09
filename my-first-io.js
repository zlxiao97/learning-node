const fs = require("fs");

const fileBuffer = fs.readFileSync(process.argv[2]);

const fileString = fileBuffer.toString();

const count = fileString.match(/\n/g).length;

console.log(count);
