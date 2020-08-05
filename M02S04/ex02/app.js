// Mai adauga doua cutii de tip box, fiecare avand un checkbox asociat.
// Atunci cand checkbox-ul este apasat, cele trei butoane si cel dinamic
// vor controla casuta respectiva
// Revenind de la color la un input de tip text, nu aplica stil pe
// element decat daca in campul text se afla un string de format hex

document.addEventListener('DOMContentLoaded', () => {
  let hexTest = RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'ig');

  let mainButtons = document.querySelectorAll('.btn');
  // let boxes = document.querySelectorAll('.box');
  let colorInput = document.getElementById('color-input');
  let resetButton = document.getElementById('reset-bg');
  let checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((checkbox) => {
    mainButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let colorName = button.innerText.toLowerCase();
        if (checkbox.checked === true) {
          checkbox.parentElement.style.backgroundColor = colorName;
        }
      });

      colorInput.addEventListener('change', (event) => {
        let colorInput = event.currentTarget;
        let dynamicColorButton = colorInput.nextElementSibling;
        let selectedColor = colorInput.value;
        if (hexTest.test(colorInput.value)) {
          dynamicColorButton.style.backgroundColor = selectedColor;
        }
      });

      colorInput.nextElementSibling.addEventListener('click', () => {
        if (checkbox.checked === true && hexTest.test(colorInput.value)) {
          checkbox.parentElement.style.backgroundColor = colorInput.value;
        }
      });

      resetButton.addEventListener('click', () => {
        checkbox.parentElement.removeAttribute('style');
        checkbox.checked = false;
      });
    });
  });
});
