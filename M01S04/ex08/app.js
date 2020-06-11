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
console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).');

var k = 1;

while (k < 67) {
  console.log(k);

  if (k === 12) {
    break;
  }

  k++;
}

console.warn('Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv ) (bucla noua).');

var z = 0;

while (z <= 32) {
  z++;

  if (z % 2 !== 0) {
    console.log(z);
    continue;
  }

}


