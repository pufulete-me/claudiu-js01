//Folosind fisierele de la exercitiul 09 creeaza o aplicatie folosind JavaScript
// nativ care atunci cand pagina se incarca sub 500 de pixeli, ascunde lista
// neordonata si o afiseaza sau o ascunde atunci cand se apasa headerul h1.
// Atunci cand fereastra se redimensioneaza peste 500 pixeli, afiseaza lista si
// elimina event handlerul de click de pe h1. Daca se redimensioneaza sub 500,
// adauga handlerul la loc astfel incat lista sa poata fi ascunsa sau afisata.

document.addEventListener('DOMContentLoaded', () => {
  let breakpoint = 501;
  let isHidden = false;

  let headerElem = document.getElementById('header');
  let ulElem = document.getElementById('list-element');

  function toggleUl() {
    isHidden = !isHidden;

    if (isHidden === false) {
      ulElem.style.display = '';
    } else {
      ulElem.style.display = 'none';
    }
  }

  let windowWidth = window.innerWidth;

  if (windowWidth < breakpoint) {
    ulElem.style.display = 'none';
    isHidden = true;

    headerElem.addEventListener('click', toggleUl);
  }

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth >= breakpoint) {
      ulElem.style.display = '';
      headerElem.removeEventListener('click', toggleUl);
    }

    if (windowWidth < breakpoint) {
      headerElem.addEventListener('click', toggleUl);
      ulElem.style.display = 'none';
    }
  });
});
