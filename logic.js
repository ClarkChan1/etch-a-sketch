// global variables
let gridContainer = document.querySelector('.grid-container');
let grid;
// functions that are called, basically the actual script that executes
makeGridContainer();
makeClearButton();
makeGridResizeButton();
makeGrid(16);

// the functions

function makeGridContainer() {
  gridContainer.style.cssText = "display:flex; flex-direction:column; gap:20px; width:256px;";
}

function clearGrid() {
  let elements = grid.children;
  for (let a = 0; a < elements.length; a++) {
    elements[a].style.cssText = "background:white";
  }
}

function removeGrid(){
  gridContainer.removeChild(grid);
}

function makeClearButton() {
  let clearButton = document.createElement('button');
  clearButton.textContent = "clear board";
  clearButton.addEventListener('click', clearGrid);
  gridContainer.appendChild(clearButton);
}

function makeGridResizeButton() {
  let resizeButton = document.createElement('button');
  resizeButton.textContent = "change dimensions";
  resizeButton.addEventListener('click', function() {
    let chosenDimension = prompt("enter number that represents rows and columns:");
    removeGrid();
    makeGrid(+chosenDimension);
  });
  gridContainer.appendChild(resizeButton);
}

function makeGrid(dimension) {
  // create the actual grid
  grid = document.createElement("div");
  grid.style.cssText = "height:256px; width:256px; border: 5px solid black; display:grid;";
  grid.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  // make all of the child elements of random background colors and add them to the grid
  for (let a = 0; a < (dimension * dimension); a++) {
    let gridElement = document.createElement('div');
    // make each grid element a random color
    // gridElement.style['background-color'] = '#' + Math.random().toString(16).substr(-6);
    gridElement.style['background-color'] = 'white';
    // add an eventlistener for hovering over each square so that it turns a different color when hovered hovered over
    gridElement.addEventListener("mouseover", function() {
      gridElement.style.cssText = "background:black";
    });
    grid.appendChild(gridElement);
  }
  gridContainer.appendChild(grid);
}
