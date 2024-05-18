function createTitle() {
    const body = document.querySelector('body'),
    title = document.createElement('h1');
    title.textContent = 'Etch A Sketch';
    body.appendChild(title);
}

console.log("This is a test title");

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
    blackColour();

}

function multiColour() {
    const containerItems = document.querySelectorAll('.container-item');
    containerItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            const randomColour = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
            item.style.backgroundColor = randomColour;
        });
    
    });
}

function blackColour() {
    const containerItems = document.querySelectorAll('.container-item');
    containerItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = 'black';
        });
    
    });
}

function createButtons() {
    const sizeButton = document.createElement('button'),
    div = document.createElement('div'),
    blackButton = document.createElement('button'),
    multiColourButton = document.createElement('button'),
    body = document.querySelector('body');
    
    div.classList.add('button-container');
    sizeButton.textContent = 'Grid Size';
    blackButton.textContent = 'Black';
    multiColourButton.textContent = 'Multi-coloured';
    blackButton.classList.add('black-button');
    multiColourButton.classList.add('multicolour-button');
    sizeButton.classList.add('size-button');
    div.appendChild(blackButton);
    div.appendChild(multiColourButton);
    div.appendChild(sizeButton);
    body.appendChild(div);
    
    const sizeBtn = document.querySelector('.size-button');
    sizeBtn.addEventListener('click', promptGrid);
    
    const blackBtn = document.querySelector('.black-button');
    blackBtn.addEventListener('click', blackColour);

    const multiBtn = document.querySelector('.multicolour-button');
    multiBtn.addEventListener('click', multiColour);
    
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
    let gridSize = 16;
    do {
        gridSize = prompt('Select grid size between 16-100', gridSize);
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
    c.forEach((circle) => {
        const ctx = circle.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 75, 55, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    });
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

createTitle();
createButtons();
createGrid();
createKnob();
