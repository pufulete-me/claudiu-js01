// Folosind evenimentul resize al obiectului window, afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.” 
// Folosind evenimentul resize si proprietatea innerWidth al obiectului window, afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize. 
// Folosind evenimentul resize si proprietatea innerWidth al obiecutului window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat dimensiunea orizontala.”

//Folosind evenimentul resize al obiectului window si proprietatile innerWidth si
// innerHeight, la fiecare redimensionare a ferestrei, afiseaza intr-un paragraf mesajul: 
//“Fereastra are acum suprafata de xxx pixeli.”.

let p = document.querySelector('.message');
let p2 = document.getElementById('second-para');

let oldWidth = window.innerWidth;
let oldHeight = window.innerHeight;
let oldWindowArea = oldWidth * oldHeight;


function calculateWindowArea () {

  let p3 = document.getElementById('resolution-info');

  let width = window.innerWidth;
  let height = window.innerHeight;
  let windowResolution = width * height;
  let message = `Fereastra are suprafata de ${windowResolution} pixeli, rezolutia de ${height} x ${width} px.`;

  p3.innerText = message;
  return p3;
}

window.addEventListener('resize', () => {
  let newWidth = window.innerWidth;
  let newHeight =  window.innerHeight;

  p.innerText = newWidth;

  if (newWidth !== oldWidth) {
    p2.innerText = 'Fereastra si-a schimbat latimea.';
  } else {
    p2.innerText = '';
  }

  calculateWindowArea();

  oldWidth = newWidth;
});


// Folosind evenimentul de DOMContentLoaded si o functie reutilizabila afiseaza suprafata 
//ferestrei si la momentul incarcarii site-ului. 

window.addEventListener('DOMContentLoaded', calculateWindowArea);