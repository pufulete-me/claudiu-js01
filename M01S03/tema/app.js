var person = {
  firstName: 'Claudiu',
  lastName: 'Arama',
  email: 'clausclaus@email.com',
  birthYear: '1520',
  pets: [
    {
      name: 'Noro',
      species: 'stray dog',
      age: 22
    }, 
    {
      name: 'Bruno',
      species: 'black dog',
      age: 1
    }, 
    {
      name: 'Faina',
      species: 'stupid dog',
      age: 3
    }
  ],
  zipCode: 234234
};



console.warn('Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”. Nu uita de proprietatea length a arrayului pets. ');
console.log(`Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale`);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.');
console.log(`Am acelasi email din copilarie: ${person.email}`);

console.warn('Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”');
console.log(`Unul dintre cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} an`);


console.warn('Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.');

var currentDate = new Date(Date.now()).getFullYear();
var dogBirthYear = currentDate - person.pets[1].age;

console.log(`Anul de nastere al animalului meu ${person.pets[1].name} este ${dogBirthYear}.`);

console.warn('Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0. Foloseste anul curent.');

var firstDogBirthYear = currentDate - person.pets[0].age;

var myBirthYear = currentDate - person.birthYear;

var difference = myBirthYear - firstDogBirthYear; 
// nu a fost cea mai inspirata alegere de ani de nastere.

var firstDogName = person.pets[0].name;

console.log(`Intre ${person.firstName} si ${firstDogName} este o diferenta de ${difference} ani`);

console.warn('Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)');

var messageElement1 = document.getElementById('prop01');
var message1 = (`${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`);

messageElement1.innerText = message1;

console.log(message1);


console.warn('Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 ');

var messageElement2 = document.getElementById('prop02');
var message2 = person.pets[0].age - person.pets[2].age;

messageElement2.innerText = message2;

console.log(message2);


console.warn('Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”');

var messageElement3 = document.getElementById('prop03');

var message3 = (`Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`);

messageElement3.innerText = message3;

console.log(message3);

console.warn('Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.');

var messageElement4 = document.getElementById('prop04');

var pet1BirthYear = currentDate - person.pets[0].age;
var pet2BirthYear = currentDate - person.pets[1].age;
var pet3BirthYear = currentDate - person.pets[2].age;

var message4 = (`Animalele mele s-au nascut in ${pet1BirthYear}, ${pet2BirthYear}, ${pet3BirthYear}.`);

messageElement4.innerText = message4;

console.log(message4);