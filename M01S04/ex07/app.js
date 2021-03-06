var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache'
  },
  {
    name: 'Larry',
    surname: 'Larryson'
  }, 
  {
    name: 'Steven',
    surname: 'Stevenson'
  },
  {
    name: 'Carol',
    surname: 'Carolson'
  },
  {
    name: 'Andra',
    surname: 'Andrason'
  }
]; 

console.warn('Folosind o bucla for afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.');
var message = '';
var arrayLength = friends.length;
var i = 0;

for (i = 0; i < arrayLength; i++) {
// var friend = friends[i];
  var space = i !== arrayLength - 1 ? ', ' : '';
  message += `${friends[i].surname}${space}`;
}

console.log(message);

console.warn('Afiseaza numele complet al tuturor prietenilor, insa o data ce l-ai gasit pe steven, opreste bucla cu ajutorul keywordului break.');
message = '';

for (i = 0; i < arrayLength; i++) {

  message += `${friends[i].name} ${friends[i].surname}`;

  if (friends[i].name === 'Steven') {
    message += '.';
    break;
  } else {
    message += ', ';
  }
}

console.log(message);

console.warn('Folosind keywordul continue, afiseaza numele complet al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare de 13.');
message = '';
var nameLength = 0;

for (i = 0; i < arrayLength; i++) {
  if ((friends[i].name + friends[i].surname).length <= 13) {
    continue;
  }
  
  console.log(`${friends[i].name} ${friends[i].surname}`);
}

console.warn('Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.');
message = '';

for (i = 0; i < arrayLength; i++) {
  var space = i !== arrayLength - 1 ? ', ' : '.';
  message += `${friends[i].name}${space}`;
}

console.log(message);

console.warn('Afiseaza numele complet al tuturor prietenilor.');

message = '';

for (i = 0; i < arrayLength; i++) {
  var space = i !== arrayLength - 1 ? ', ' : '.';
  message += `${friends[i].name} ${friends[i].surname}${space}`;
}

console.log(message);

console.warn('Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9.');
message= '';

for (i = 0; i < arrayLength; i++) {
  var space = i !== arrayLength - 1 ? ', ' : '.';
  if (friends[i].surname.length >= 9 ) {
    break;
  }
  message += `${friends[i].name} ${friends[i].surname}${space}`;
}

console.log(message);
