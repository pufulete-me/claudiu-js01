
// Folosind elementul stage, adauga un event de mouseover care sa afiseze in elementul paragraf mesajul: “Mouseul este pe scena” atunci cand mouseul face hover pe aceasta.
// Folosind mouseout, afiseaza in paragraf mesajul “Mouseul nu este pe scena”. 
// Afiseaza intr-un alt element de cate ori mouseul a fost pe scena.


let countIn = 0;
let countOut = 0;

let createMessage = (countIn, countOut) => {
  return `In: ${countIn}, Out: ${countOut}`;
}

let p = document.createElement('p');
document.body.prepend(p);
p.innerText = 'Mausul nu este pe scena';

let stageElem = document
  .querySelector('.stage');

  let p2 = document.createElement('p');
  p.after(p2);

stageElem.addEventListener('mouseover', () => {
  let message = 'Mausul este pe scena.';
  countIn++;

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
});

stageElem.addEventListener('mouseout', () => {
  let message = 'Mausul nu este pe scena.';
  countOut++;

  p2.innerText = createMessage(countIn, countOut);
  p.innerText = message;
})