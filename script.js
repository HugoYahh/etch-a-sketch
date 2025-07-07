/*Grab the elements from the html to update them via JS*/
let btnColor = document.querySelector("#color-btn")
let btnClear = document.querySelector("#clear-btn")
let btnRainbow = document.querySelector("#rainbow-btn")
let btnEraser = document.querySelector("#eraser-btn")
let inputSize = document.querySelector("#grid-size")
let gridContainer = document.querySelector(".grid-container")
let label = document.querySelector("label")
let gridSizeText = document.querySelector("#grid-size-text")

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
