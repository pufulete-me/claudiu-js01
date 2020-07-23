let box = document.querySelector('.box');
let animationClass = 'animate-class';
let isClassApplied = false;

let toggleButton = document.getElementById('apply-style');
let darkenButton = document.getElementById('apply-black');


setTimeout(() => {
  box.classList.add(animationClass);
  isClassApplied = true;
  setTimeout(() => {
    box.classList.remove(animationClass);
    isClassApplied = false;
  }, 2000);
}, 2000);

toggleButton.addEventListener('click', (event) => {
  let btn = event.currentTarget;
  box.classList.toggle(animationClass);

  isClassApplied = !isClassApplied;

  btn.innerText = isClassApplied === true ? 'Elimina' : 'Aplica';


  // code for previous requirements
  // if (box.classList.contains(animationClass)) {
  //   btn.innerText = 'Aplica!';
  // } else {
  //   btn.innerText = 'Elimina!';
});

darkenButton.addEventListener('click', () => {
  // box.style.backgroundColor = '#000';
  box.setAttribute('style', 'background-color: black');
});
