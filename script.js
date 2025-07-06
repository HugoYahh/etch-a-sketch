let btnColor = document.querySelector("#color-btn")
let btnClear = document.querySelector("#clear-btn")
let btnRainbow = document.querySelector("#rainbow-btn")
let btnEraser = document.querySelector("#eraser-btn")
let inputSize = document.querySelector("#grid-size")
let gridContainer = document.querySelector(".grid-container")

inputSize.addEventListener("change", createGrid)

function createGrid(e) {
    for (let i = 1; i <= document.querySelector("#grid-size").value; i++) {
        let divi = document.createElement("div");
        gridContainer.appendChild(divi);
        for (let j = 1; j <= document.querySelector("#grid-size").value; j++) {
            let divj = document.createElement("div")
            divi.appendChild(divj)
        }
    }
}