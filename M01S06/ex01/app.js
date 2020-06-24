let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  // Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
  topSpeed: 160,
  // Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    
    window.setTimeout (() => {
      this.turnLightsOff();
    }, 3000);
  },
  // faster deceleration possible
  decelerateMultiplier: function(index) {
    this.speed -= index;
  },
  // Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
  stop: function () {
    this.speed = 0;
  },
  // Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza. Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in care se folosesc proprietatile topSpeed si topReverseSpeed
  setSpeed: function (carSpeed) {
    let maxSpeedFwd = car.topSpeed;
    let maxSpeedBwd =car.topReverseSpeed;
    
    if (carSpeed > maxSpeedFwd) {
      this.speed = maxSpeedFwd;
    } else if (carSpeed < maxSpeedBwd) {
      this.speed = maxSpeedBwd;
    } else {
    this.speed = carSpeed;
    }
  }
};

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

// Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".

car.decelerateMultiplier(5);

console.log(`Viteza noua este ${car.speed} km/h.`);

// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.

car.stop();
console.log(`Masina s-a oprit, viteza ei este ${car.speed} km/h.`);

car.setSpeed(280);
console.log(`Masina ruleaza cu ${car.speed} km/h.`);
