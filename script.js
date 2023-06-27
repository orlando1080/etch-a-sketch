function createGrid(rows) {
    const body = document.querySelector('body');
    for (let i = 0; i < rows; i++) {
        const containerRow = document.createElement('div');
        containerRow.classList.add('container-row');
        body.appendChild(containerRow)
        for (let j = 0; j < rows; j++) {
            const containerItem = document.createElement('div');
            containerItem.classList.add('container-item');
            containerRow.appendChild(containerItem);
        }
    }
    body.appendChild(containerRow);
}

createGrid(16);