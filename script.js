function createTitle() {
    const body = document.querySelector('body'),
        title = document.createElement('h1');
    title.textContent = 'Etch A Sketch';
    body.appendChild(title);
}

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
        gridContainer = document.querySelector('.grid-container'),
        knobsContainer = document.querySelector('.knobs-container');
    knobsContainer.remove();
    gridContainer.remove();
    rows.forEach((row) => {
        row.remove();
    });
}

function promptGrid() {
    let gridSize;
    do {
        gridSize = prompt('Select grid size between 16-100', 16);
        if (gridSize === null) {
            return;
        }
    } while (gridSize < 16 || gridSize > 100);
    removeGrid();
    createGrid(gridSize);
    createKnob();
}

function createKnob() {
    const knobsContainer = document.createElement('div'),
        knobContainer1 = document.createElement('canvas'),
        knobContainer2 = document.createElement('canvas'),
        body = document.querySelector('body');
    knobsContainer.classList.add('knobs-container');
    knobContainer1.classList.add('knobs');
    knobContainer2.classList.add('knobs');
    knobsContainer.appendChild(knobContainer1);
    knobsContainer.appendChild(knobContainer2);
    body.appendChild(knobsContainer);
    const c = document.querySelectorAll('.knobs');
    console.log(c);
    c.forEach((circle) => {
        const ctx = circle.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 75, 55, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    });
}

createTitle();
createButton();
createGrid();
createKnob();
