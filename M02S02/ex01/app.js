// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'clase de css',
});
let $body = $('body');

$p.appendTo($body);
// $p.appendTo($('body')); - same thing, classier


// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/ 
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM. 
// https://api.jquery.com/append/ 
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/ 

let $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});

$body.append($p2);

setTimeout (() => {
  $p2.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text() 
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip div cu clasa container apoi imbraca cele doua paragrafe cu el folosind metoda .wrap() 
// https://api.jquery.com/wrap/ 
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

// let $passwordSpan = jQuery('<span>', {...});
let $passwordSpan = $('<span>', {
  id: 'example',
  text: 'parolaMea',
}).appendTo($p2);

// $passwordSpan.appendTo($p2); - same thing as above

let wrappingDiv = $('<div>', {
  class: 'container',
});

// alternatives

//  1
// let demoSet = $('nimic');
// demoSet = demoSet.add($p);
// demoSet = demoSet.add($p2);
// demoSet.wrap(wrappingDiv);

// 2
// $('p').wrap(wrappingDiv);

// 3
// $p.add($p2).wrap(wrappingDiv);

// 4
// $('.nimic').add($p).add($p2).wrap(wrappingDiv);

// 5

$body.append(wrappingDiv);
$p.appendTo(wrappingDiv);
$p2.appendTo(wrappingDiv);

$('<h2>mesaje</h2>').prependTo(wrappingDiv); // - cringy one liner. use above seen declaration, don't be a hillbilly.

// alternative
//  let msg = 'Mesaje';
// $(`<h2>${msg}</h2>`).prependTo(wrappingDiv);

// Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/ 
// Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
// https://api.jquery.com/before/ 
// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
// https://api.jquery.com/prepend 
// Creeaza un element de tip h1 cu textul: “Invat jQuery” si folosind metoda .before() adauga-l deasupra divului .container 
// Adauga prin orice metoda un paragraf cu textul “Documentatia jQuery poate fi gasita aici.” Cuvantul aici va fi o ancora care va deschide intr-o pagina noua documentia jQuery. Atributele target si href pot fi setate in acelasi fel cum sunt setate cele text sau class.

let navDiv = $('<div>', {
  class: 'navigator container',
});

wrappingDiv.after(navDiv);

let anchorElem = $('<a>', {
  text: 'Primul Link',
  class: 'nav-link',
});

anchorElem.appendTo(navDiv);

let heading2 = $('<h2>', {
  text: 'Navigatie'
});

anchorElem.before(heading2);

let supElem = $('<sup>', {
  text: '1',
});
supElem.prependTo(anchorElem);

let heading1 = $('<h1>', {
  text: 'Invat jQuery',
});

wrappingDiv.before(heading1);

let jQueryLink = $('<a>', {
  text: 'aici',
  href: 'https://jquery.com/',
  target: '_blank',
});

let testPara = $('<p>',{
  text: `Documentatia jQuery poate fi gasita `,
});

navDiv.after(testPara);
testPara.append(jQueryLink);




