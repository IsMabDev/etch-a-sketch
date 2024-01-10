console.log("this is sketch.js script");
let gridLength = 4;
const button = document.querySelector("#gridNumber");
const buttonParentNode = button.parentElement;

createGrid();
button.addEventListener("click", () => {
  gridLength = prompt(`Enter The grid length 
    It must be an integer betwee 1 and 100
    ;)`);

  if (
    Number.isInteger(Number(gridLength)) &&
    gridLength > 0 &&
    gridLength <= 100
  ) {
    resetGrid();
    createGrid();
  }
});
function resetGrid() {
  const containerToDelete = document.querySelector("#main-container");
  containerToDelete.remove();
}
function createGrid() {
  const container = document.createElement("div");
  container.setAttribute("id", "main-container");
  buttonParentNode.insertBefore(container, button);
  for (let i = 0; i < gridLength; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row-container");
    for (let j = 0; j < gridLength; j++) {
      const colElement = document.createElement("div");
      colElement.classList.add("grid-element");
      rowElement.appendChild(colElement);
    }
    container.appendChild(rowElement);
  }
}
