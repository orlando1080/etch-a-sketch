function createGrid(rows = 16) {
    const body = document.querySelector('body'),
          gridContainer = document.createElement('div');
    for (let i = 0; i < rows; i++) {
        const containerRow = document.createElement('div');
        containerRow.classList.add('container-row');
        gridContainer.appendChild(containerRow);
      gridContainer.classList.add('grid-container');
        for (let j = 0; j < rows; j++) {
            const containerItem = document.createElement('div');
            containerItem.classList.add('container-item');
            containerRow.appendChild(containerItem);
        }
        body.appendChild(gridContainer);
    }
    highlightDiv();

}

function highlightDiv() {
    const containerItems = document.querySelectorAll('.container-item');
    containerItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            item.classList.add('hover');
        });
    
    });
}

function createButton() {
  const button = document.createElement('button'),
        div = document.createElement('div'),
        body = document.querySelector('body');
  
  div.classList.add('button-container');
  button.textContent = 'Grid Size';
  div.appendChild(button);
  body.appendChild(div);
  
  const btn = document.querySelector('button');
  btn.addEventListener('click', promptGrid);
}

function removeGrid() {

  const rows = document.querySelectorAll('.container-row'),
  gridContainer = document.querySelector('.grid-container');
  gridContainer.remove();
  rows.forEach((row) => {
    row.remove();
  });
}

function promptGrid() {
  const gridSize = prompt('Select grid size between 1-100');
  removeGrid();
  createGrid(gridSize);
}

createButton();
createGrid();

