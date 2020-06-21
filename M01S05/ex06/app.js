let person = {
  getName: () => {
    return 'Crispin Glover';
  },
  getAge: () => {
    return 50; 
  }
};

// test
let access = (insertprop) => {
  let property = `get${insertprop}`;
  return person[property]();
}

let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]();
};

console.log(accessor('Name'));

console.warn('Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”');

let personName = accessor('Name').split(' ')[0];

console.log(`Eu sunt ${personName}`);

console.warn('Afiseaza diferenta de varsta dintre tine si persoana.');

console.log(Math.abs(30 - accessor('Age')));

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');

let currentYear = new Date().getFullYear();

console.log(currentYear - accessor('Age'));

console.warn('Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”');

let personAge = accessor('Age');
console.log(`Ma numesc ${accessor('Name')} si am ${personAge} ani si m-am nascut acum ${personAge} de ani.`);

console.warn(`Folosind accesorul afiseaza numele persoanei.`);

let personFullName = accessor('Name');

console.log(`numele persoanei este: ${personFullName}.`);

console.warn('Afiseaza varsta persoanei.');

console.log(`varsta persoanei este: ${personAge} ani.`);

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');

let birthYear = currentYear - personAge;

console.log(`Anul de nastere al persoanei este: ${birthYear}.`);

console.warn('Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”');

let message = 'Ma numesc ';

console.log(`${message}${accessor('Name')} si am ${accessor('Age')} ani.`);
