var clau = {
  name: 'Clau',
  surname: 'ClauClau',
  friends: {}
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
};

clau.friends.larry = larry;
clau.friends.steven = steven;
clau.friends.andra = andra;

larry.friends.clau = clau;
steven.friends.clau = clau;
andra.friends.clau = clau;

larry.friends.steven = steven;
steven.friends.larry = larry;

andra.friends.steven = steven;
steven.friends.andra = andra;

larry.friends.andra = andra;
andra.friends.larry = larry;

carol.friends.andra = andra;
andra.friends.carol = carol;

delete clau.friends.larry;
delete larry.friends.clau;

console.log(clau);
console.warn('Afiseaza numele complet al lui Dragos folosind obiectul Larry.');
console.log(
  larry.friends.andra.friends.clau.name + ' ' + 
  larry.friends.andra.friends.clau.surname
);

console.warn('Afiseaza numele complet a lui Larry folosind obiectul Dragos.');
console.log(
  clau.friends.steven.friends.larry.name + ' ' + 
  clau.friends.steven.friends.larry.surname 
);

console.warn('Folosind obiectul Carol afiseaza numele complet al lui Dragos. ');
console.log(
  carol.friends.andra.friends.clau.name, carol.friends.andra.friends.clau.surname
);

console.warn('Folosind obiectul Anita afiseaza numarul total de caractere al numelui complet al lui Dragos.');
console.log(
  andra.friends.clau.name.length + andra.friends.clau.surname.length
);
console.log((andra.friends.clau.name + andra.friends.clau.surname).length);
