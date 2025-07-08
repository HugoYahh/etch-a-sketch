/*Grab the elements from the html to update them via JS*/
let btnColor = document.querySelector("#color-btn")
let btnClear = document.querySelector("#clear-btn")
let btnRainbow = document.querySelector("#rainbow-btn")
let btnEraser = document.querySelector("#eraser-btn")
let inputSize = document.querySelector("#grid-size")
let gridContainer = document.querySelector(".grid-container")
let label = document.querySelector("label")
let gridSizeText = document.querySelector("#grid-size-text")

let isMouseDown = false;

const MODES = {
    DRAW: 'draw',
    ERASER: 'eraser',
    RAINBOW: 'rainbow',
    CLEAR: 'clear',
    // Add more modes as needed, e.g., 'fill', 'picker'
};

let currentMode = MODES.DRAW;

btnEraser.addEventListener("click", () => {
    currentMode = MODES.ERASER;
})

btnRainbow.addEventListener("click", () => {
    currentMode = MODES.RAINBOW;
})

btnColor.addEventListener("click", () => {
    currentMode = MODES.DRAW;
})

btnClear.addEventListener("click", () => {
    document.querySelectorAll(".grid").forEach((element) => {
        element.style.backgroundColor = "white";
    })
    console.log("clear clicked")
})

/* On change, recreate the grid */
inputSize.addEventListener("change", createGrid)

/*On load, create a grid*/
window.addEventListener("load", (e) => {
    createGrid()
})



/*WHILE changing, update the textContent for the user to see */
inputSize.addEventListener("input", (event) => {
    gridSizeText.textContent = event.target.value + "x" + event.target.value;
})


gridContainer.addEventListener("mousedown", (event) => {
    isMouseDown = true;


})

document.addEventListener("mouseup", (event) => {
    isMouseDown = false;

})

let currentSquare = null

gridContainer.addEventListener("mouseover", (e) => {
    if (isMouseDown) {
        const target = e.target
        if (currentSquare !== target) {
            currentSquare = target;
            paintSquare(currentSquare)
        }
    }
})

function paintSquare(currentSquare) {
    let color = document.querySelector(".color-choice").value
    switch (currentMode) {
        case MODES.DRAW:
            currentSquare.style.backgroundColor = color;
            break;
        case MODES.ERASER:
            currentSquare.style.backgroundColor = "white";
            break;
        case MODES.RAINBOW:
            currentSquare.style.backgroundColor = RainbowColorChoice();
            break;
        default:
            console.log("ERROR")
            break;
    }

}

function RainbowColorChoice() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/*Creating the div grid, styling it */


function createGrid(e) {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= document.querySelector("#grid-size").value * document.querySelector("#grid-size").value; i++) {
        let divi = document.createElement("div");
        divi.classList.add("grid")
        let width = 500 / Math.floor(parseInt(document.querySelector("#grid-size").value))
        divi.style.height = width + "px"
        divi.style.width = width + "px"
        divi.style.backgroundColor = "white"
        gridContainer.appendChild(divi);
    }
}


