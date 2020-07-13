class Bicycle {
  constructor(
    top = 20,
    left = 20,
    frameColor,
    wheelColor,
    seatColor,
    speed,
    topSpeed = 50,
    reverseSpeed = 0,
    interval,
  ) {
    this.top = top;
    this.left = left;
    this.frameColor = frameColor;
    this.wheelColor = wheelColor;
    this.seatColor = seatColor;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.reverseSpeed = reverseSpeed;
    this.interval = interval;
  }

  isFrontLightOn = false;
  isBackLightOn = false;
  areFoglightsOn = false;
  

  bikeSpeed = document.createElement('p');
  frame = document.createElement('div');
  bike = document.createElement('div');
  bikeFrame = document.createElement('div');
  bikeFrameNegative = document.createElement('div');
  bikeWheelFrame = document.createElement('div');
  bikeLightFront = document.createElement('div');
  bikeLightBack = document.createElement('div');
  bikeSaddle = document.createElement('div');
  bikeSaddleFrame = document.createElement('div');
  bikeHandlebars = document.createElement('div');
  bikeHandgrips = document.createElement('div');
  bikeWheelFront = document.createElement('div');
  bikeWheelBack = document.createElement('div');


  moveFrame (x = 10, y = 10) {

    this.top = x;
    this.left = y;

    this.frame.style.cssText = `left: ${this.left}px; top: ${this.top}px`;
  }

  toggleFrontLight () {

    this.isFrontLightOn = !this.isFrontLightOn;

    this.bikeLightFront.classList.toggle('lights--on');
      
    }

  toggleBackLight () {

    this.isBackLightOn = !this.isBackLightOn;

    this.bikeLightBack.classList.toggle('lights--on');
  } 

  toggleFoglights () {

    this.bikeLightBack.classList.toggle('backFoglight--on');
    this.bikeLightFront.classList.toggle('frontFoglight--on');
  }
  
  makeFoglightsWork () {

    this.areFoglightsOn = !this.areFoglightsOn;

    if (this.areFoglightsOn) {
    this.interval = setInterval(() => {
      this.toggleFoglights()}, 500);
    }
      if (!this.areFoglightsOn) {
        clearInterval(this.interval);
        this.bikeLightBack.classList.remove('backFoglight--on');
        this.bikeLightFront.classList.remove('frontFoglight--on');
    }

  }


  changeBikeColor (color) {

    if (!color) {
      return;
    }

    this.frameColor = color;

    this.bikeFrame.style.borderTopColor = this.frameColor;
    this.bikeSaddleFrame.style.borderTopColor = this.frameColor;
    this.bikeHandlebars.style.backgroundColor = this.frameColor;
    this.bikeHandgrips.style.backgroundColor = this.frameColor;
    this.bikeSaddleFrame.style.backgroundColor = this.frameColor;
    this.bikeWheelFrame.style.backgroundColor = this.frameColor;
  }

  displayMovement () {

    let text = `this bike is moving at a speed of ${this.speed} km/h.`;

    if (this.speed <= this.reverseSpeed) {
      text = `this bike is not moving and it can't go backwards`;
    }

    let speedElement = document.querySelector('p');
    speedElement.innerText = text;
  }
  
  stopBike () {
    this.speed = 0;
    this.displayMovement();
  }

  setSpeed (newSpeed) {

    if (newSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displayMovement();
      return;
    }

    if (newSpeed < this.reverseSpeed) {
      this.speed = this.reverseSpeed;
      this.displayMovement();
      return;
    }
 
  } 


  createButton () {
    // assign parent node 
    let buttonHanger = this.frame.querySelector('div');
    let parentElem = buttonHanger.parentNode;
    // declare buttons
    let speedUpButton = document.createElement('button');
    let speedDownButton = document.createElement('button');
    let stopButton = document.createElement('button');
    let toggleFoglightsButton = document.createElement('button');
    // add button classes
    speedUpButton.classList.add('button', 'button--upSpeed');
    speedDownButton.classList.add('button', 'button--downSpeed');
    stopButton.classList.add('button', 'button--stop');
    toggleFoglightsButton.classList.add('button', 'button--fogs');
    // add button texts
    speedUpButton.innerText = `Faster`;
    speedDownButton.innerText = `Slower`;
    stopButton.innerText = `Stahp`;
    toggleFoglightsButton.innerText = `Toggle Foglights`;
    // create buttons in DOM
    parentElem.insertBefore(speedDownButton, buttonHanger);
    parentElem.insertBefore(stopButton, buttonHanger);
    parentElem.insertBefore(speedUpButton, buttonHanger);
    this.frame.appendChild(toggleFoglightsButton);


      
  speedUpButton.addEventListener ('click', () => {
    this.setSpeed(++this.speed);
    this.displayMovement();
  })

  speedDownButton.addEventListener ('click', () => {
    this.setSpeed(--this.speed);
    this.displayMovement();
  })

  stopButton.addEventListener ('click', () => {
    this.stopBike();
  });


  toggleFoglightsButton.addEventListener ('click', () => {
    this.makeFoglightsWork();

  });

  }

  renderBike () {
    
    this.frame.classList.add('frame');
    this.frame.style.cssText = `top: ${this.top}px; left: ${this.left}px;`;

    this.bike.classList.add('bike', 'frame__bike');
    this.frame.appendChild(this.bike);

    this.frame.appendChild(this.bikeSpeed);
    this.bikeSpeed.classList.add('bikeSpeedEditor')

    this.bikeFrame.classList.add('bike__frame');
  
    this.bike.appendChild(this.bikeFrame);

    this.bikeFrameNegative.classList.add('bike__frame--negative');
    this.bikeFrame.appendChild(this.bikeFrameNegative);

    this.bikeWheelFrame.classList.add('bike__wheelframe');
    this.bikeFrame.appendChild(this.bikeWheelFrame);

    this.bikeLightFront.classList.add('bike__light', 'bike__light--front');
    this.bikeFrame.appendChild(this.bikeLightFront);

    this.bikeLightBack.classList.add('bike__light', 'bike__light--back');
    this.bikeFrame.appendChild(this.bikeLightBack);

    this.bikeSaddle.classList.add('bike__saddle');
    this.bikeFrame.appendChild(this.bikeSaddle);

    this.bikeSaddleFrame.classList.add('saddle__frame');
    this.bikeSaddle.appendChild(this.bikeSaddleFrame);

    this.bikeHandlebars.classList.add('bike__handlebars');
    this.bikeFrame.appendChild(this.bikeHandlebars);

    this.bikeHandgrips.classList.add('bike__handgrips');
    this.bikeHandlebars.appendChild(this.bikeHandgrips);

    this.bikeWheelFront.classList.add('wheel', 'bike__wheel', 'bike__wheel--front');
    this.bike.appendChild(this.bikeWheelFront);

    this.bikeWheelBack.classList.add('wheel', 'bike__wheel', 'bike__wheel--back');
    this.bike.appendChild(this.bikeWheelBack);

    document.body.appendChild(this.frame);
  
    this.displayMovement();
    this.createButton();

  }
}

let myBike = new Bicycle(100, 100, 'red', 'yellow', 'black', 10, 100, 0);
myBike.renderBike();


