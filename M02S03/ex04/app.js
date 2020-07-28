// Foloseste elementul image pentru a afisa intr-un paragraf mesajul “Imaginea s-a incarcat.”, 
// folosind eventul load  pe imagine.

let image = document.getElementsByClassName('image')[0];  // not robust. if no image, error
let messagePara = document.querySelector('.message-para');
let myImage = document.getElementById('image-x');
let imageSrc = myImage.src;

image.addEventListener('load', () => {
  messagePara.innerHTML = `imaginea s-a incarcat`;
 
});

myImage.addEventListener('click', () => {
alert(`imaginea cu URL ${imageSrc} s-a incarcat`);
});