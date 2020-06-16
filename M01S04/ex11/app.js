var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  }, 
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    } , 
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};

console.log(Object.keys(person));
console.log(Object.keys(person.skills));

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.');
var message = '';

Object.keys(person.skills).forEach(function(skillName) {
  if (person.skills[skillName] === true) {
    message += `${skillName} `;
  }
});

console.log(message.trim());

console.warn('Prin aceeasi metoda, afiseaza o lista inversata cu numele complet al prietenilor. ');
message = '';

var friendsKeysNames = Object.keys(person.friends);

friendsKeysNames.reverse();

friendsKeysNames.forEach(function (friendKey, i, friends) {
  let friend = person.friends[friendKey];
  let punctuation = ', ';

  message += `${friend.name} ${friend.surname}`;

  if (i === friends.length - 1) {
    punctuation = '.';
  }

  message += punctuation;
});

console.log(message);

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Steven si Carol.” folosind Object.keys()');
message = 'Prietenii mei sunt ';

friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.forEach(function (friendKey, i, friends) {
  let friendsLength = friends.length;
  let friend = person.friends[friendKey];
  let separator = ', ';

  message += friend.name;

  if (i === friendsLength - 1) {
    separator = '.';
  }

  if (i === friendsLength - 2) {
    separator = ' si ';
  }

  message += separator;
});

console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry este mai mare|mic decat Dragos.” etc…');

friendsKeysNames = Object.keys(person.friends);
friendsKeysNames.forEach(function (friendKey) {
  message = '';
  let friend = person.friends[friendKey];

  if (person.age - friend.age > 0) {
    message = `${friend.name} este mai mic decat ${person.name}.`;
  } else if (person.age - friend.age < 0) {
    message = `${friend.name} este mai mare decat ${person.name}.`;
  } else {
    message = `${friend.name} este de aceeasi varsta cu ${person.name}.`;
  }
  console.log(message);
});

console.warn('Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.');

Object.keys(person.skills).forEach(function (skillName, i, skills) {
  console.log(skillName.toLowerCase());
  // .toLowerCase() for lowercase, d'oh --
});

console.warn('Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. ');
// friendKeyNames could be used, it is already declared.
Object.keys(person.friends).forEach(function (friendKey) {
  let friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname}.`);
});

console.warn('Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()');
message = 'Prietenii mei sunt ';

Object.keys(person.friends).forEach(function (friendPosition, i){
  let friendKeyNames = Object.keys(person.friends);
  let friend = person.friends[friendPosition];
  let punctuation = i === friendsKeysNames.length - 1 ? '.' : ', ';
  message += `${friend.name} ${friend.surname}${punctuation}`;
});

console.log(message);

console.warn('Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”');

Object.keys(person.friends).forEach(function (friend) { 
  message = '';
  let myFriend = person.friends[friend];
  message += `${myFriend.name} are ${myFriend.age} ani.`;
  console.log(message);
});
