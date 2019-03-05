// Select color input
let boxColor = '#000000';

// Select size input
let gridWidth = 1;
let gridHeight = 1;

document.querySelector('#sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();

  gridHeight = event.target.elements[0].valueAsNumber;
  gridWidth = event.target.elements[1].valueAsNumber;

  makeGrid(gridWidth, gridHeight);
});

document.querySelector('#colorPicker').addEventListener('change', function(event) {
    boxColor = event.target.value;
});

function colorBox() {
  this.style.backgroundColor = boxColor;
}

function makeGrid(width, height) {

  // Find table element
  let t = document.querySelector('#pixelCanvas');

  // Remove existing table rows and cells
  while (t.hasChildNodes()) {
    t.removeChild(t.firstChild);
  }

  // Create grid
  for (let y = 0; y < height; y++) {
    var tr = document.createElement('tr');
    for(let x = 0; x < width; x++) {
      var td = document.createElement('td');

      // Add listener to grid cell
      td.addEventListener('click', colorBox);

      tr.appendChild(td);
    }
    t.appendChild(tr);
  }
}
