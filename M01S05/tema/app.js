// Creeaza o functie polimorfica pentru calcularea suprafetelor. 
// Daca primeste un parametru, sa calculeze suprafata unui patrat. 
// Daca primeste doi, a unui dreptunghi. 
// Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. 
// Foloseste structura switch.


function surfaceCalculation(Length, Width, Height) {
  switch (arguments.length) {
    case 3 :
      return 2 * (Length + Width) * Height + 2 * Length * Height;
      break;
    case 2 :
      return Length * Width;
      break;
    case 1 : 
      return Length ** 2;
      break;
    default :
      alert('You have entered the parameters for a shape we are not prepared to understand!');
  }
}

console.log(surfaceCalculation(20, 10, 10));

// Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor 
// cercuri cu raza de 2, 20 si 16. 

function calculateCircleArea(Radius) {
  return (Math.PI * surfaceCalculation(Radius)).toFixed(2);
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

// Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
// Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”


let pet = {
  getName: () => {
    return 'Pitpalac';
  },

  getSpecies: () => {
    return 'caine';
  },

  getAge: () => {
    return 22;
  }
};


console.log(`${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`);

// Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge 
// varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”

let petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);

