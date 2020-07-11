class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;
  }
  
  setPosX(x) {
    this.posX = x;
    this.shape.style.top = `${this.posX}px`;
  }

  setPosY(y) {
    this.posY = y;
    this.shape.style.left = `${this.posY}px`;
  }

  setWidth(w) {
    this.width = w;
    this.shape.style.width = `${this.width}px`;
  }

  setHeight(h) {
    this.height = h;
    this.shape.style.height = `${this.height}px`;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }

  renderShape () {

    this.shape = document.createElement('div');
    this.shape.classList.add('shape');
    this.shape.style.top = `${this.posX}px`;
    this.shape.style.left = `${this.posY}px`;
    this.shape.style.width = `${this.width}px`;
    this.shape.style.height = `${this.height}px`;
    this.shape.style.borderColor = this.borderColor;
    this.shape.style.backgroundColor = this.color;

    document.body.appendChild(this.shape);
  }

}

class Square extends Shape {
  constructor(
    posX,
    posY,
    side,
    color,
    borderColor,
  ) {
    super(
      posX,
      posY,
      side,
      side,
      color,
      borderColor,
    )

    this.renderShape();
  }

}

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor,
  ) {
    super(
      posX,
      posY, 
      radius, 
      radius, 
      color, 
      borderColor
    );

    this.renderShape();
    this.borderRadius = this.setBorderRadius(radius);
    // pare barbaric, sa pun clasa circle pe fiecare obiect nou. e vreun mod mai elegant?
    // daca oricum creez fiecare obiect cu proprietatile din definitie, mai e nevoie de restrictive ca ''shape--rectangle' in cazul de fata?
    this.shape.classList.add('shape--circle');

  }

  setBorderRadius(br) {

    this.shape.style.borderRadius = `${br}px`;

    return br;
  }

}

let square = new Shape (0, 100, 200, 50, 'red', 'black');
square.renderShape();

// let test = new Square(10, 200, 140, 'black', 'red');


// let cerc = new Circle (0, 250, 90, 'pink', 'yellow');
// cerc.setBorderRadius(20);

