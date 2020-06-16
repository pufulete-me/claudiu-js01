let number = +window.prompt('Introdu numarul');
let upperLimit = +window.prompt('introdu limita superioara');
let index = 5;

let messageElement1 = document.getElementById('prop1');
let multiples = '';

if (upperLimit < index) {

  messageElement1.innerText = `incearca din nou, limita superioara este inferioara lui ${index}`;
  console.log(messageElement1);
} else if (number > upperLimit) {
  
  messageElement1.innerText = 'incearca din nou, numarul este superior limitei superioare';
  console.log(messageElement1);
  
} else {

  while (index <= upperLimit) {
    
    if (index % number === 0) {
      multiples += `${index} `;
    }
    index++;
    }

    messageElement1.innerText =`toti multiplii numarului ${number} intre 5 si ${upperLimit} sunt: ${multiples}`;
};

console.log(`toti multiplii numarului ${number} intre 5 si ${upperLimit} sunt: ${multiples}`);







