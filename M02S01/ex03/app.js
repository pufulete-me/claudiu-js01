var Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed} km/h.`);
  },

  accelerate: function () {
    this.speed++;
    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;
    this.displaySpeed();
  }
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);