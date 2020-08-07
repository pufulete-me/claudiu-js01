document.addEventListener('DOMContentLoaded', () => {
  let stage = document.querySelector('.stage');
  let hero = document.querySelector('.hero');
  let controls = document.querySelector('.controls');

  controls.addEventListener('click', (event) => {
    if (event.target !== undefined && event.target.nodeName === 'BUTTON') {
      let button = event.target;
      console.log(event.target);
      let direction = button.id.split('-')[1];
      let axis = 'x';
      let normalizedDirection = 'fw';

      switch (direction) {
        case 'right':
          axis = 'x';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          break;

        case 'left':
          axis = 'x';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          break;

        case 'up':
          axis = 'y';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          break;

        case 'down':
          axis = 'y';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          break;
        case 'leftUp':
          axis = 'y';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          axis = 'x';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          break;
        case 'rightUp':
          axis = 'y';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          axis = 'x';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          break;
        case 'leftDown':
          axis = 'y';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          axis = 'x';
          normalizedDirection = 'back';
          moveHero(axis, normalizedDirection);
          break;
        case 'rightDown':
          axis = 'y';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          axis = 'x';
          normalizedDirection = 'fw';
          moveHero(axis, normalizedDirection);
          break;
        case 'middle':
          // e vreun mod mai indicat pentru pozitionarea pe mid?
          let midPositionX = stage.clientWidth / 2 - hero.clientWidth / 2;
          let midPositionY = stage.clientHeight / 2 - hero.clientHeight / 2;
          hero.style['left'] = `${midPositionX}px`;
          hero.style['top'] = `${midPositionY}px`;
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    // visualize the event
    // console.log(event);
    console.log(event.code);
    let axis;
    let normalizedDirection;
    let keyPress = event.code;

    switch (keyPress) {
      case 'Numpad6':
        axis = 'x';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        break;

      case 'Numpad4':
        axis = 'x';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        break;

      case 'Numpad8':
        axis = 'y';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        break;

      case 'Numpad2':
        axis = 'y';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        break;
      case 'Numpad7':
        axis = 'y';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        axis = 'x';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        break;
      case 'Numpad9':
        axis = 'y';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        axis = 'x';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        break;
      case 'Numpad1':
        axis = 'y';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        axis = 'x';
        normalizedDirection = 'back';
        moveHero(axis, normalizedDirection);
        break;
      case 'Numpad3':
        axis = 'y';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        axis = 'x';
        normalizedDirection = 'fw';
        moveHero(axis, normalizedDirection);
        break;
      case 'Numpad5':
        // e vreun mod mai indicat pentru pozitionarea pe mid?
        let midPositionX = stage.clientWidth / 2 - hero.clientWidth / 2;
        let midPositionY = stage.clientHeight / 2 - hero.clientHeight / 2;
        hero.style['left'] = `${midPositionX}px`;
        hero.style['top'] = `${midPositionY}px`;
    }
  });

  function moveHero(axis, direction) {
    let step = 20;
    let cssProperty = axis === 'x' ? 'left' : 'top';
    let currentPosition =
      hero.style[cssProperty].length === 0 ? '0px' : hero.style[cssProperty];

    let unitlessPosition = parseInt(currentPosition);

    let newPosition =
      direction === 'fw' ? unitlessPosition + step : unitlessPosition - step;

    if (newPosition <= 0) {
      newPosition = 0;
    }

    if (axis === 'y' && newPosition >= stage.clientHeight - hero.clientHeight) {
      newPosition = stage.clientHeight - hero.clientHeight;
    }

    if (axis === 'x' && newPosition >= stage.clientWidth - hero.clientWidth) {
      newPosition = stage.clientWidth - hero.clientWidth;
    }

    hero.style[cssProperty] = `${newPosition}px`;
  }
});
