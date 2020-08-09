// Modifica exercitul quad.js astfel incat daca este primit un singur parametru, consola va afisa
// Patratul are suprafata de xxx.
// Daca primeste 2 parametrii, consola va afisa
// Dreptunghiul are suprafata de xxx.
// Daca nu primeste parametrii consola va afisa
// Nu am primit parametrii. (while)

let length = process.argv[2];
let width = process.argv[3];

while (!isNaN(length)) {
  while (!isNaN(width)) {
    if (length === width) {
      return console.log(`Suprafata patratului este ${length ** 2}`);
    }
    return console.log(`Suprafata dreptunghiului este ${length * width}`);
  }
  return console.log(`Suprafata patratului este ${length ** 2}`);
}
while (isNaN(length)) {
  return console.log(`Nu am primit parametrii`);
}
