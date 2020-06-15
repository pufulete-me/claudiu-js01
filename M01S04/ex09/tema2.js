let lowerLimit;
let upperLimit;
let inputNumber;

do {
  lowerLimit = +window.prompt('Introdu o limita inferioara');

} while (isNaN(lowerLimit))

do {
  upperLimit = +window.prompt('Introdu o limita superioara');

} while (isNaN(upperLimit))

  do {
    inputNumber = +window.prompt('Introdu un numar');

  } while (isNaN(inputNumber))


let messageElement1 = document.getElementById('prop');
let multiples = '';
let index = lowerLimit;

if (upperLimit < lowerLimit) {
  messageElement1.innerText = `Limita superioara si cea inferioara nu isi respecta numele`;
  
} else if (inputNumber > upperLimit) {

  messageElement1.innerText = `Numarul nu are multiplii in intervalul ales`;

} else if ((inputNumber > (upperLimit - lowerLimit)) && (inputNumber < lowerLimit)) {

  messageElement1.innerText = `Numarul nu are multiplii in intervalul ales`;
}

else {

do {

  if (index % inputNumber === 0) {
    multiples += `${index} `;
  }

  index++;
} while (index <= upperLimit)

messageElement1.innerText = `Multiplii numarului ${inputNumber} in intervalul dintre ${lowerLimit} si ${upperLimit} sunt: ${multiples}`;
};

