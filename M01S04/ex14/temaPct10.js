var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html', 
    'javascript',
    'css',
    'c++',
    'node.js',
    'jquery',
  ],
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
    }, 
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    },
    {
      name: 'Andra',
      surname: 'Andrason',
      age: 28
    }
  ]
};

console.warn('Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.');

let message;
let nextMessage;
let arrayLength = person.friends.length;
let myFriend = person.friends;

for (let i = 0; i < arrayLength; i++ ) {

  let ageDiff = Math.abs(person.age - myFriend[i].age);

  message = `Intre ${person.name} si ${myFriend[i].name} este o diferenta de ${ageDiff} ani.`;
  console.log(message);

  for( let j = i + 1 ; j < arrayLength; j++) {

    let ageDiff = Math.abs(myFriend[i].age - myFriend[j].age);

    nextMessage = `Intre ${myFriend[i].name} si ${myFriend[j].name} este o diferenta de ${ageDiff} ani.`;
    
    console.log(nextMessage);
  }

}


