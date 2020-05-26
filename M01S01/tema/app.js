var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var length = inputLength.value || 0,
  width = inputWidth.value || 0,
  height = inputHeight.value || 0,
  result = 0;
  
  result = length * width * height;

  elementResult.innerText = result;

  e.preventDefault();
}, false);
