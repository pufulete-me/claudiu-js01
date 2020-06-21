// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime. 
// Adauga un buton pe care scrie Elimina Evenimentul. 
// La click pe acest buton nou, foloseste metoda removeEventListener al variabilei button si foloseste numele clickHandler ca parametru.


let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');

let clickHandler = () => {
  alert('Ai apasat Butonul!');
};
// callback 
button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});


// Adauga un buton nou in document cu id-ul query si folosind addEventListener() ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului. 
// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.
// Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

let queryButton = document.getElementById('query');
let paraMessage = document.getElementById(`message`);

let ageQuery = () => {
  let ageVar;
  do {
    ageVar = parseInt(window.prompt('Ce varsta ai?'));

  } while (isNaN(ageVar))

  console.log(`Ai ${ageVar} ani.`);
  paraMessage.innerText = `Ai ${ageVar} ani.`;

}

queryButton.addEventListener('click', ageQuery);







