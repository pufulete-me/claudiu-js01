var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('resultVolume');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
    resultVolume = 0;

  resultVolume = 4 / 3 * Math.PI * radius ** 3;
  
  elementResult.innerText = resultVolume;

  e.preventDefault();
}, false);


