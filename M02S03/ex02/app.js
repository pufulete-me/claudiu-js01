// Adauga folosind jQuery un paragraf cu clasa msg si textul “Acesta este un mesaj de eroare”.
// Dupa ce acesta a fost adaugat, adauga-i clasa error. 
// Salveaza intr-o variabila un element de tip sup cu textul 1 si adauga-l la inceputul paragrafului. 

$('<p>', {
  text: 'Acesta este un mesaj de eroare!',
  class: 'msg',
}).appendTo($('body'))
  .addClass('error') // adaugarea clasei suplimentare;
  // Optimizeaza exemplul astfel incat sa foloseasca chaining direct pe paragraf si sa elimine nevoia de o 
  //variabila pentru elementul sup.
  // .prepend()...;
let errNumber = 1;  
let supElem = $(`<sup>${errNumber}</sup>`).prependTo('.error').addClass('test');







