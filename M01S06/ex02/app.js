let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti';
let browserName = 'Browser';
let userName = 'Vasilica';

if (Array.isArray(userAgentString.match(/chrome/ig))) {
  message = 'Navighezi folosind Chrome sau Edge, au acelasi UserAgent';
  browserName = 'Edge or Chrome';
}

if (Array.isArray(userAgentString.match(/firefox/ig))) {
  message = 'Navighezi folosind Firefox';
  browserName = 'Firefox';
}

// Adauga mesaj pentru pentru Edge.
if (Array.isArray(userAgentString.match(/edge/ig))) {
  message = 'Navighezi folosind Chrome sau Edge, au acelasi UserAgent.';
  browserName = 'Edge or Chrome';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama`);
  let h1 = document.createElement('h1');
  h1.innerText = userName; 
  document.body.appendChild(h1);

  setTimeout(() => {
    h1.remove();
  }, 3000);
}, 3000);

// Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina paragraful initial din DOM folosind metoda .remove()
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove



