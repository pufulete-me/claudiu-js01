( () => {
  let showMessage = (message) => {
    let messageParagraph = document.createElement('p');

    messageParagraph.innerText = message;
    messageParagraph.classList.add('message');

    document.body.appendChild(messageParagraph);

    window.setTimeout(() => {
      messageParagraph.remove();
    }, 200);
}
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      console.log('Mausul este pe scena');
      showMessage('Mausul este pe scena');
    });

    stage.addEventListener('mouseout', () => {
      console.log('Mausus nu este pe scena');
      showMessage('Mausul nu este pe scena');
  });
})})();