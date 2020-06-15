console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 52 ');
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 52)

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 51.');

let j = 1;

do {
  console.log(j);
  j++;
} while (j < 52)

console.warn('Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)');

let k = 0;

do {
  k++;
  console.log(k);

  if (k === 12) {
    break;
  }

} while (k < 52)

console.warn('Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32 (bucla noua). ');

let z = 7;

do {
  z++;

  if (z % 2 !== 0) {
    console.log(z);
    continue;
  }

} while (z < 32)


