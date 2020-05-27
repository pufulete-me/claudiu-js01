var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('resultSphereArea');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
  resultSphereArea = 0;

  resultSphereArea = 4 * Math.PI * radius ** 2;

  elementResult.innerText = resultSphereArea;

  e.preventDefault();
}, false);