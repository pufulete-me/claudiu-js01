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
    } ,
    andra : {
      name: 'Andra',
      surname: 'Andrason',
      age: 65
    }
  }
};

let friendLength = Object.keys(person.friends).length;
let connector;

let message = friendLength === 1 ? 'Prietenul meu este ' : 'Prietenii mei sunt ';
if (friendLength === 0) {
  message = 'Nu am prieteni.';
}

Object.keys(person.friends).forEach(function (friend, i) {
  let myFriend = person.friends[friend];
  let connector = ', ';
  if (i === friendLength - 1) {
    connector = '.';
  } else if (i === friendLength - 2) {
    connector = ' si ';
  }
  message += `${myFriend.name} ${myFriend.surname}${connector}`;

});

console.log(message);


