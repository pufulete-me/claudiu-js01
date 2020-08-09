const fs = require('fs');

let first = fs.readFileSync('./another.txt');
let second = fs.readFileSync('./my-file.txt');
let last = fs.readFileSync('./dir/this-other-file.txt', 'utf-8');

console.log(`${first + ' ' + second + ' ' + last + '!'}`);
