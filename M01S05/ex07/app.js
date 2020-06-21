let dateBuilder = [
  () => {
    return '2020';
  }, 
  () => {
    return 'Iunie';
  }, 
  () => {
    return '16'
  }
];

dateBuilder[3] = () => {
  return 'Marti';
};

console.warn('Folosind arrayul dateBuilder. Afiseaza luna curenta.');

console.log(dateBuilder[1]());

console.warn('Afiseaza propozitia: “Suntem in anul an.”.');

console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn('Afiseaza propozitia: “Suntem in luna ll in anul aa.”.');

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn('Afiseaza propozitia: “Astazi este zz”.');

console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

// Folosind arrayul dateBuilder. Afiseaza anul curent.
// Afiseaza propozitia: “Suntem in luna an”.
// Afiseaza propozitia: “Astazi este zi, data”.
// Afiseaza propozitia: “Data curenta este zi luna an”.

console.log(`Anul curent este: ${dateBuilder[0]()}.`);

console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

let message = 'Astazi este ';
console.log(`${message}${dateBuilder[2]()} ${dateBuilder[1]()}.`);

message = `Data curenta este `;

console.log(`${message}${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`);
