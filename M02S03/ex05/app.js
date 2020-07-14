// Folosind evenimentul resize al obiectului window, afiseaza o alerta care sa contina mesajul: “Fereastra si-a schimbat dimensiunea.” 
// Folosind evenimentul resize si proprietatea innerWidth al obiectului window, afiseaza intr-un paragraf in DOM noua latime a ferestrei dupa fiecare eveniment de resize. 
// Folosind evenimentul resize si proprietatea innerWidth al obiecutului window, afiseaza in alt paragraf mesajul: “Fereastra si-a schimbat dimensiunea orizontala.”

let p = document.querySelector('.message');
let p2 = document.getElementById('second-para');
let oldWidth = window.innerWidth;

window.addEventListener('resize', () => {
  let newWidth = window.innerWidth;
  p.innerText = newWidth;

  if (newWidth !== oldWidth) {
    p2.innerText = 'Fereastra si-a schimbat latimea.';
  } else {
    p2.innerText = '';
  }

  oldWidth = newWidth;
});

