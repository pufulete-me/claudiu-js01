let breakpoint = 650;

function displayAlert () {
  alert('Butonul a fost apasat!');
}

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  let buttonElem = document.querySelector('.btn');
  
  if (windowWidth >= breakpoint) {
    buttonElem.addEventListener('click', displayAlert);
  }

  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if (windowWidth >= breakpoint) {
      buttonElem.addEventListener('click', displayAlert);
    } else {
      buttonElem.removeEventListener('click', displayAlert);
    }
  });
});