const grid = document.querySelector("#grid");
grid.style.width = "560px";
grid.style.height = "560px";
const scaleButton = document.querySelector("#scale-button");
const resetButton = document.querySelector("#reset-button");
const greyScaleButton = document.querySelector("#greyscale-button");
const rainbowButton = document.querySelector("#rainbow-button");
greyScaleButton.disabled = true;

makeGrid(16);

grid.addEventListener("mouseover", (e) => {
    if (greyScaleButton.disabled == true) {
        e.target.style.backgroundColor = "black";
    } else if (rainbowButton.disabled == true) {
        e.target.style.backgroundColor = "rgb(" + randomColorValue() + "," + randomColorValue() + "," + randomColorValue() + ")";
    }
});

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

scaleButton.addEventListener("click", () => {
    let numCellsPerRow = Number(prompt("How many cells per row? (1-100)"));

    while (numCellsPerRow > 100) {
        numCellsPerRow = Number(prompt("How many cells per row? (1-100)"));
    }

    makeGrid(numCellsPerRow);
});

resetButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
});

greyScaleButton.addEventListener("click", () => {
    greyScaleButton.disabled = true;
    rainbowButton.disabled = false;

    greyScaleButton.style.color = "rgb(34,49,29)";
    greyScaleButton.style.backgroundColor = "rgb(159, 209, 129)";
    greyScaleButton.style.border = "4px solid rgb(34,49,29)";

    rainbowButton.style.color = "rgb(159, 209, 129)";
    rainbowButton.style.backgroundColor = "rgb(34,49,29)";
    rainbowButton.style.border = "";
});

rainbowButton.addEventListener("click", () => {
    rainbowButton.disabled = true;
    greyScaleButton.disabled = false;

    rainbowButton.style.color = "rgb(34,49,29)";
    rainbowButton.style.backgroundColor = "rgb(159, 209, 129)";
    rainbowButton.style.border = "4px solid rgb(34,49,29)";

    greyScaleButton.style.color = "rgb(159, 209, 129)";
    greyScaleButton.style.backgroundColor = "rgb(34,49,29)";
    greyScaleButton.style.border = "";
})

function makeGrid(numberOfCellsPerRow) {
    const gridCells = [];
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    for (let i = 0; i < numberOfCellsPerRow ** 2; i++) {
        gridCells.push(document.createElement("div"));
    }

    gridCells.forEach((cell) => {
        grid.appendChild(cell);
        cell.className = "cell";
        cell.style.width = (parseInt(grid.style.width) / numberOfCellsPerRow) + 'px';
        cell.style.height = (parseInt(grid.style.height) / numberOfCellsPerRow) + 'px';
    });
}