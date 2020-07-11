class Car {
  constructor (
    left = 100,
    top = 100,
    color,
    topColor,
    wheelColor,
    wheelCapColor,
  ) {
    this.left = left;
    this.top = top;
    this.color = color;
    this.topColor = topColor ? topColor : color;
    this.wheelColor = wheelColor ? wheelColor : color;
    this.wheelCapColor = wheelCapColor;
  }

  areLightsOn = false;
  areBreakLightsOn = false;
  areHazardsOn = false;

  // same thing as running this.frame = doc.. in the constructor 
  frame = document.createElement('div');
  car = document.createElement('div');
  carTop = document.createElement('div');
  carBody = document.createElement('div');
  lightBack = document.createElement('div');
  lightFront = document.createElement('div');
  wheelBack = document.createElement('div');
  wheelFront = document.createElement('div');
  wheelCapBack = document.createElement('div');
  wheelCapFront = document.createElement('div');

  turnLightsOn () {
    this.areLightsOn = true;

    this.lightFront.classList.add('light--on');
  }

  turnLightsOff () {
    this.areLightsOn = false;

    this.lightFront.classList.remove('light--on');
  }

  engageBreak () {
    this.areBreakLightsOn = true;

    this.lightBack.classList.add('light--on');
  }

  disengageBreak () {
    this.areBreakLightsOn = false;

    this.lightBack.classList.remove('light--on');
  }

  toggleHazard () {

    this.areHazardsOn = !this.areHazardsOn;

    this.lightBack.classList.toggle('light--on');
    this.lightFront.classList.toggle('light--on');

    // if (this.areHazardsOn) {
    //   console.log('The hazard lights are on');
    // } else {
    //   console.log('The hazard lights are off');
    // }
    
  }
  moveFrame (left, top) {
    if (!left || !top) {
      return;
    }

    this.left = left;
    this.top = top;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px`;
  }

  setColor (color) {
    if (!color) {
      return;
    }

    this.color = color;

    this.car.style.backgroundColor = this.color;
  }

  setTopColor (color) {
    if (!color) {
      return;
    }

    this.topColor = color;
    this.carTop.style.backgroundColor = this.topColor;

  }

  // method for changing wheel color
  setWheelColor (color) {
    if (!color) {
      return;
    }

    this.wheelColor = color;
    this.wheelFront.style.backgroundColor = this.wheelColor;
    this.wheelBack.style.backgroundColor = this.wheelColor;
  }

  //method for changing hubcap color
  setWheelCapColor (color) {
    if (!color) {
      return;
    }

    this.wheelCapColor = color;
    this.wheelCapFront.style.backgroundColor = this.wheelCapColor;
    this.wheelCapBack.style.backgroundColor = this.wheelCapColor;
  }

  render () {
    // creates frame with the frame class
    this.frame.classList.add('frame');
    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px`;


    // adds classes to the div 
    this.car.classList.add('car', 'frame__car');
    this.car.style.backgroundColor = this.color;

    // creates the div in the DOM, in the frame
    this.frame.appendChild(this.car);

    // create car top with the car__top class
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.topColor;
    this.car.appendChild(this.carTop);

    // create car__body with classes
    this.carBody.classList.add('car__body');
    this.car.appendChild(this.carBody);

    // create lights
    this.lightBack.classList.add('light', 'light--back');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.appendChild(this.lightFront);
    this.carBody.appendChild(this.lightBack);

    // create wheels and color
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.appendChild(this.wheelBack);
    this.carBody.appendChild(this.wheelFront);
    this.wheelBack.style.backgroundColor = this.wheelColor;
    this.wheelFront.style.backgroundColor = this.wheelColor;


    // create hubcaps and color
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelBack.appendChild(this.wheelCapBack);
    this.wheelFront.appendChild(this.wheelCapFront);
    this.wheelCapBack.style.backgroundColor = this.wheelCapColor;
    this.wheelCapFront.style.backgroundColor = this.wheelCapColor;

    // run 1st appendChild last, it will paint the DOM, will store in memory, last appendChild will bring all the elements in the DOM
    document.body.appendChild(this.frame);
  
  }

}

let car = new Car(15, 250, 'teal', 'green', 'black', 'purple');
car.render();
// car.engageBreak();
// car.disengageBreak();

//  am incercat sa pun setInterval in clasa dar nu am putut. vsc imi dadea autocomplete cu toata sintaxa functiei, cu () => si cu 'interval' pentru valoarea numerica a intervalului, dar se umplea imediat de erori. e posibil sa nu mearga pe clasa metoda asta?

setInterval(() => {
  car.toggleHazard()
}, 500);






