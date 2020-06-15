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
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    } , 
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    } ,
    {
      name: 'Andra',
      surname: 'Andrason',
      age: 65
    } 
  ]
};

let friendsLength = person.friends.length;

let message = person.friends.length === 1 ? 'Prietenul meu este ' : 'Prietenii mei sunt ';
if (friendsLength === 0) {
  message = 'Nu am prieteni.';
}

for (let i = 0; i < friendsLength; i++) {
  
  let friendName = person.friends[i].name;
  let friendSurname = person.friends[i].surname;
  
  let punctuation = ', ';
  if (i === friendsLength - 1) {
    punctuation = '.';
  } else if (i === friendsLength - 2) {
    punctuation = ' si ';
  }
  message += `${friendName} ${friendSurname}${punctuation}`;
}

console.log(message);
