(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeControlButtons = document.querySelector('#removeControlButtons');
    let eventBound = true;


    let showAlert = () => {
      alert('Butonul a fost apasat');
    }; 

    showButton.addEventListener('click', showAlert);

    toggleEventButton.addEventListener('click', (event) => {
      let toggleEventButton = event.target;
      let paragraphElement = document.createElement('p');
      paragraphElement.innerText = 'Alerta nu va fi afisata.';

      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        eventBound = false;
        toggleEventButton.innerText = 'Porneste Afisarea';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        toggleEventButton.innerText = 'Opreste Afisarea';
        paragraphElement.innerText = 'Alerta va fi afisata';
      }

      document.body.appendChild(paragraphElement);
    });

    removeControlButtons.addEventListener('click', () => {
      let confirmation = confirm('Esti sigur ca vrei sa elimini butoanele?');

      if (confirmation) {
        showButton.remove();
        toggleEventButton.remove();
      }
    });
  });
})();