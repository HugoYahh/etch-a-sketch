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

/*WHILE changing, update the textContent for the user to see */
inputSize.addEventListener("input", (event) => {
    gridSizeText.textContent = event.target.value + "x" + event.target.value;
})

/*Creating the div grid, styling it */
function createGrid(e) {
    gridContainer.innerHTML = ""; /*If exists, deletes ancient divs from another grid*/
    for (let i = 1; i <= document.querySelector("#grid-size").value; i++) {
        let divi = document.createElement("div");
        gridContainer.appendChild(divi);
        for (let j = 1; j <= document.querySelector("#grid-size").value; j++) {
            let divj = document.createElement("div")
            divi.appendChild(divj)
        }
    }

}