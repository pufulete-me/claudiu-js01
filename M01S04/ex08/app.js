var i = 1;  

while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }
  
  i++;
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 67.');
var j = 1;

while (j <= 67) {
  console.log(j);

  j++;
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 66 (dar nu modifica numarul 67).');

var k = 1;

while (k < 67) {
  console.log(k);

  k++;
}