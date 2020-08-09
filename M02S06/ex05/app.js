const fs = require('fs');

fs.writeFileSync('./my-file.txt', 'Invat node.js');
let text = fs.readFileSync('./my-file.txt', 'utf-8');
let currentDate = new Date().toISOString().split('T')[0];

fs.writeFileSync(
  './my-file.txt',
  `${text + ', ' + 'azi, ' + currentDate + '!'}`
);
console.log(fs.readFileSync('./my-file.txt', 'utf-8'));
