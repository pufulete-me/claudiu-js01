let person = {
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
    }
  ]
};

// Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested) afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.
// Poti folosi metoda pentru a converti numerele negative in pozitive. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Exemplu: 
// Intre Larry si Steven este o diferenta de x ani. 
// Intre Larry si Carol este o diferenta de x ani. 
// Intre Steven si Larry este o diferenta de y ani.


/**
 * 
 * @param {*} count 
 * @param {
 *  singular: 'an'.
 * plural: 'ani'
 * } words 
 */
function pluralize (count, words) {
  if (count > 1) {
    return words.plural || '';
  } else {
    return words.singular || '';
  }
}

for (let i = 0; i < person.friends.length; i++) {
  let outerFriend = person.friends[i];
  let ageDiff = Math.abs(outerFriend.age - person.age);
  
  console.log(`Intre ${person.name} si ${outerFriend.name} este o diferenta de ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`);

  for (let j = 0; j < person.friends.length; j++) {
    let innerFriend = person.friends[j];
    let ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    if (i !== j) {
      console.log(`Intre ${outerFriend.name} si ${innerFriend.name} este o diferenta de ${ageDiff} ${pluralize(ageDiff, {singular: 'an', plural: 'ani'})}.`);
    }
  }
}

console.log(`este o diferenta de 1 ${pluralize(1, {
  singular: 'an',
  plural: 'ani'
})}`);

