var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987, 
  pets: [
  {
    name: 'Twix',
    species: 'papagal',
    age: 4
  },
  {
    name: 'Mars',
    species: 'caine',
    age: 2, 
  }, 
  {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, 
  {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

console.warn('Afiseaza in consola folosind metoda forEach() numele fiecarui animal.');
let message;

person.pets.forEach(function (pet, i) {
  console.log(pet.name);
});

console.warn('Folosind o bucla for afiseaza suma anilor animalelor. ');
let sumYears = 0;

for (let i = 0; i < person.pets.length; i++) {
  sumYears += person.pets[i].age;
}

console.log(sumYears);

console.warn('Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.');

person.pets.forEach(function(pet) {
  let message = '';
  message += `${pet.name} este un ${pet.species} si are ${pet.age} ani.`;
  console.log(message);
});

console.warn('Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).');
let currentYear = new Date().getFullYear();
let personAge = currentYear - person.birthYear;

for (let i = 0; i < person.pets.length; i++) {
  let message = '';
  let ageDiff = Math.abs(personAge - person.pets[i].age);
  message += `Intre ${person.firstName} si ${person.pets[i].name} este o diferenta de ${ageDiff} ani.`;
  console.log(message);
}

console.warn('Folosind o bucla for afiseaza in ordine inversa numele animalelor din array. ');
message = '';

let i;
for (i = person.pets.length - 1; i >= 0; i--) {
  let punctuation = i !== 0 ? ', ' : '.';
  message += `${person.pets[i].name}${punctuation}`;
}
console.log(message);

console.warn('La fel si cu forEach()');
message = '';

person.pets.forEach(function(pet) {
  message += pet.name + ' ';
});

console.log(message);

console.warn('Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.” ');

message = '';
let oldestPetAge = person.pets[0].age;
let oldestPetName;

for (let i = 1; i < person.pets.length; i++) {
  if (oldestPetAge < person.pets[i].age) {
    oldestPetAge = person.pets[i].age;
    oldestPetName = person.pets[i].name;
  }
  
}
ageDiff =personAge - oldestPetAge;

message += `${oldestPetName} este cel mai batran animal pe care il am si este cu ${ageDiff} ani mai mic decat mine`;
console.log(message);

console.warn('Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.');

message = 'Am ';
person.pets.forEach(function(pet, i, allPets) {
  let connector = ', ';
  if (i === allPets.length - 1) {
    connector = '.';
  } else if (i === allPets.length - 2) {
    connector = ' si ';
  }
  message += `${pet.species}${connector}`;
});

console.log(message);
