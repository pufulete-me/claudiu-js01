const fs = require('fs');

let data = fs.readFileSync('./file.txt', 'utf-8');
let outputString = `${data} This is our node script!`;

console.log(outputString);