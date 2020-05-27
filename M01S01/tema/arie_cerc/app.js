var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('resultArea');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
    resultArea = 0;

  resultArea = Math.PI * radius ** 2;
  
  elementResult.innerText = resultArea;

  e.preventDefault();
}, false);


