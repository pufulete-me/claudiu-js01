// Modifica metodele accelerate si decelerate astfel incat sa primeasca un coeficient
//  cu care sa mareasca sau sa reduca viteza si pastreaza conceptele de chaining.  
// Daca metodele nu sunt invocate cu un parametru explicit, sa incrementeze sau sa decrementeze cu o unitate.
// Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. 
// Afiseaza viteza noua in DOM.
// Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare (fara limite superioare sau inferioare pentru simplitate).
// Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
// Afiseaza noua valoare in DOM.


class Car {
  constructor(
    make,
    color,
    wheels,
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  displaySpeed() {
    console.log(this.speed);
  }

  setSpeed(index) {
    if (isNaN(index)) {
      console.log('you dont wanna see how this works, do you?');
      return this;
    }

    if (index) {
      this.speed = index;
    }

    this.displaySpeed();
    return this;
  }

  // 1st attempt at polymorphic accelerate
    // accelerate(index) {
    //   if(index) {
    //     this.speed += index;
    //   } else {
    //   this.speed++;
    //   }
    //   this.displaySpeed();
    //   return this;
    // }

  accelerate (index) {

    if (isNaN(index)) {
      console.log('you dont wanna see how this works, do you?');
      return this;
    }
    
    if (index < 0) {
      return this.decelerate(Math.abs(index));
    }

    if (index) {
      do {
        index--; 
        this.speed++;
      } while (index > 0)
    } else {
      this.speed++;
    }
    this.displaySpeed();
    return this;
  }

  decelerate (index) {

    if (isNaN(index) === true) {
      console.log('you dont wanna see how this works, do you?');
      return this;
    }

    if (index < 0) {
      return this.accelerate(Math.abs(index));
    }

    if (index) {
      do {
        index--;
        this.speed--;
      } while (index > 0)
    } else {
      this.speed--;
    }
    this.displaySpeed();
    return this;
  }
}
let audi = new Car('Audi', 'black', 4, 50);

  audi.accelerate(audi).decelerate('tina').accelerate(21);
  // audi.setSpeed(200);

let p = document.createElement('p');
p.innerText = `Masina se deplaseaza cu ${audi.speed} km/h.`;

document.body.appendChild(p);


